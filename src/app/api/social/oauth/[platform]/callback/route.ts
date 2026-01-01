import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { SocialPlatform } from "@/types/social-media";
import { FieldValue } from "firebase-admin/firestore";

// Helper function to generate account ID
const generateAccountId = (
  userId: string,
  platform: SocialPlatform,
  accountId: string
): string => {
  return `${userId}_${platform}_${accountId}`;
};

// OAuth callback endpoint
export async function GET(
  request: NextRequest,
  { params }: { params: { platform: string } }
) {
  try {
    const platform = params.platform as SocialPlatform;
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state"); // userId
    const error = searchParams.get("error");

    if (error) {
      return NextResponse.redirect(
        `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/social/dashboard?error=${encodeURIComponent(error)}`
      );
    }

    if (!code || !state) {
      return NextResponse.redirect(
        `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/social/dashboard?error=missing_params`
      );
    }

    const userId = state;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const redirectUri = `${baseUrl}/api/social/oauth/${platform}/callback`;

    let accountData: any = {};

    switch (platform) {
      case "facebook":
      case "instagram": {
        // Exchange code for access token
        const fbAppId = process.env.FACEBOOK_APP_ID;
        const fbAppSecret = process.env.FACEBOOK_APP_SECRET;
        if (!fbAppId || !fbAppSecret) {
          throw new Error("Facebook credentials not configured");
        }

        const tokenResponse = await fetch(
          `https://graph.facebook.com/v18.0/oauth/access_token?client_id=${fbAppId}&client_secret=${fbAppSecret}&redirect_uri=${encodeURIComponent(
            redirectUri
          )}&code=${code}`
        );
        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
          throw new Error(
            tokenData.error.message || "Failed to get access token"
          );
        }

        const accessToken = tokenData.access_token;
        const expiresIn = tokenData.expires_in;

        // First, verify the token works by getting user info
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/v18.0/me?fields=id,name&access_token=${accessToken}`
        );
        const userInfo = await userInfoResponse.json();

        if (userInfo.error) {
          console.error("Facebook user info error:", userInfo.error);
          throw new Error(
            `Facebook API Error: ${userInfo.error.message} (Code: ${userInfo.error.code}). Please try re-authorizing the app.`
          );
        }

        // Check what permissions we have
        let permissionsData: any = { data: [] };
        try {
          const permissionsResponse = await fetch(
            `https://graph.facebook.com/v18.0/me/permissions?access_token=${accessToken}`
          );
          permissionsData = await permissionsResponse.json();
          console.log(
            "Granted permissions:",
            JSON.stringify(permissionsData, null, 2)
          );
        } catch (permError) {
          console.error("Error checking permissions:", permError);
          // Continue even if permission check fails
        }

        // Get user pages
        const pagesResponse = await fetch(
          `https://graph.facebook.com/v18.0/me/accounts?fields=id,name,access_token&access_token=${accessToken}`
        );
        const pagesData = await pagesResponse.json();

        if (pagesData.error) {
          console.error("Facebook pages error:", pagesData.error);
          console.error(
            "Error details:",
            JSON.stringify(pagesData.error, null, 2)
          );

          // Error code 5 (NOT_FOUND) typically means no pages or insufficient permissions
          if (pagesData.error.code === 5) {
            const hasPagesPermission = permissionsData.data?.some(
              (p: any) =>
                p.permission === "pages_manage_posts" && p.status === "granted"
            );

            // Build detailed error message
            let errorDetails = "❌ Error Code 5 (NOT_FOUND)\n\n";

            if (!hasPagesPermission) {
              errorDetails += "🔴 Missing 'pages_manage_posts' permission!\n\n";
              errorDetails += "Solution:\n";
              errorDetails +=
                "1. Go to: https://www.facebook.com/settings?tab=business_tools\n";
              errorDetails += "2. Remove this app\n";
              errorDetails += "3. Try connecting again\n";
              errorDetails +=
                "4. Make sure to check ALL permission boxes, especially 'pages_manage_posts'\n\n";
            } else {
              errorDetails +=
                "✅ 'pages_manage_posts' permission is granted\n\n";
            }

            errorDetails +=
              "🔴 MAIN ISSUE: You don't have a Facebook Page!\n\n";
            errorDetails +=
              "The Facebook API only works with Pages, NOT personal profiles.\n\n";
            errorDetails += "QUICK FIX:\n";
            errorDetails +=
              "1. Create a Facebook Page: https://www.facebook.com/pages/create\n";
            errorDetails += "2. Choose 'Business or Brand' (or any type)\n";
            errorDetails += "3. Fill in page name and category\n";
            errorDetails += "4. Make sure you're the ADMIN of the page\n";
            errorDetails += "5. Try connecting again\n\n";
            errorDetails +=
              "Verify you have a page: https://www.facebook.com/pages/manage\n\n";
            errorDetails +=
              "Note: If test users are disabled, you can still use the app if you're the app admin.";

            throw new Error(errorDetails);
          }

          throw new Error(
            `Facebook API Error: ${pagesData.error.message} (Code: ${pagesData.error.code}). ` +
              `Type: ${pagesData.error.type || "Unknown"}. ` +
              `Please check your Facebook App settings and permissions.`
          );
        }

        // Check if pages array is empty
        if (!pagesData.data || pagesData.data.length === 0) {
          const hasPagesPermission = permissionsData.data?.some(
            (p: any) =>
              p.permission === "pages_manage_posts" && p.status === "granted"
          );

          if (!hasPagesPermission) {
            throw new Error(
              "Permission issue: 'pages_manage_posts' is not granted. " +
                "Please revoke app access and re-authorize, making sure to grant ALL permissions."
            );
          }

          throw new Error(
            "You don't have any Facebook Pages. To use this feature:\n\n" +
              "1. Create a Facebook Page at: https://www.facebook.com/pages/create\n" +
              "2. Make sure you're an admin of the page\n" +
              "3. Try connecting again\n\n" +
              "Note: Facebook API only works with Pages, not personal profiles."
          );
        }

        // For now, use the first page (user can select later)
        const page = pagesData.data[0];

        // Use the page access token from the accounts endpoint (it's already a page token)
        const pageAccessToken = page.access_token || accessToken;

        // For Instagram, get the Instagram Business Account connected to the page
        let instagramAccountId = null;
        if (platform === "instagram") {
          const igResponse = await fetch(
            `https://graph.facebook.com/v18.0/${page.id}?fields=instagram_business_account&access_token=${pageAccessToken}`
          );
          const igData = await igResponse.json();

          if (igData.error) {
            console.error("Instagram account error:", igData.error);
            throw new Error(
              `Failed to get Instagram account: ${igData.error.message}. Make sure your Instagram account is a Business or Creator account connected to this Facebook Page.`
            );
          }

          instagramAccountId = igData.instagram_business_account?.id;

          if (!instagramAccountId) {
            throw new Error(
              "No Instagram Business Account connected to this Facebook Page. Please connect your Instagram Business/Creator account to this Facebook Page in Facebook Settings."
            );
          }
        }

        accountData = {
          userId,
          platform,
          accessToken: pageAccessToken,
          ...(expiresIn && {
            tokenExpiry: Math.floor(Date.now() / 1000) + expiresIn,
          }),
          platformAccountId:
            platform === "instagram" ? instagramAccountId : page.id,
          platformAccountName: page.name,
          platformAccountType: "page",
          metadata: {
            pageId: page.id,
            ...(platform === "instagram" && {
              instagramBusinessAccountId: instagramAccountId,
            }),
          },
          isActive: true,
        };
        break;
      }

      case "twitter": {
        const twitterClientId = process.env.TWITTER_CLIENT_ID;
        const twitterClientSecret = process.env.TWITTER_CLIENT_SECRET;
        if (!twitterClientId || !twitterClientSecret) {
          throw new Error("Twitter credentials not configured");
        }

        // Exchange code for access token
        const tokenResponse = await fetch(
          "https://api.twitter.com/2/oauth2/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              code,
              grant_type: "authorization_code",
              client_id: twitterClientId,
              redirect_uri: redirectUri,
              code_verifier: "challenge", // In production, use PKCE properly
            }),
          }
        );

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
          throw new Error(
            tokenData.error_description || "Failed to get access token"
          );
        }

        // Get user info
        const userResponse = await fetch("https://api.twitter.com/2/users/me", {
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
          },
        });
        const userData = await userResponse.json();

        accountData = {
          userId,
          platform,
          accessToken: tokenData.access_token,
          ...(tokenData.refresh_token && {
            refreshToken: tokenData.refresh_token,
          }),
          ...(tokenData.expires_in && {
            tokenExpiry: Math.floor(Date.now() / 1000) + tokenData.expires_in,
          }),
          platformAccountId: userData.data?.id,
          platformAccountName: userData.data?.username || "Twitter Account",
          platformAccountType: "profile",
          isActive: true,
        };
        break;
      }

      case "linkedin": {
        const linkedinClientId = process.env.LINKEDIN_CLIENT_ID;
        const linkedinClientSecret = process.env.LINKEDIN_CLIENT_SECRET;
        if (!linkedinClientId || !linkedinClientSecret) {
          throw new Error("LinkedIn credentials not configured");
        }

        // Exchange code for access token
        const tokenResponse = await fetch(
          "https://www.linkedin.com/oauth/v2/accessToken",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              grant_type: "authorization_code",
              code,
              redirect_uri: redirectUri,
              client_id: linkedinClientId,
              client_secret: linkedinClientSecret,
            }),
          }
        );

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
          throw new Error(
            tokenData.error_description || "Failed to get access token"
          );
        }

        // Get user profile
        const profileResponse = await fetch(
          "https://api.linkedin.com/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenData.access_token}`,
            },
          }
        );
        const profileData = await profileResponse.json();

        accountData = {
          userId,
          platform,
          accessToken: tokenData.access_token,
          ...(tokenData.refresh_token && {
            refreshToken: tokenData.refresh_token,
          }),
          ...(tokenData.expires_in && {
            tokenExpiry: Math.floor(Date.now() / 1000) + tokenData.expires_in,
          }),
          platformAccountId: profileData.sub,
          platformAccountName: profileData.name || "LinkedIn Account",
          platformAccountType: "profile",
          isActive: true,
        };
        break;
      }

      case "youtube": {
        const youtubeClientId = process.env.YOUTUBE_CLIENT_ID;
        const youtubeClientSecret = process.env.YOUTUBE_CLIENT_SECRET;
        if (!youtubeClientId || !youtubeClientSecret) {
          throw new Error("YouTube credentials not configured");
        }

        // Exchange code for access token
        const tokenResponse = await fetch(
          "https://oauth2.googleapis.com/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              code,
              client_id: youtubeClientId,
              client_secret: youtubeClientSecret,
              redirect_uri: redirectUri,
              grant_type: "authorization_code",
            }),
          }
        );

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
          throw new Error(
            tokenData.error_description || "Failed to get access token"
          );
        }

        // Get channel info
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&access_token=${tokenData.access_token}`
        );
        const channelData = await channelResponse.json();

        const channel = channelData.items?.[0];

        accountData = {
          userId,
          platform,
          accessToken: tokenData.access_token,
          ...(tokenData.refresh_token && {
            refreshToken: tokenData.refresh_token,
          }),
          ...(tokenData.expires_in && {
            tokenExpiry: Math.floor(Date.now() / 1000) + tokenData.expires_in,
          }),
          platformAccountId: channel?.id || "unknown",
          platformAccountName: channel?.snippet?.title || "YouTube Channel",
          platformAccountType: "channel",
          metadata: {
            channelId: channel?.id,
          },
          isActive: true,
        };
        break;
      }

      default:
        throw new Error("Unsupported platform");
    }

    // Save account to Firestore using Admin SDK
    const accountId = generateAccountId(
      userId,
      platform,
      accountData.platformAccountId
    );
    const accountRef = adminDb.collection("social_accounts").doc(accountId);

    await accountRef.set(
      {
        ...accountData,
        id: accountId,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return NextResponse.redirect(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/social/dashboard?connected=${platform}`
    );
  } catch (error: any) {
    console.error("OAuth callback error:", error);
    console.error("Error stack:", error.stack);

    // Provide more detailed error messages
    let errorMessage = error.message || "OAuth failed";

    // Handle specific Facebook API errors
    if (errorMessage.includes("Facebook API Error")) {
      // Keep the detailed error message
    } else if (
      errorMessage.includes("No Facebook Pages") ||
      errorMessage.includes("No Facebook pages")
    ) {
      // Keep the helpful message
    } else if (
      errorMessage.includes("Missing") ||
      errorMessage.includes("Permission")
    ) {
      // Keep permission-related messages
    } else {
      // Generic error - add troubleshooting info
      errorMessage =
        `${errorMessage}\n\nTroubleshooting:\n` +
        `1. Create a Facebook Page at https://www.facebook.com/pages/create\n` +
        `2. Make sure you're an admin of the page\n` +
        `3. Re-authorize the app and grant ALL permissions\n` +
        `4. If app is in Development Mode, add yourself as a Test User\n` +
        `5. Check that redirect URI matches exactly in Facebook App Settings`;
    }

    return NextResponse.redirect(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/social/dashboard?error=${encodeURIComponent(errorMessage)}`
    );
  }
}
