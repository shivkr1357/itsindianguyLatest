# Authentication API Documentation

This document describes all the authentication API endpoints available in the ItsIndianGuy application.

## Base URL

All API endpoints are relative to your domain: `https://yourdomain.com/api/auth/`

## Authentication Endpoints

### 1. User Sign Up

**Endpoint:** `POST /api/auth/signup`

**Description:** Register a new user with email and password.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (Success - 201):**

```json
{
  "message": "User created successfully",
  "user": {
    "uid": "user_uid_here",
    "email": "user@example.com",
    "displayName": null,
    "photoURL": null,
    "emailVerified": false,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Response (Error - 400/409/500):**

```json
{
  "error": "Error message here"
}
```

**Error Codes:**

- `400`: Invalid email, weak password, missing fields
- `409`: Email already in use
- `500`: Server error

---

### 2. User Sign In

**Endpoint:** `POST /api/auth/signin`

**Description:** Authenticate user with email and password.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (Success - 200):**

```json
{
  "message": "User signed in successfully",
  "user": {
    "uid": "user_uid_here",
    "email": "user@example.com",
    "displayName": "John Doe",
    "photoURL": "https://example.com/photo.jpg",
    "emailVerified": true,
    "lastSignInTime": "2024-01-15T10:30:00.000Z"
  }
}
```

**Response (Error - 400/401/404/429/500):**

```json
{
  "error": "Error message here"
}
```

**Error Codes:**

- `400`: Invalid email
- `401`: Wrong password
- `404`: User not found
- `429`: Too many requests
- `500`: Server error

---

### 3. Google Sign In

**Endpoint:** `POST /api/auth/google`

**Description:** Authenticate user with Google ID token.

**Request Body:**

```json
{
  "idToken": "google_id_token_here"
}
```

**Response (Success - 200):**

```json
{
  "message": "User signed in successfully with Google",
  "user": {
    "uid": "user_uid_here",
    "email": "user@gmail.com",
    "displayName": "John Doe",
    "photoURL": "https://lh3.googleusercontent.com/photo.jpg",
    "emailVerified": true,
    "lastSignInTime": "2024-01-15T10:30:00.000Z",
    "providerId": "google.com"
  }
}
```

**Response (Error - 400/401/403/409/500):**

```json
{
  "error": "Error message here"
}
```

**Error Codes:**

- `400`: Invalid credentials, Google sign-in not enabled
- `401`: Invalid Google credentials
- `403`: User disabled
- `409`: Account exists with different credentials
- `500`: Server error

---

### 4. User Logout

**Endpoint:** `POST /api/auth/logout`

**Description:** Sign out the current user.

**Request Body:** None required

**Response (Success - 200):**

```json
{
  "message": "User signed out successfully"
}
```

**Response (Error - 500):**

```json
{
  "error": "An error occurred during logout"
}
```

---

### 5. Get Current User

**Endpoint:** `GET /api/auth/user`

**Description:** Get details of the currently authenticated user.

**Request Body:** None required

**Response (Success - 200):**

```json
{
  "message": "User details retrieved successfully",
  "user": {
    "uid": "user_uid_here",
    "email": "user@example.com",
    "displayName": "John Doe",
    "photoURL": "https://example.com/photo.jpg",
    "emailVerified": true,
    "lastSignInTime": "2024-01-15T10:30:00.000Z",
    "creationTime": "2024-01-01T00:00:00.000Z",
    "providerId": "password"
  }
}
```

**Response (Error - 401/500):**

```json
{
  "error": "No authenticated user found"
}
```

**Error Codes:**

- `401`: No authenticated user
- `500`: Server error

---

### 6. Update User Profile

**Endpoint:** `PUT /api/auth/update-profile`

**Description:** Update user's display name and/or photo URL.

**Request Body:**

```json
{
  "displayName": "New Display Name",
  "photoURL": "https://example.com/new-photo.jpg"
}
```

**Response (Success - 200):**

```json
{
  "message": "Profile updated successfully",
  "user": {
    "uid": "user_uid_here",
    "email": "user@example.com",
    "displayName": "New Display Name",
    "photoURL": "https://example.com/new-photo.jpg",
    "emailVerified": true,
    "lastSignInTime": "2024-01-15T10:30:00.000Z",
    "creationTime": "2024-01-01T00:00:00.000Z",
    "providerId": "password"
  }
}
```

**Response (Error - 401/500):**

```json
{
  "error": "Error message here"
}
```

**Error Codes:**

- `401`: Requires recent login, no authenticated user
- `500`: Server error

---

## Frontend API Utilities

The application includes utility functions in `src/lib/auth-api.ts` for easy API integration:

### Available Functions:

```typescript
// Sign up with email and password
signUpAPI(email: string, password: string): Promise<AuthResponse>

// Sign in with email and password
signInAPI(email: string, password: string): Promise<AuthResponse>

// Sign in with Google
signInWithGoogleAPI(idToken: string): Promise<AuthResponse>

// Logout
logoutAPI(): Promise<{ message: string }>

// Get current user details
getCurrentUserAPI(): Promise<AuthResponse>

// Update user profile
updateProfileAPI(displayName?: string, photoURL?: string): Promise<AuthResponse>

// Check authentication status
checkAuthStatus(): Promise<boolean>
```

### Usage Example:

```typescript
import { signUpAPI, signInAPI } from "@/lib/auth-api";

// Sign up
try {
  const result = await signUpAPI("user@example.com", "password123");
  console.log("User created:", result.user);
} catch (error) {
  console.error("Signup failed:", error.message);
}

// Sign in
try {
  const result = await signInAPI("user@example.com", "password123");
  console.log("User signed in:", result.user);
} catch (error) {
  console.error("Signin failed:", error.message);
}
```

## Error Handling

All API endpoints return consistent error responses with appropriate HTTP status codes:

- **400**: Bad Request (invalid input)
- **401**: Unauthorized (authentication required)
- **403**: Forbidden (user disabled)
- **404**: Not Found (user not found)
- **409**: Conflict (email already exists)
- **429**: Too Many Requests (rate limited)
- **500**: Internal Server Error

## Security Features

- ✅ Input validation
- ✅ Password strength requirements
- ✅ Rate limiting support
- ✅ Secure error messages
- ✅ Firebase security integration
- ✅ CORS support
- ✅ TypeScript type safety

## Testing

You can test these endpoints using tools like:

- Postman
- cURL
- Thunder Client (VS Code extension)
- Browser Developer Tools

### Example cURL Commands:

```bash
# Sign up
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Sign in
curl -X POST http://localhost:3000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Get current user
curl -X GET http://localhost:3000/api/auth/user
```
