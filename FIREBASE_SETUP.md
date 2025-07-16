# Firebase Authentication Setup

This project uses Firebase Authentication for user sign-in and sign-up functionality.

## Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select an existing project
3. Follow the setup wizard

### 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable the following providers:
   - **Email/Password**: Enable "Email/Password" provider
   - **Google**: Enable "Google" provider and configure OAuth consent screen

### 3. Configure Google Sign-In

1. In the Google provider settings:
   - Add your authorized domain (e.g., `localhost` for development)
   - Configure the OAuth consent screen in Google Cloud Console
   - Add your project's domain to authorized domains

### 4. Get Firebase Configuration

1. In your Firebase project, go to "Project settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select "Web"
4. Register your app and copy the configuration

### 5. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

Replace the values with your actual Firebase configuration.

### 6. Security Rules (Optional)

If you plan to use Firestore or Storage, configure security rules:

**Firestore Rules:**

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

**Storage Rules:**

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Features

- ✅ Email/Password Authentication
- ✅ Google Sign-In
- ✅ User Profile Management
- ✅ Secure Logout
- ✅ Responsive Design
- ✅ Dark Mode Support
- ✅ Error Handling
- ✅ Loading States

## Usage

The authentication system is integrated into the navbar:

- **Signed Out**: Shows "Sign In" and "Sign Up" buttons
- **Signed In**: Shows user profile dropdown with logout option

## Components

- `AuthContext`: Manages authentication state
- `AuthModal`: Modal for sign-in/sign-up
- `SignIn`: Sign-in form component
- `SignUp`: Sign-up form component
- `UserProfile`: User profile dropdown

## API Functions

- `signIn(email, password)`: Email/password sign-in
- `signUp(email, password)`: Email/password sign-up
- `signInWithGoogle()`: Google sign-in
- `logout()`: Sign out user

## Error Handling

The system handles common authentication errors:

- Invalid email/password
- Weak passwords
- Email already in use
- Network errors
- Google sign-in errors
