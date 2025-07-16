import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// Types
interface Tutorial {
  id?: string;
  title: string;
  content: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  authorId: string;
  authorName: string;
  createdAt: any;
  updatedAt: any;
  tags: string[];
  status: "draft" | "published";
  featuredImage?: string;
  readTime?: number;
  views?: number;
}

// GET /api/tutorials - Get all published tutorials
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "published";
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");
    const difficulty = searchParams.get("difficulty");

    let query = adminDb.collection("tutorials").where("status", "==", status);

    if (category) {
      query = query.where("category", "==", category);
    }

    if (difficulty) {
      query = query.where("difficulty", "==", difficulty);
    }

    const querySnapshot = await query
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get();

    const tutorials = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Tutorial[];

    return NextResponse.json({ success: true, data: tutorials });
  } catch (error) {
    console.error("Error getting tutorials:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/tutorials - Create a new tutorial
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
    const {
      title,
      content,
      category,
      difficulty,
      tags,
      status,
      featuredImage,
      readTime,
    } = body;

    if (!title || !content || !category || !difficulty) {
      return NextResponse.json(
        {
          error: "Title, content, category, and difficulty are required",
        },
        { status: 400 }
      );
    }

    const tutorialsRef = adminDb.collection("tutorials");
    const tutorialDoc = {
      title,
      content,
      category,
      difficulty,
      authorId: uid,
      authorName: decodedToken.name || "Anonymous",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
      tags: tags || [],
      status: status || "draft",
      featuredImage: featuredImage || "",
      readTime: readTime || Math.ceil(content.split(" ").length / 200),
      views: 0,
    };

    const docRef = await tutorialsRef.add(tutorialDoc);
    return NextResponse.json({
      success: true,
      data: { id: docRef.id, ...tutorialDoc },
    });
  } catch (error) {
    console.error("Error creating tutorial:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
