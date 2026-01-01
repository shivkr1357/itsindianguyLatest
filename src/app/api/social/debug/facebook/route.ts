import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";

// Debug endpoint to check Facebook connection status
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    const fbAppId = process.env.FACEBOOK_APP_ID;
    const fbAppSecret = process.env.FACEBOOK_APP_SECRET;

    if (!fbAppId || !fbAppSecret) {
      return NextResponse.json({
        error: "Facebook credentials not configured",
        configured: false,
      });
    }

    // Return diagnostic information
    return NextResponse.json({
      configured: true,
      appId: fbAppId,
      redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/social/oauth/facebook/callback`,
      instructions: {
        step1: "Go to https://www.facebook.com/pages/create and create a Facebook Page",
        step2: "Make sure you're an admin of the page",
        step3: "Go to https://developers.facebook.com/ and check your app settings",
        step4: "Verify redirect URI matches exactly",
        step5: "If in Development Mode, add yourself as a Test User",
      },
      checkList: [
        "Do you have a Facebook Page? (Not just a personal profile)",
        "Are you an admin of the Facebook Page?",
        "Did you grant 'pages_manage_posts' permission?",
        "Is the redirect URI configured correctly?",
        "Is your app in Development Mode? (If yes, add yourself as Test User)",
      ],
    });
  } catch (error: any) {
    console.error("Debug error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

