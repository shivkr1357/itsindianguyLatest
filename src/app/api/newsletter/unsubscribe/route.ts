import { NextRequest, NextResponse } from "next/server";
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Find subscriber
    const subscribersRef = collection(db, "newsletter_subscribers");
    const q = query(subscribersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json(
        { error: "Email not found in subscribers list" },
        { status: 404 }
      );
    }

    // Update subscriber to inactive
    const subscriberDoc = querySnapshot.docs[0];
    await updateDoc(doc(db, "newsletter_subscribers", subscriberDoc.id), {
      isActive: false,
      unsubscribedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Successfully unsubscribed from newsletter",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json(
      { error: "Failed to unsubscribe. Please try again later." },
      { status: 500 }
    );
  }
}

