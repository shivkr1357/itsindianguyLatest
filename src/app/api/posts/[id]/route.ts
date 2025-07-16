import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// Types
interface BlogPost {
  id?: string;
  title: string;
  content: string;
  excerpt?: string;
  authorId: string;
  authorName: string;
  publishedAt: any;
  updatedAt: any;
  tags: string[];
  status: "draft" | "published";
  featuredImage?: string;
  readTime?: number;
  views?: number;
}

// GET /api/posts/[id] - Get a specific blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const postRef = adminDb.collection("blog_posts").doc(id);
    const postSnap = await postRef.get();

    if (!postSnap.exists) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const postData = postSnap.data() as BlogPost;

    // Increment view count
    await postRef.update({
      views: FieldValue.increment(1),
    });

    return NextResponse.json({
      success: true,
      data: { id: postSnap.id, ...postData },
    });
  } catch (error) {
    console.error("Error getting blog post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/posts/[id] - Update a blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const uid = decodedToken.uid;

    const { id } = params;
    const postRef = adminDb.collection("blog_posts").doc(id);
    const postSnap = await postRef.get();

    if (!postSnap.exists) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const postData = postSnap.data() as BlogPost;

    // Check if user is the author or admin
    if (postData.authorId !== uid) {
      // Check if user is admin
      const userRef = adminDb.collection("users").doc(uid);
      const userSnap = await userRef.get();
      const userData = userSnap.data();

      if (!userData?.isAdmin) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }

    const body = await request.json();
    const updates = {
      ...body,
      updatedAt: FieldValue.serverTimestamp(),
    };

    await postRef.update(updates);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/posts/[id] - Delete a blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const uid = decodedToken.uid;

    const { id } = params;
    const postRef = adminDb.collection("blog_posts").doc(id);
    const postSnap = await postRef.get();

    if (!postSnap.exists) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const postData = postSnap.data() as BlogPost;

    // Check if user is the author or admin
    if (postData.authorId !== uid) {
      // Check if user is admin
      const userRef = adminDb.collection("users").doc(uid);
      const userSnap = await userRef.get();
      const userData = userSnap.data();

      if (!userData?.isAdmin) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }

    await postRef.delete();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
