# Firebase Firestore Setup Guide

This guide explains how to set up and use Firebase Firestore in your Next.js application.

## 🔥 Firebase Configuration

### 1. Environment Variables

Add these to your `.env.local` file:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2. Firebase Console Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Firestore Database
4. Set up security rules (see below)
5. Add your domain to authorized domains in Authentication settings

## 📊 Firestore Collections

### Users Collection (`users`)

```javascript
{
  uid: string,           // Firebase Auth UID
  email: string,         // User email
  displayName: string,   // User display name
  photoURL: string,      // Profile photo URL
  createdAt: timestamp,  // Account creation time
  updatedAt: timestamp,  // Last update time
  isAdmin: boolean,      // Admin privileges
  preferences: {
    theme: string,       // UI theme preference
    notifications: boolean // Notification settings
  }
}
```

### Blog Posts Collection (`blog_posts`)

```javascript
{
  id: string,            // Auto-generated document ID
  title: string,         // Post title
  content: string,       // Post content
  excerpt: string,       // Post excerpt
  authorId: string,      // Author's UID
  authorName: string,    // Author's display name
  publishedAt: timestamp, // Publication date
  updatedAt: timestamp,  // Last update time
  tags: string[],        // Post tags
  status: 'draft' | 'published',
  featuredImage: string, // Featured image URL
  readTime: number,      // Estimated read time
  views: number          // View count
}
```

### Tutorials Collection (`tutorials`)

```javascript
{
  id: string,            // Auto-generated document ID
  title: string,         // Tutorial title
  content: string,       // Tutorial content
  category: string,      // Tutorial category
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  authorId: string,      // Author's UID
  authorName: string,    // Author's display name
  createdAt: timestamp,  // Creation date
  updatedAt: timestamp,  // Last update time
  tags: string[],        // Tutorial tags
  status: 'draft' | 'published',
  featuredImage: string, // Featured image URL
  readTime: number,      // Estimated read time
  views: number          // View count
}
```

## 🔒 Security Rules

Set up these Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Anyone can read published posts
    match /blog_posts/{postId} {
      allow read: if resource.data.status == 'published';
      allow write: if request.auth != null &&
        (resource.data.authorId == request.auth.uid ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }

    // Anyone can read published tutorials
    match /tutorials/{tutorialId} {
      allow read: if resource.data.status == 'published';
      allow write: if request.auth != null &&
        (resource.data.authorId == request.auth.uid ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }
  }
}
```

## 🛠️ Usage Examples

### Creating a User Profile

```javascript
import { createUserProfile } from "@/utils/firestore";

const result = await createUserProfile({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
});

if (result.success) {
  console.log("Profile created successfully");
} else {
  console.error("Error:", result.error);
}
```

### Creating a Blog Post

```javascript
import { createBlogPost } from "@/utils/firestore";

const result = await createBlogPost({
  title: "My First Post",
  content: "This is the content of my blog post...",
  excerpt: "A brief excerpt of the post",
  authorId: user.uid,
  authorName: user.displayName,
  tags: ["programming", "javascript"],
  status: "published",
});

if (result.success) {
  console.log("Post created successfully");
}
```

### Fetching Blog Posts

```javascript
import { getBlogPosts } from "@/utils/firestore";

const result = await getBlogPosts("published", 10);
if (result.success) {
  const posts = result.data;
  console.log("Posts:", posts);
}
```

### Real-time Updates

```javascript
import { subscribeToBlogPosts } from "@/utils/firestore";

const unsubscribe = subscribeToBlogPosts("published", (posts) => {
  console.log("Updated posts:", posts);
});

// Don't forget to unsubscribe when component unmounts
// unsubscribe();
```

## 🎯 Demo Page

Visit `/firestore-demo` to see a working example of:

- User profile creation and management
- Blog post creation and display
- Real-time data synchronization
- Error handling and loading states

## 🔧 API Routes

The following API routes are available for server-side operations:

- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/google` - Google sign-in
- `POST /api/auth/logout` - User logout
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

## 🚀 Best Practices

1. **Error Handling**: Always check the `success` property of returned objects
2. **Loading States**: Use loading states for better UX
3. **Real-time Updates**: Use subscriptions for live data
4. **Security**: Always validate data on both client and server
5. **Performance**: Use pagination for large datasets
6. **Offline Support**: Firestore provides offline persistence by default

## 🐛 Troubleshooting

### Unauthorized Domain Error

- Add your domain to Firebase Console → Authentication → Settings → Authorized domains
- Include `localhost` for development

### Permission Denied

- Check Firestore security rules
- Ensure user is authenticated
- Verify document ownership for write operations

### Real-time Updates Not Working

- Check if subscription is properly set up
- Ensure proper cleanup with `unsubscribe()`
- Verify collection and document paths

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Next.js with Firebase](https://nextjs.org/docs/guides/firebase)
- [Firestore Best Practices](https://firebase.google.com/docs/firestore/best-practices)

## 🔄 Migration from Other Databases

If migrating from another database:

1. Export your data in JSON format
2. Use Firebase Admin SDK for bulk imports
3. Update your application code to use Firestore functions
4. Test thoroughly before going live
5. Consider using Firebase Functions for complex operations

## 📈 Monitoring and Analytics

- Use Firebase Console to monitor Firestore usage
- Set up alerts for quota limits
- Monitor read/write operations
- Track user engagement with analytics

This setup provides a robust foundation for your application's data layer with real-time capabilities and excellent developer experience.
