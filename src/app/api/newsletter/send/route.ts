import { NextRequest, NextResponse } from "next/server";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// This endpoint sends newsletters to all active subscribers
export async function POST(request: NextRequest) {
  try {
    // Authentication check - protect the endpoint
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.NEWSLETTER_API_KEY;

    if (apiKey && authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured. Please set RESEND_API_KEY in environment variables." },
        { status: 500 }
      );
    }

    const { subject, content, htmlContent, fromEmail, fromName } = await request.json();

    if (!subject || !content) {
      return NextResponse.json(
        { error: "Subject and content are required" },
        { status: 400 }
      );
    }

    // Get all active subscribers
    const subscribersRef = collection(db, "newsletter_subscribers");
    const q = query(subscribersRef, where("isActive", "==", true));
    const querySnapshot = await getDocs(q);

    const subscribers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Array<{
      id: string;
      email: string;
      name?: string;
      interests?: string;
    }>;

    if (subscribers.length === 0) {
      return NextResponse.json(
        { error: "No active subscribers found" },
        { status: 404 }
      );
    }

    // Default sender information
    const from = fromEmail 
      ? `${fromName || "ItsIndianGuy"} <${fromEmail}>`
      : "ItsIndianGuy <newsletter@itsindianguy.in>";

    // Send emails to all subscribers
    const emailPromises = subscribers.map(async (subscriber) => {
      try {
        // Personalize email with subscriber name if available
        const personalizedContent = subscriber.name
          ? htmlContent?.replace(/\{name\}/g, subscriber.name) || content.replace(/\{name\}/g, subscriber.name)
          : htmlContent || content;

        const personalizedText = subscriber.name
          ? content.replace(/\{name\}/g, subscriber.name)
          : content;

        await resend.emails.send({
          from: from,
          to: subscriber.email,
          subject: subject,
          html: personalizedContent,
          text: personalizedText,
        });

        return { email: subscriber.email, status: "success" };
      } catch (error: any) {
        console.error(`Failed to send email to ${subscriber.email}:`, error);
        return { email: subscriber.email, status: "failed", error: error.message };
      }
    });

    // Wait for all emails to be sent
    const results = await Promise.allSettled(emailPromises);
    
    const successful = results.filter(
      (r) => r.status === "fulfilled" && r.value.status === "success"
    ).length;
    const failed = results.length - successful;

    return NextResponse.json(
      {
        message: `Newsletter sent to ${successful} subscribers`,
        total: subscribers.length,
        successful,
        failed,
        results: results.map((r) => 
          r.status === "fulfilled" ? r.value : { status: "failed", error: "Unknown error" }
        ),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Newsletter send error:", error);
    return NextResponse.json(
      { error: "Failed to send newsletter. Please try again later.", details: error.message },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all subscribers (admin only)
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.NEWSLETTER_API_KEY;

    if (apiKey && authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const subscribersRef = collection(db, "newsletter_subscribers");
    const querySnapshot = await getDocs(subscribersRef);

    const subscribers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(
      {
        count: subscribers.length,
        subscribers,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Get subscribers error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve subscribers" },
      { status: 500 }
    );
  }
}

