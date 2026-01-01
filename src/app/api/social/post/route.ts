import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";
import { getUserPlatformAccount, isTokenExpired, getUserSocialAccounts } from "@/utils/social-media";
import { PostContent, PostResult, SocialPlatform, SocialPost } from "@/types/social-media";
import { FieldValue } from "firebase-admin/firestore";

// Post to multiple platforms
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    const body: PostContent = await request.json();
    const { text, imageUrl, videoUrl, platforms } = body;

    if (!text && !imageUrl && !videoUrl) {
      return NextResponse.json({ error: "Post must have text, image, or video" }, { status: 400 });
    }

    if (!platforms || platforms.length === 0) {
      return NextResponse.json({ error: "At least one platform must be selected" }, { status: 400 });
    }

    const results: PostResult[] = [];

    // Post to each platform
    for (const platform of platforms) {
      try {
        const accountResult = await getUserPlatformAccount(userId, platform);
        
        if (!accountResult.success || !accountResult.data) {
          results.push({
            platform,
            success: false,
            error: "Account not connected",
          });
          continue;
        }

        const account = accountResult.data;

        // Check if token is expired
        if (isTokenExpired(account.tokenExpiry)) {
          results.push({
            platform,
            success: false,
            error: "Token expired. Please reconnect your account.",
          });
          continue;
        }

        // Post to platform
        let postResult: PostResult;
        
        switch (platform) {
          case "facebook":
            postResult = await postToFacebook(account, text, imageUrl, videoUrl);
            break;
          case "instagram":
            postResult = await postToInstagram(account, text, imageUrl, videoUrl);
            break;
          case "twitter":
            postResult = await postToTwitter(account, text, imageUrl, videoUrl);
            break;
          case "linkedin":
            postResult = await postToLinkedIn(account, text, imageUrl, videoUrl);
            break;
          case "youtube":
            postResult = await postToYouTube(account, text, videoUrl);
            break;
          default:
            postResult = {
              platform,
              success: false,
              error: "Unsupported platform",
            };
        }

        results.push(postResult);
      } catch (error: any) {
        results.push({
          platform,
          success: false,
          error: error.message || "Posting failed",
        });
      }
    }

    const successCount = results.filter((r) => r.success).length;
    const failureCount = results.filter((r) => !r.success).length;

    // Determine post status
    let postStatus: "success" | "partial" | "failed" = "success";
    if (failureCount === results.length) {
      postStatus = "failed";
    } else if (failureCount > 0) {
      postStatus = "partial";
    }

    // Save post to Firestore
    const postData: Omit<SocialPost, "id" | "createdAt" | "updatedAt"> = {
      userId,
      text,
      ...(imageUrl && { imageUrl }),
      ...(videoUrl && { videoUrl }),
      platforms,
      results,
      status: postStatus,
      totalPlatforms: results.length,
      successfulPlatforms: successCount,
      failedPlatforms: failureCount,
    };

    try {
      const postsRef = adminDb.collection("social_posts");
      await postsRef.add({
        ...postData,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });

      // Update user statistics
      await updateUserStats(userId, results, platforms);
    } catch (error) {
      console.error("Error saving post to Firestore:", error);
      // Don't fail the request if stats update fails
    }

    return NextResponse.json({
      success: failureCount === 0,
      results,
      summary: {
        total: results.length,
        successful: successCount,
        failed: failureCount,
      },
    });
  } catch (error: any) {
    console.error("Post error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

// Platform-specific posting functions
async function postToFacebook(
  account: any,
  text?: string,
  imageUrl?: string,
  videoUrl?: string
): Promise<PostResult> {
  try {
    const pageId = account.metadata?.pageId || account.platformAccountId;
    let url = `https://graph.facebook.com/v18.0/${pageId}/feed?access_token=${account.accessToken}`;

    const params: any = {};
    if (text) params.message = text;
    if (imageUrl) params.link = imageUrl;
    if (videoUrl) params.link = videoUrl;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    if (data.error) {
      return {
        platform: "facebook",
        success: false,
        error: data.error.message || "Facebook posting failed",
      };
    }

    return {
      platform: "facebook",
      success: true,
      postId: data.id,
      url: `https://www.facebook.com/${data.id}`,
    };
  } catch (error: any) {
    return {
      platform: "facebook",
      success: false,
      error: error.message || "Facebook posting failed",
    };
  }
}

async function postToInstagram(
  account: any,
  text?: string,
  imageUrl?: string,
  videoUrl?: string
): Promise<PostResult> {
  try {
    const igAccountId = account.metadata?.instagramBusinessAccountId || account.platformAccountId;
    
    // Instagram requires media, so we need to upload it first
    if (!imageUrl && !videoUrl) {
      return {
        platform: "instagram",
        success: false,
        error: "Instagram requires an image or video",
      };
    }

    // For Instagram, we need to create a media container first
    // This is a simplified version - in production, you'd need to handle media upload properly
    const containerUrl = `https://graph.facebook.com/v18.0/${igAccountId}/media?access_token=${account.accessToken}`;
    
    const containerParams: any = {
      caption: text || "",
    };

    if (imageUrl) {
      containerParams.image_url = imageUrl;
    } else if (videoUrl) {
      containerParams.media_type = "REELS"; // or "VIDEO"
      containerParams.video_url = videoUrl;
    }

    const containerResponse = await fetch(containerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(containerParams),
    });

    const containerData = await containerResponse.json();

    if (containerData.error) {
      return {
        platform: "instagram",
        success: false,
        error: containerData.error.message || "Instagram container creation failed",
      };
    }

    // Publish the container
    const publishUrl = `https://graph.facebook.com/v18.0/${igAccountId}/media_publish?access_token=${account.accessToken}&creation_id=${containerData.id}`;
    const publishResponse = await fetch(publishUrl, {
      method: "POST",
    });

    const publishData = await publishResponse.json();

    if (publishData.error) {
      return {
        platform: "instagram",
        success: false,
        error: publishData.error.message || "Instagram publishing failed",
      };
    }

    return {
      platform: "instagram",
      success: true,
      postId: publishData.id,
    };
  } catch (error: any) {
    return {
      platform: "instagram",
      success: false,
      error: error.message || "Instagram posting failed",
    };
  }
}

async function postToTwitter(
  account: any,
  text?: string,
  imageUrl?: string,
  videoUrl?: string
): Promise<PostResult> {
  try {
    // Twitter API v2 posting
    const tweetUrl = "https://api.twitter.com/2/tweets";
    
    const tweetData: any = {};
    
    if (text) {
      tweetData.text = text;
    }

    // Note: Media upload for Twitter requires additional steps (upload media, get media_id, then attach to tweet)
    // This is a simplified version
    if (imageUrl || videoUrl) {
      // In production, you'd need to upload media first and get media_id
      // For now, we'll just post text
    }

    const response = await fetch(tweetUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${account.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tweetData),
    });

    const data = await response.json();

    if (data.errors) {
      return {
        platform: "twitter",
        success: false,
        error: data.errors[0]?.detail || "Twitter posting failed",
      };
    }

    return {
      platform: "twitter",
      success: true,
      postId: data.data?.id,
      url: `https://twitter.com/i/web/status/${data.data?.id}`,
    };
  } catch (error: any) {
    return {
      platform: "twitter",
      success: false,
      error: error.message || "Twitter posting failed",
    };
  }
}

async function postToLinkedIn(
  account: any,
  text?: string,
  imageUrl?: string,
  videoUrl?: string
): Promise<PostResult> {
  try {
    const profileId = account.platformAccountId;
    
    // LinkedIn requires URN format for profile
    const authorUrn = `urn:li:person:${profileId}`;
    
    const postUrl = "https://api.linkedin.com/v2/ugcPosts";
    
    const postData: any = {
      author: authorUrn,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: {
            text: text || "",
          },
          shareMediaCategory: "NONE",
        },
      },
      visibility: {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
      },
    };

    if (imageUrl) {
      // LinkedIn requires registering media first
      // This is simplified - in production, upload media and get URN
      postData.specificContent["com.linkedin.ugc.ShareContent"].shareMediaCategory = "IMAGE";
    }

    const response = await fetch(postUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${account.accessToken}`,
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();

    if (data.serviceErrorCode) {
      return {
        platform: "linkedin",
        success: false,
        error: data.message || "LinkedIn posting failed",
      };
    }

    return {
      platform: "linkedin",
      success: true,
      postId: data.id,
    };
  } catch (error: any) {
    return {
      platform: "linkedin",
      success: false,
      error: error.message || "LinkedIn posting failed",
    };
  }
}

async function postToYouTube(
  account: any,
  text?: string,
  videoUrl?: string
): Promise<PostResult> {
  try {
    if (!videoUrl) {
      return {
        platform: "youtube",
        success: false,
        error: "YouTube requires a video URL",
      };
    }

    // YouTube requires uploading video file directly, not via URL
    // This is a simplified version - in production, you'd need to:
    // 1. Download the video from the URL
    // 2. Upload it to YouTube using resumable upload
    // 3. Set metadata (title, description, etc.)

    // For now, we'll return an error indicating video upload is required
    return {
      platform: "youtube",
      success: false,
      error: "YouTube video upload requires direct file upload. Please use YouTube's upload API directly.",
    };
  } catch (error: any) {
    return {
      platform: "youtube",
      success: false,
      error: error.message || "YouTube posting failed",
    };
  }
}

// Update user statistics in Firestore
async function updateUserStats(
  userId: string,
  postResults: PostResult[],
  attemptedPlatforms: SocialPlatform[]
) {
  try {
    const statsRef = adminDb.collection("user_social_stats").doc(userId);
    const statsDoc = await statsRef.get();

    // Get connected accounts to update connectedPlatforms
    const accountsResult = await getUserSocialAccounts(userId);
    const connectedAccounts = accountsResult.success ? accountsResult.data || [] : [];
    const connectedPlatforms = connectedAccounts.map((acc) => acc.platform);

    // Initialize platform stats
    const platformStats: Record<SocialPlatform, { total: number; successful: number; failed: number }> = {
      facebook: { total: 0, successful: 0, failed: 0 },
      instagram: { total: 0, successful: 0, failed: 0 },
      twitter: { total: 0, successful: 0, failed: 0 },
      linkedin: { total: 0, successful: 0, failed: 0 },
      youtube: { total: 0, successful: 0, failed: 0 },
    };

    // Count posts by platform from results
    postResults.forEach((result) => {
      const platform = result.platform;
      if (platformStats[platform]) {
        platformStats[platform].total += 1;
        if (result.success) {
          platformStats[platform].successful += 1;
        } else {
          platformStats[platform].failed += 1;
        }
      }
    });

    if (statsDoc.exists) {
      // Update existing stats
      const currentStats = statsDoc.data();
      const currentPlatformStats = currentStats?.postsByPlatform || platformStats;

      // Merge platform stats
      Object.keys(platformStats).forEach((platform) => {
        const p = platform as SocialPlatform;
        if (currentPlatformStats[p]) {
          platformStats[p] = {
            total: (currentPlatformStats[p].total || 0) + platformStats[p].total,
            successful: (currentPlatformStats[p].successful || 0) + platformStats[p].successful,
            failed: (currentPlatformStats[p].failed || 0) + platformStats[p].failed,
          };
        }
      });

      await statsRef.update({
        totalPosts: FieldValue.increment(1),
        totalSuccessfulPosts: FieldValue.increment(
          postResults.filter((r) => r.success).length
        ),
        totalFailedPosts: FieldValue.increment(
          postResults.filter((r) => !r.success).length
        ),
        postsByPlatform: platformStats,
        connectedAccounts: connectedAccounts.length,
        connectedPlatforms: Array.from(new Set(connectedPlatforms)),
        lastPostAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
    } else {
      // Create new stats document
      await statsRef.set({
        userId,
        totalPosts: 1,
        totalSuccessfulPosts: postResults.filter((r) => r.success).length,
        totalFailedPosts: postResults.filter((r) => !r.success).length,
        postsByPlatform: platformStats,
        connectedAccounts: connectedAccounts.length,
        connectedPlatforms: Array.from(new Set(connectedPlatforms)),
        lastPostAt: FieldValue.serverTimestamp(),
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
    }
  } catch (error) {
    console.error("Error updating user stats:", error);
    throw error;
  }
}

