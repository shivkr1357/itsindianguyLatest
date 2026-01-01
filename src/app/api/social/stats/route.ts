import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";
import { getUserSocialAccounts } from "@/utils/social-media";
import { UserSocialStats } from "@/types/social-media";

// Get user social media statistics
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    // Get stats from Firestore
    const statsRef = adminDb.collection("user_social_stats").doc(userId);
    const statsDoc = await statsRef.get();

    // Get connected accounts
    const accountsResult = await getUserSocialAccounts(userId);
    const connectedAccounts = accountsResult.success ? accountsResult.data || [] : [];

    let stats: UserSocialStats;

    if (statsDoc.exists) {
      const data = statsDoc.data();
      stats = {
        userId,
        totalPosts: data?.totalPosts || 0,
        totalSuccessfulPosts: data?.totalSuccessfulPosts || 0,
        totalFailedPosts: data?.totalFailedPosts || 0,
        postsByPlatform: data?.postsByPlatform || {
          facebook: { total: 0, successful: 0, failed: 0 },
          instagram: { total: 0, successful: 0, failed: 0 },
          twitter: { total: 0, successful: 0, failed: 0 },
          linkedin: { total: 0, successful: 0, failed: 0 },
          youtube: { total: 0, successful: 0, failed: 0 },
        },
        connectedAccounts: connectedAccounts.length,
        connectedPlatforms: Array.from(new Set(connectedAccounts.map((acc) => acc.platform))),
        lastPostAt: data?.lastPostAt,
        createdAt: data?.createdAt,
        updatedAt: data?.updatedAt,
      };
    } else {
      // Return default stats if not found
      stats = {
        userId,
        totalPosts: 0,
        totalSuccessfulPosts: 0,
        totalFailedPosts: 0,
        postsByPlatform: {
          facebook: { total: 0, successful: 0, failed: 0 },
          instagram: { total: 0, successful: 0, failed: 0 },
          twitter: { total: 0, successful: 0, failed: 0 },
          linkedin: { total: 0, successful: 0, failed: 0 },
          youtube: { total: 0, successful: 0, failed: 0 },
        },
        connectedAccounts: connectedAccounts.length,
        connectedPlatforms: Array.from(new Set(connectedAccounts.map((acc) => acc.platform))),
        createdAt: null,
        updatedAt: null,
      };
    }

    return NextResponse.json({ stats });
  } catch (error: any) {
    console.error("Get stats error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

