# Backend API Setup with Firebase Admin SDK

This document outlines the new backend API structure using Firebase Admin SDK for secure server-side operations.

## Overview

We've replaced the client-side Firestore operations with secure backend APIs using Firebase Admin SDK. This approach provides:

- **Security**: Server-side authentication and authorization
- **Performance**: Reduced client-side bundle size
- **Control**: Centralized business logic and validation
- **Scalability**: Better caching and optimization opportunities

## Architecture

```
Frontend (React Hooks) → Axios Interceptor → Backend APIs (Next.js) → Firebase Admin SDK → Firestore
```

## Axios Implementation

### Axios Instance with Interceptors (`src/lib/axios.ts`)

- **Automatic Token Handling**: Automatically adds Bearer token to all requests
- **Error Interception**: Centralized error handling for all API calls
- **Response Wrapping**: Consistent response format across all endpoints
- **Authentication Error Handling**: Automatic logout on 401 errors

### Key Features:

- **Request Interceptor**: Automatically adds authentication headers
- **Response Interceptor**: Handles common HTTP errors (401, 403, 404, 500)
- **Error Handling**: Consistent error responses across all hooks
- **Token Management**: Automatic token retrieval from localStorage

## Backend API Structure

### 1. Firebase Admin Configuration

- **File**: `src/lib/firebase-admin.ts`
- **Purpose**: Initialize Firebase Admin SDK with service account credentials
- **Features**: Authentication and Firestore services

### 2. API Routes

#### User Management (`/api/users`)

- `GET` - Get user profile
- `POST` - Create user profile
- `PUT` - Update user profile
- `DELETE` - Delete user profile

#### Blog Posts (`/api/posts`)

- `GET` - Get all published posts (with filtering)
- `POST` - Create new blog post
- `GET /api/posts/[id]` - Get specific post
- `PUT /api/posts/[id]` - Update specific post
- `DELETE /api/posts/[id]` - Delete specific post

#### Tutorials (`/api/tutorials`)

- `GET` - Get all published tutorials (with filtering)
- `POST` - Create new tutorial
- `GET /api/tutorials/[id]` - Get specific tutorial
- `PUT /api/tutorials/[id]` - Update specific tutorial
- `DELETE /api/tutorials/[id]` - Delete specific tutorial

## Frontend Hooks

### 1. User Management Hook (`useUser`)

```typescript
import { useUser } from "@/hooks/useUser";

const { profile, loading, error, createProfile, updateProfile, deleteProfile } =
  useUser();
```

**Features:**

- Automatic profile fetching when user changes
- Profile creation, update, and deletion
- Theme and notification preferences management

### 2. Blog Posts Hook (`usePosts`)

```typescript
import { usePosts, usePost } from "@/hooks/usePosts";

// For multiple posts
const { posts, loading, createPost, updatePost, deletePost } =
  usePosts("published");

// For single post
const { post, loading, updatePost, deletePost } = usePost(postId);
```

**Features:**

- Filter by status (draft/published)
- Pagination and category filtering
- Real-time updates to local state
- Publish/unpublish functionality

### 3. Tutorials Hook (`useTutorials`)

```typescript
import { useTutorials, useTutorial } from "@/hooks/useTutorials";

// For multiple tutorials
const { tutorials, loading, createTutorial, updateTutorial, deleteTutorial } =
  useTutorials("published", "react", "beginner");

// For single tutorial
const { tutorial, loading, updateTutorial, deleteTutorial } =
  useTutorial(tutorialId);
```

**Features:**

- Filter by status, category, and difficulty
- Pagination support
- Real-time updates to local state
- Publish/unpublish functionality

## Security Features

### 1. Authentication

- All protected routes require valid Firebase ID token
- Token verification using Firebase Admin SDK
- Automatic token refresh handling

### 2. Authorization

- Users can only modify their own content
- Admin users have additional privileges
- Role-based access control

### 3. Data Validation

- Server-side validation for all inputs
- Type safety with TypeScript
- Sanitization of user inputs

## Environment Variables

Add these to your `.env.local`:

```env
# Firebase Admin SDK
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account-email
FIREBASE_PRIVATE_KEY=your-private-key
```

## Database Collections

### Users Collection

```typescript
interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  isAdmin?: boolean;
  preferences?: {
    theme?: string;
    notifications?: boolean;
  };
}
```

### Blog Posts Collection

```typescript
interface BlogPost {
  id?: string;
  title: string;
  content: string;
  excerpt?: string;
  authorId: string;
  authorName: string;
  publishedAt: Timestamp;
  updatedAt: Timestamp;
  tags: string[];
  status: "draft" | "published";
  featuredImage?: string;
  readTime?: number;
  views?: number;
}
```

### Tutorials Collection

```typescript
interface Tutorial {
  id?: string;
  title: string;
  content: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  authorId: string;
  authorName: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  tags: string[];
  status: "draft" | "published";
  featuredImage?: string;
  readTime?: number;
  views?: number;
}
```

## Usage Examples

### Creating a Blog Post

```typescript
const { createPost } = usePosts();

const handleCreatePost = async () => {
  const result = await createPost({
    title: "My New Post",
    content: "This is the content...",
    tags: ["react", "nextjs"],
    status: "draft",
    authorId: user.uid,
    authorName: user.displayName || "Anonymous",
  });

  if (result.success) {
    console.log("Post created successfully!");
  }
};
```

### Updating User Profile

```typescript
const { updateProfile } = useUser();

const handleUpdateTheme = async () => {
  await updateProfile({
    preferences: {
      theme: "dark",
      notifications: true,
    },
  });
};
```

### Filtering Tutorials

```typescript
const { tutorials } = useTutorials("published", "react", "beginner");

// This will fetch only published React tutorials for beginners
```

## Error Handling

All hooks provide comprehensive error handling:

```typescript
const { posts, loading, error } = usePosts();

if (error) {
  console.error("Error:", error);
  // Show error message to user
}

if (loading) {
  // Show loading spinner
}
```

## Performance Optimizations

1. **Caching**: API responses are cached appropriately
2. **Pagination**: Large datasets are paginated
3. **Optimistic Updates**: UI updates immediately, then syncs with server
4. **Debounced Requests**: Prevents excessive API calls

## Testing

### Demo Page

Visit `/demo` to test all API functionality:

- User profile management
- Blog post creation and management
- Tutorial creation and management
- Real-time updates

### API Testing

Use tools like Postman or curl to test API endpoints:

```bash
# Get user profile
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:3000/api/users

# Create a blog post
curl -X POST -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","content":"Content"}' \
  http://localhost:3000/api/posts
```

## Migration from Client-Side Firestore

If you're migrating from the old client-side approach:

1. **Replace imports**:

   ```typescript
   // Old
   import { useFirestore } from "@/hooks/useFirestore";

   // New
   import { usePosts } from "@/hooks/usePosts";
   ```

2. **Update method calls**:

   ```typescript
   // Old
   const { posts, createPost } = useFirestore();

   // New
   const { posts, createPost } = usePosts();
   ```

3. **Update error handling**:

   ```typescript
   // Old
   if (result.success) { ... }

   // New (same interface, but more secure)
   if (result.success) { ... }
   ```

## Benefits of This Approach

1. **Security**: All operations go through authenticated APIs
2. **Performance**: Reduced client-side code and better caching
3. **Maintainability**: Centralized business logic
4. **Scalability**: Easy to add caching, rate limiting, etc.
5. **Type Safety**: Full TypeScript support throughout
6. **Testing**: Easier to test with mocked APIs
7. **Axios Benefits**:
   - Automatic request/response transformation
   - Built-in request cancellation
   - Better error handling with interceptors
   - Automatic retry logic (can be configured)
   - Request/response logging and debugging

## Next Steps

1. Set up Firebase Admin SDK credentials
2. Configure environment variables
3. Test the demo page at `/demo`
4. Integrate hooks into your existing components
5. Add additional features like search, pagination, etc.

## Troubleshooting

### Common Issues

1. **Authentication Errors**: Ensure Firebase Admin SDK is properly configured
2. **CORS Issues**: Next.js API routes handle CORS automatically
3. **Type Errors**: Ensure all TypeScript types are properly imported
4. **Performance Issues**: Check network tab for slow API calls

### Debug Mode

Enable debug logging by adding to your environment:

```env
DEBUG=true
```

This will log all API requests and responses to the console.
