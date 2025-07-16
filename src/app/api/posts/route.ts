import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/firebase-admin";
import {
  FieldValue,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase-admin/firestore";

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

// GET /api/posts - Get all published posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "published";
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");

    let query = adminDb.collection("blog_posts").where("status", "==", status);

    if (category) {
      query = query.where("category", "==", category);
    }

    const querySnapshot = await query
      .orderBy("publishedAt", "desc")
      .limit(limit)
      .get();

    const posts = querySnapshot.docs.map(
      (doc: QueryDocumentSnapshot<DocumentData>) => ({
        id: doc.id,
        ...doc.data(),
      })
    ) as BlogPost[];

    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/posts - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const uid = decodedToken.uid;

    const body = await request.json();
    const { title, content, excerpt, tags, status, featuredImage, readTime } =
      body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const postsRef = adminDb.collection("blog_posts");
    const postDoc = {
      title,
      content,
      excerpt: excerpt || content.substring(0, 150) + "...",
      authorId: uid,
      authorName: decodedToken.name || "Anonymous",
      publishedAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
      tags: tags || [],
      status: status || "draft",
      featuredImage: featuredImage || "",
      readTime: readTime || Math.ceil(content.split(" ").length / 200),
      views: 0,
    };

    const docRef = await postsRef.add(postDoc);
    return NextResponse.json({
      success: true,
      data: { id: docRef.id, ...postDoc },
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
