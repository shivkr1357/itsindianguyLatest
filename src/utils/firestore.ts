import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot,
  QueryConstraint,
  writeBatch,
  runTransaction,
  increment,
} from "firebase/firestore";
import { db } from "@/config/firebase";

// Types
export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: any; // Using any for Firestore Timestamp compatibility
  updatedAt: any;
  isAdmin?: boolean;
  preferences?: {
    theme?: string;
    notifications?: boolean;
  };
}

export interface BlogPost {
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

export interface Tutorial {
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

// User Management
export const createUserProfile = async (
  userData: Omit<UserProfile, "createdAt" | "updatedAt">
) => {
  try {
    const userRef = doc(db, "users", userData.uid);
    const userDoc = {
      ...userData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(userRef, userDoc);
    return { success: true, data: userDoc };
  } catch (error) {
    console.error("Error creating user profile:", error);
    return { success: false, error };
  }
};

export const getUserProfile = async (uid: string) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return { success: true, data: userSnap.data() as UserProfile };
    } else {
      return { success: false, error: "User not found" };
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
    return { success: false, error };
  }
};

export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>
) => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating user profile:", error);
    return { success: false, error };
  }
};

// Blog Posts
export const createBlogPost = async (
  postData: Omit<BlogPost, "id" | "publishedAt" | "updatedAt">
) => {
  try {
    const postsRef = collection(db, "blog_posts");
    const postDoc = {
      ...postData,
      publishedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      views: 0,
    };

    const docRef = await addDoc(postsRef, postDoc);
    return { success: true, data: { id: docRef.id, ...postDoc } };
  } catch (error) {
    console.error("Error creating blog post:", error);
    return { success: false, error };
  }
};

export const getBlogPosts = async (
  status: "draft" | "published" = "published",
  limitCount: number = 10,
  lastDoc?: QueryDocumentSnapshot<DocumentData>
) => {
  try {
    const postsRef = collection(db, "blog_posts");
    let q = query(
      postsRef,
      where("status", "==", status),
      orderBy("publishedAt", "desc"),
      limit(limitCount)
    );

    if (lastDoc) {
      q = query(q, startAfter(lastDoc));
    }

    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];

    return {
      success: true,
      data: posts,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
    };
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return { success: false, error };
  }
};

export const getBlogPostById = async (postId: string) => {
  try {
    const postRef = doc(db, "blog_posts", postId);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      return {
        success: true,
        data: { id: postSnap.id, ...postSnap.data() } as BlogPost,
      };
    } else {
      return { success: false, error: "Post not found" };
    }
  } catch (error) {
    console.error("Error getting blog post:", error);
    return { success: false, error };
  }
};

export const updateBlogPost = async (
  postId: string,
  updates: Partial<BlogPost>
) => {
  try {
    const postRef = doc(db, "blog_posts", postId);
    await updateDoc(postRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating blog post:", error);
    return { success: false, error };
  }
};

export const deleteBlogPost = async (postId: string) => {
  try {
    const postRef = doc(db, "blog_posts", postId);
    await deleteDoc(postRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return { success: false, error };
  }
};

// Tutorials
export const createTutorial = async (
  tutorialData: Omit<Tutorial, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const tutorialsRef = collection(db, "tutorials");
    const tutorialDoc = {
      ...tutorialData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      views: 0,
    };

    const docRef = await addDoc(tutorialsRef, tutorialDoc);
    return { success: true, data: { id: docRef.id, ...tutorialDoc } };
  } catch (error) {
    console.error("Error creating tutorial:", error);
    return { success: false, error };
  }
};

export const getTutorials = async (
  category?: string,
  difficulty?: string,
  status: "draft" | "published" = "published",
  limitCount: number = 10,
  lastDoc?: QueryDocumentSnapshot<DocumentData>
) => {
  try {
    const tutorialsRef = collection(db, "tutorials");
    const constraints: QueryConstraint[] = [
      where("status", "==", status),
      orderBy("createdAt", "desc"),
      limit(limitCount),
    ];

    if (category) {
      constraints.unshift(where("category", "==", category));
    }

    if (difficulty) {
      constraints.unshift(where("difficulty", "==", difficulty));
    }

    let q = query(tutorialsRef, ...constraints);

    if (lastDoc) {
      q = query(q, startAfter(lastDoc));
    }

    const querySnapshot = await getDocs(q);
    const tutorials = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Tutorial[];

    return {
      success: true,
      data: tutorials,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
    };
  } catch (error) {
    console.error("Error getting tutorials:", error);
    return { success: false, error };
  }
};

export const getTutorialById = async (tutorialId: string) => {
  try {
    const tutorialRef = doc(db, "tutorials", tutorialId);
    const tutorialSnap = await getDoc(tutorialRef);

    if (tutorialSnap.exists()) {
      return {
        success: true,
        data: { id: tutorialSnap.id, ...tutorialSnap.data() } as Tutorial,
      };
    } else {
      return { success: false, error: "Tutorial not found" };
    }
  } catch (error) {
    console.error("Error getting tutorial:", error);
    return { success: false, error };
  }
};

export const updateTutorial = async (
  tutorialId: string,
  updates: Partial<Tutorial>
) => {
  try {
    const tutorialRef = doc(db, "tutorials", tutorialId);
    await updateDoc(tutorialRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating tutorial:", error);
    return { success: false, error };
  }
};

export const deleteTutorial = async (tutorialId: string) => {
  try {
    const tutorialRef = doc(db, "tutorials", tutorialId);
    await deleteDoc(tutorialRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting tutorial:", error);
    return { success: false, error };
  }
};

// Analytics and Views
export const incrementViews = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      views: increment(1),
    });
    return { success: true };
  } catch (error) {
    console.error("Error incrementing views:", error);
    return { success: false, error };
  }
};

// Real-time listeners
export const subscribeToUserProfile = (
  uid: string,
  callback: (data: UserProfile | null) => void
) => {
  const userRef = doc(db, "users", uid);
  return onSnapshot(userRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data() as UserProfile);
    } else {
      callback(null);
    }
  });
};

export const subscribeToBlogPosts = (
  status: "draft" | "published" = "published",
  callback: (data: BlogPost[]) => void
) => {
  const postsRef = collection(db, "blog_posts");
  const q = query(
    postsRef,
    where("status", "==", status),
    orderBy("publishedAt", "desc")
  );

  return onSnapshot(q, (querySnapshot) => {
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];
    callback(posts);
  });
};

// Batch operations
export const batchUpdate = async (
  operations: Array<{ type: "update" | "delete"; ref: any; data?: any }>
) => {
  try {
    const batch = writeBatch(db);

    operations.forEach(({ type, ref, data }) => {
      if (type === "update" && data) {
        batch.update(ref, data);
      } else if (type === "delete") {
        batch.delete(ref);
      }
    });

    await batch.commit();
    return { success: true };
  } catch (error) {
    console.error("Error in batch update:", error);
    return { success: false, error };
  }
};

// Transaction operations
export const runTransactionWithRetry = async <T>(
  updateFunction: (transaction: any) => Promise<T>,
  maxAttempts: number = 5
): Promise<{ success: boolean; data?: T; error?: any }> => {
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      const result = await runTransaction(db, updateFunction);
      return { success: true, data: result };
    } catch (error: any) {
      attempt++;
      if (attempt === maxAttempts || error.code !== "failed-precondition") {
        return { success: false, error };
      }
      // Wait before retrying
      await new Promise((resolve) =>
        setTimeout(resolve, Math.pow(2, attempt) * 100)
      );
    }
  }

  return { success: false, error: "Max retry attempts reached" };
};
