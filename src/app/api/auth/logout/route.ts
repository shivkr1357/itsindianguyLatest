import { NextRequest, NextResponse } from "next/server";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

export async function POST(request: NextRequest) {
  try {
    // Sign out from Firebase
    await signOut(auth);

    return NextResponse.json(
      { message: "User signed out successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Logout error:", error);

    return NextResponse.json(
      { error: "An error occurred during logout" },
      { status: 500 }
    );
  }
}
