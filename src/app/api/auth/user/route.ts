import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/config/firebase";

export async function GET(request: NextRequest) {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return NextResponse.json(
        { error: "No authenticated user found" },
        { status: 401 }
      );
    }

    // Return user data (excluding sensitive information)
    const userData = {
      uid: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      emailVerified: currentUser.emailVerified,
      lastSignInTime: currentUser.metadata.lastSignInTime,
      creationTime: currentUser.metadata.creationTime,
      providerId: currentUser.providerData[0]?.providerId,
    };

    return NextResponse.json(
      {
        message: "User details retrieved successfully",
        user: userData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Get user error:", error);

    return NextResponse.json(
      { error: "An error occurred while retrieving user details" },
      { status: 500 }
    );
  }
}
