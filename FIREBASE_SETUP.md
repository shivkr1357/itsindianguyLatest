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
   - **For localhost**: Make sure `localhost` is added to authorized domains in Firebase Console → Authentication → Settings → Authorized domains

### 4. Get Firebase Configuration

1. In your Firebase project, go to "Project settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select "Web"
4. Register your app and copy the configuration

### 5. Get Google OAuth Client ID (for Automatic Sign-In)

To enable automatic sign-in when users are logged into Chrome, you need to get your Google OAuth Client ID:

**⚠️ CRITICAL**: You **MUST** use the **SAME** OAuth 2.0 Client ID that Firebase created when you enabled Google Sign-In. Using a different Client ID will cause the sign-in to fail with "invalid-credential" error.

**Method 1: Get from Firebase Console (Recommended)**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Authentication** → **Sign-in method** → **Google**
4. Look for the **Web client ID** or **OAuth client ID** - this is the one you need!
5. Copy this Client ID

**Method 2: Get from Google Cloud Console**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project (or the project associated with your Firebase project)
3. Navigate to **APIs & Services** → **Credentials**
4. Find your **OAuth 2.0 Client ID** (it should be created automatically when you enable Google Sign-In in Firebase)
5. **IMPORTANT**: Make sure this is the SAME Client ID shown in Firebase Console → Authentication → Sign-in method → Google
6. Click on the OAuth 2.0 Client ID to edit it
7. **IMPORTANT for localhost**: Add the following to **Authorized JavaScript origins**:
   - `http://localhost`
   - `http://localhost:3000` (or whatever port your Next.js app runs on)
   - `http://127.0.0.1:3000`
8. **IMPORTANT for localhost**: Add the following to **Authorized redirect URIs**:
   - `http://localhost:3000` (or whatever port your Next.js app runs on)
   - `http://127.0.0.1:3000`
9. Click **Save**
10. Copy the **Client ID** (it looks like: `123456789-abcdefghijklmnop.apps.googleusercontent.com`)

**⚠️ Common Issue - "Invalid Credential" Error**:

If you see "invalid-credential" error when trying to sign in, it means:

- The Google OAuth Client ID you're using for One Tap is **different** from the one Firebase is using
- **Solution**: Use the Client ID shown in Firebase Console → Authentication → Sign-in method → Google

**⚠️ Localhost Configuration**: For automatic sign-in to work on localhost, you **must** add `http://localhost` and `http://localhost:3000` to both the Authorized JavaScript origins and Authorized redirect URIs in your OAuth 2.0 Client ID settings.

**🚨 FIXING "localhost can't continue using google.com" Error**:

If you see the error message **"localhost can't continue using google.com"** or **"This option is unavailable right now"**, follow these steps:

1. **Go to Google Cloud Console**:

   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Select your Firebase project

2. **Navigate to OAuth 2.0 Client ID**:

   - Go to **APIs & Services** → **Credentials**
   - Find the OAuth 2.0 Client ID (the one shown in Firebase Console → Authentication → Sign-in method → Google)
   - **Click on it to edit**

3. **Add localhost to Authorized JavaScript origins**:

   - Scroll to **Authorized JavaScript origins**
   - Click **+ ADD URI**
   - Add these **exactly** (one at a time):
     - `http://localhost`
     - `http://localhost:3000` (or your port number)
     - `http://127.0.0.1:3000`
   - Make sure there are **NO trailing slashes** (e.g., `http://localhost/` is wrong)

4. **Add localhost to Authorized redirect URIs**:

   - Scroll to **Authorized redirect URIs**
   - Click **+ ADD URI**
   - Add these **exactly**:
     - `http://localhost:3000` (or your port number)
     - `http://127.0.0.1:3000`

5. **Click SAVE** at the bottom

6. **Wait 2-5 minutes** for changes to propagate

7. **Clear browser cache** and try again:

   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or clear cache: Settings → Privacy → Clear browsing data

8. **Verify your `.env.local`** has the correct Client ID:

   ```env
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id_from_firebase
   ```

9. **Restart your Next.js dev server** after updating `.env.local`

**Important Notes**:

- The Client ID must be the **exact same one** shown in Firebase Console
- Changes in Google Cloud Console can take a few minutes to take effect
- Make sure you're using `http://` not `https://` for localhost
- Don't add trailing slashes to the URIs

### 6. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here
```

Replace the values with your actual Firebase configuration and Google OAuth Client ID.

### 7. Security Rules (Optional)

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
- ✅ **Automatic Google Sign-In** (detects Chrome login)
- ✅ User Profile Management
- ✅ Secure Logout
- ✅ Responsive Design
- ✅ Dark Mode Support
- ✅ Error Handling
- ✅ Loading States

## Automatic Sign-In Feature

The app now includes automatic Google sign-in that detects if a user is logged into Chrome/Google and signs them in automatically. This provides a seamless user experience:

- **One Tap Sign-In**: If a user is logged into Chrome, they'll see a One Tap prompt
- **Silent Sign-In**: Attempts to sign in automatically without user interaction
- **Fallback**: If automatic sign-in isn't available, users can still use the manual sign-in button

**Requirements**:

- `NEXT_PUBLIC_GOOGLE_CLIENT_ID` must be set in your environment variables
- Google Sign-In must be enabled in Firebase Authentication
- Your domain must be authorized in Google Cloud Console

**Localhost Setup**:

For automatic sign-in to work on `localhost`:

1. ✅ Add `http://localhost` and `http://localhost:3000` to **Authorized JavaScript origins** in Google Cloud Console
2. ✅ Add `http://localhost:3000` to **Authorized redirect URIs** in Google Cloud Console
3. ✅ Add `localhost` to **Authorized domains** in Firebase Console → Authentication → Settings
4. ✅ Set `NEXT_PUBLIC_GOOGLE_CLIENT_ID` in your `.env.local` file
5. ✅ Restart your Next.js dev server after adding environment variables

**Testing on Localhost**:

- Make sure you're logged into Chrome with a Google account
- Open your app at `http://localhost:3000`
- You should see a One Tap sign-in prompt, or be automatically signed in
- If it doesn't work, check the browser console for errors

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
