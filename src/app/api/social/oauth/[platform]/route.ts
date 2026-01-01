import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import { SocialPlatform } from "@/types/social-media";

// OAuth initiation endpoint
export async function GET(
  request: NextRequest,
  { params }: { params: { platform: string } }
) {
  try {
    const platform = params.platform as SocialPlatform;
    const authHeader = request.headers.get("authorization");
    
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const redirectUri = `${baseUrl}/api/social/oauth/${platform}/callback`;

    let authUrl = "";

    switch (platform) {
      case "facebook": {
        const fbAppId = process.env.FACEBOOK_APP_ID;
        const fbAppSecret = process.env.FACEBOOK_APP_SECRET;
        if (!fbAppId || !fbAppSecret) {
          return NextResponse.json({ error: "Facebook credentials not configured" }, { status: 500 });
        }
        
        const scopes = "pages_manage_posts,pages_read_engagement,instagram_basic,instagram_content_publish,business_management";
        authUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${fbAppId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&state=${userId}`;
        break;
      }

      case "instagram": {
        // Instagram uses Facebook OAuth, so redirect to Facebook with Instagram scopes
        const fbAppId = process.env.FACEBOOK_APP_ID;
        if (!fbAppId) {
          return NextResponse.json({ error: "Facebook credentials not configured" }, { status: 500 });
        }
        
        const scopes = "pages_manage_posts,pages_read_engagement,instagram_basic,instagram_content_publish,business_management";
        authUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${fbAppId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&state=${userId}`;
        break;
      }

      case "twitter": {
        const twitterClientId = process.env.TWITTER_CLIENT_ID;
        if (!twitterClientId) {
          return NextResponse.json({ error: "Twitter credentials not configured" }, { status: 500 });
        }
        
        const scopes = "tweet.read tweet.write users.read offline.access";
        authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${twitterClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&state=${userId}&code_challenge=challenge&code_challenge_method=plain`;
        break;
      }

      case "linkedin": {
        const linkedinClientId = process.env.LINKEDIN_CLIENT_ID;
        if (!linkedinClientId) {
          return NextResponse.json({ error: "LinkedIn credentials not configured" }, { status: 500 });
        }
        
        const scopes = "openid profile email w_member_social w_organization_social";
        authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedinClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&state=${userId}`;
        break;
      }

      case "youtube": {
        const youtubeClientId = process.env.YOUTUBE_CLIENT_ID;
        if (!youtubeClientId) {
          return NextResponse.json({ error: "YouTube credentials not configured" }, { status: 500 });
        }
        
        const scopes = "https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly";
        authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${youtubeClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&response_type=code&state=${userId}&access_type=offline&prompt=consent`;
        break;
      }

      default:
        return NextResponse.json({ error: "Unsupported platform" }, { status: 400 });
    }

    return NextResponse.json({ authUrl });
  } catch (error: any) {
    console.error("OAuth initiation error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

