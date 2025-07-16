import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Sign in with Firebase
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Return user data (excluding sensitive information)
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      lastSignInTime: user.metadata.lastSignInTime,
    };

    return NextResponse.json(
      {
        message: "User signed in successfully",
        user: userData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Signin error:", error);

    // Handle specific Firebase errors
    let errorMessage = "An error occurred during signin";
    let statusCode = 500;

    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "No account found with this email address";
        statusCode = 404;
        break;
      case "auth/wrong-password":
        errorMessage = "Incorrect password";
        statusCode = 401;
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address";
        statusCode = 400;
        break;
      case "auth/user-disabled":
        errorMessage = "This account has been disabled";
        statusCode = 403;
        break;
      case "auth/too-many-requests":
        errorMessage = "Too many failed attempts. Please try again later";
        statusCode = 429;
        break;
      default:
        errorMessage = error.message || "An error occurred during signin";
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
