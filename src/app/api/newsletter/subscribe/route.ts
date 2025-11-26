import { NextRequest, NextResponse } from "next/server";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

export async function POST(request: NextRequest) {
  try {
    const { email, name, interests } = await request.json();

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const subscribersRef = collection(db, "newsletter_subscribers");
    const q = query(subscribersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: "Email is already subscribed" },
        { status: 409 }
      );
    }

    // Add subscriber to Firestore
    const subscriberData = {
      email,
      name: name || "",
      interests: interests || "all",
      subscribedAt: new Date().toISOString(),
      isActive: true,
      unsubscribedAt: null,
    };

    await addDoc(subscribersRef, subscriberData);

    return NextResponse.json(
      {
        message: "Successfully subscribed to newsletter",
        email,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}

