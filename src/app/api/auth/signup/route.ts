import { NextRequest, NextResponse } from "next/server";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // Create user with Firebase
    const userCredential = await createUserWithEmailAndPassword(
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
      createdAt: user.metadata.creationTime,
    };

    return NextResponse.json(
      {
        message: "User created successfully",
        user: userData,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error);

    // Handle specific Firebase errors
    let errorMessage = "An error occurred during signup";
    let statusCode = 500;

    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "An account with this email already exists";
        statusCode = 409;
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address";
        statusCode = 400;
        break;
      case "auth/weak-password":
        errorMessage = "Password is too weak";
        statusCode = 400;
        break;
      case "auth/operation-not-allowed":
        errorMessage = "Email/password accounts are not enabled";
        statusCode = 400;
        break;
      default:
        errorMessage = error.message || "An error occurred during signup";
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
