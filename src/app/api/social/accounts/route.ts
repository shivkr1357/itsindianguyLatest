import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";
import { getUserSocialAccounts } from "@/utils/social-media";

// Get all connected social accounts for the user
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    const result = await getUserSocialAccounts(userId);
    
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    // Remove sensitive tokens from response
    const accounts = result.data?.map((account) => ({
      id: account.id,
      platform: account.platform,
      platformAccountId: account.platformAccountId,
      platformAccountName: account.platformAccountName,
      platformAccountType: account.platformAccountType,
      metadata: account.metadata,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
      isActive: account.isActive,
    })) || [];

    // Get user stats
    let stats = null;
    try {
      const statsRef = adminDb.collection("user_social_stats").doc(userId);
      const statsDoc = await statsRef.get();
      if (statsDoc.exists) {
        stats = statsDoc.data();
      }
    } catch (error) {
      console.error("Error getting stats:", error);
      // Don't fail the request if stats fail
    }

    return NextResponse.json({ 
      accounts,
      ...(stats && { stats: {
        totalPosts: stats.totalPosts || 0,
        totalSuccessfulPosts: stats.totalSuccessfulPosts || 0,
        totalFailedPosts: stats.totalFailedPosts || 0,
        connectedAccounts: accounts.length,
        connectedPlatforms: Array.from(new Set(accounts.map((acc) => acc.platform))),
      }}),
    });
  } catch (error: any) {
    console.error("Get accounts error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

