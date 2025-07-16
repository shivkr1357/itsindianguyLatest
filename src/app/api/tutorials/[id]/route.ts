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

// GET /api/tutorials/[id] - Get a specific tutorial
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const tutorialRef = adminDb.collection("tutorials").doc(id);
    const tutorialSnap = await tutorialRef.get();

    if (!tutorialSnap.exists) {
      return NextResponse.json(
        { error: "Tutorial not found" },
        { status: 404 }
      );
    }

    const tutorialData = tutorialSnap.data() as Tutorial;

    // Increment view count
    await tutorialRef.update({
      views: FieldValue.increment(1),
    });

    return NextResponse.json({
      success: true,
      data: { id: tutorialSnap.id, ...tutorialData },
    });
  } catch (error) {
    console.error("Error getting tutorial:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/tutorials/[id] - Update a tutorial
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
    const tutorialRef = adminDb.collection("tutorials").doc(id);
    const tutorialSnap = await tutorialRef.get();

    if (!tutorialSnap.exists) {
      return NextResponse.json(
        { error: "Tutorial not found" },
        { status: 404 }
      );
    }

    const tutorialData = tutorialSnap.data() as Tutorial;

    // Check if user is the author or admin
    if (tutorialData.authorId !== uid) {
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

    await tutorialRef.update(updates);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating tutorial:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/tutorials/[id] - Delete a tutorial
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
    const tutorialRef = adminDb.collection("tutorials").doc(id);
    const tutorialSnap = await tutorialRef.get();

    if (!tutorialSnap.exists) {
      return NextResponse.json(
        { error: "Tutorial not found" },
        { status: 404 }
      );
    }

    const tutorialData = tutorialSnap.data() as Tutorial;

    // Check if user is the author or admin
    if (tutorialData.authorId !== uid) {
      // Check if user is admin
      const userRef = adminDb.collection("users").doc(uid);
      const userSnap = await userRef.get();
      const userData = userSnap.data();

      if (!userData?.isAdmin) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }

    await tutorialRef.delete();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting tutorial:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
