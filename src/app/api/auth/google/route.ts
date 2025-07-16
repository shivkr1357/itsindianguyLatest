import { NextRequest, NextResponse } from "next/server";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/config/firebase";

export async function POST(request: NextRequest) {
  try {
    const { idToken } = await request.json();

    // Validate input
    if (!idToken) {
      return NextResponse.json(
        { error: "Google ID token is required" },
        { status: 400 }
      );
    }

    // Create credential from Google ID token
    const credential = GoogleAuthProvider.credential(idToken);

    // Sign in with Firebase
    const userCredential = await signInWithCredential(auth, credential);
    const user = userCredential.user;

    // Return user data (excluding sensitive information)
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      lastSignInTime: user.metadata.lastSignInTime,
      providerId: user.providerData[0]?.providerId,
    };

    return NextResponse.json(
      {
        message: "User signed in successfully with Google",
        user: userData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Google signin error:", error);

    // Handle specific Firebase errors
    let errorMessage = "An error occurred during Google signin";
    let statusCode = 500;

    switch (error.code) {
      case "auth/invalid-credential":
        errorMessage = "Invalid Google credentials";
        statusCode = 401;
        break;
      case "auth/account-exists-with-different-credential":
        errorMessage =
          "An account already exists with the same email address but different sign-in credentials";
        statusCode = 409;
        break;
      case "auth/operation-not-allowed":
        errorMessage = "Google sign-in is not enabled";
        statusCode = 400;
        break;
      case "auth/user-disabled":
        errorMessage = "This account has been disabled";
        statusCode = 403;
        break;
      default:
        errorMessage =
          error.message || "An error occurred during Google signin";
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
