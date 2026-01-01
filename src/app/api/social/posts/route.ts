import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";
import { SocialPost } from "@/types/social-media";

// Get user's social media posts
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    const { searchParams } = new URL(request.url);
    const limitCount = parseInt(searchParams.get("limit") || "50");

    // Get posts from Firestore
    const postsRef = adminDb.collection("social_posts");
    const query = postsRef
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(limitCount);

    const querySnapshot = await query.get();
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as SocialPost[];

    return NextResponse.json({ posts, count: posts.length });
  } catch (error: any) {
    console.error("Get posts error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

