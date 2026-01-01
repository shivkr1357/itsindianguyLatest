import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  increment,
  setDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { SocialPost, UserSocialStats, SocialPlatform } from "@/types/social-media";

// Save a post to Firestore
export const saveSocialPost = async (post: Omit<SocialPost, "id" | "createdAt" | "updatedAt">) => {
  try {
    const postsRef = collection(db, "social_posts");
    const postData = {
      ...post,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(postsRef, postData);
    return { success: true, data: { id: docRef.id, ...postData } };
  } catch (error) {
    console.error("Error saving social post:", error);
    return { success: false, error };
  }
};

// Get user's posts
export const getUserPosts = async (userId: string, limitCount: number = 50) => {
  try {
    const postsRef = collection(db, "social_posts");
    const q = query(
      postsRef,
      where("userId", "==", userId),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);

    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as SocialPost[];

    return { success: true, data: posts };
  } catch (error) {
    console.error("Error getting user posts:", error);
    return { success: false, error };
  }
};

// Get user statistics
export const getUserSocialStats = async (userId: string): Promise<{ success: boolean; data?: UserSocialStats; error?: any }> => {
  try {
    const statsRef = doc(db, "user_social_stats", userId);
    const statsSnap = await getDoc(statsRef);

    if (statsSnap.exists()) {
      return { success: true, data: statsSnap.data() as UserSocialStats };
    } else {
      // Return default stats if not found
      const defaultStats: UserSocialStats = {
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
        connectedAccounts: 0,
        connectedPlatforms: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      return { success: true, data: defaultStats };
    }
  } catch (error) {
    console.error("Error getting user social stats:", error);
    return { success: false, error };
  }
};

// Update user statistics (server-side only, using Admin SDK)
// This will be called from API routes
export const updateUserSocialStats = async (
  userId: string,
  postResults: { platform: SocialPlatform; success: boolean }[],
  connectedAccountsCount: number,
  connectedPlatforms: SocialPlatform[]
) => {
  // This function will be implemented in the API route using Admin SDK
  // since we need to use transactions/increments
  return { userId, postResults, connectedAccountsCount, connectedPlatforms };
};

// Get post by ID
export const getPostById = async (postId: string) => {
  try {
    const postRef = doc(db, "social_posts", postId);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      return { success: true, data: { id: postSnap.id, ...postSnap.data() } as SocialPost };
    } else {
      return { success: false, error: "Post not found" };
    }
  } catch (error) {
    console.error("Error getting post:", error);
    return { success: false, error };
  }
};

