import { NextRequest, NextResponse } from "next/server";
import { updateProfile } from "firebase/auth";
import { auth } from "@/config/firebase";

export async function PUT(request: NextRequest) {
  try {
    const { displayName, photoURL } = await request.json();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return NextResponse.json(
        { error: "No authenticated user found" },
        { status: 401 }
      );
    }

    // Update user profile
    await updateProfile(currentUser, {
      displayName: displayName || currentUser.displayName,
      photoURL: photoURL || currentUser.photoURL,
    });

    // Return updated user data
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
        message: "Profile updated successfully",
        user: userData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Update profile error:", error);

    let errorMessage = "An error occurred while updating profile";
    let statusCode = 500;

    switch (error.code) {
      case "auth/requires-recent-login":
        errorMessage = "Please sign in again to update your profile";
        statusCode = 401;
        break;
      default:
        errorMessage =
          error.message || "An error occurred while updating profile";
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
