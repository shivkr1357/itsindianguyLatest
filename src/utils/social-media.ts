import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { SocialAccount, SocialPlatform } from "@/types/social-media";

// Create or update social account
export const saveSocialAccount = async (account: Omit<SocialAccount, "createdAt" | "updatedAt">) => {
  try {
    const accountRef = doc(db, "social_accounts", account.id);
    const accountData = {
      ...account,
      updatedAt: serverTimestamp(),
      createdAt: account.createdAt || serverTimestamp(),
    };

    await setDoc(accountRef, accountData, { merge: true });
    return { success: true, data: accountData };
  } catch (error) {
    console.error("Error saving social account:", error);
    return { success: false, error };
  }
};

// Get social account by ID
export const getSocialAccount = async (accountId: string) => {
  try {
    const accountRef = doc(db, "social_accounts", accountId);
    const accountSnap = await getDoc(accountRef);

    if (accountSnap.exists()) {
      return { success: true, data: { id: accountSnap.id, ...accountSnap.data() } as SocialAccount };
    } else {
      return { success: false, error: "Account not found" };
    }
  } catch (error) {
    console.error("Error getting social account:", error);
    return { success: false, error };
  }
};

// Get all social accounts for a user
export const getUserSocialAccounts = async (userId: string) => {
  try {
    const accountsRef = collection(db, "social_accounts");
    const q = query(accountsRef, where("userId", "==", userId), where("isActive", "==", true));
    const querySnapshot = await getDocs(q);

    const accounts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as SocialAccount[];

    return { success: true, data: accounts };
  } catch (error) {
    console.error("Error getting user social accounts:", error);
    return { success: false, error };
  }
};

// Get social account by platform and user
export const getUserPlatformAccount = async (userId: string, platform: SocialPlatform) => {
  try {
    const accountsRef = collection(db, "social_accounts");
    const q = query(
      accountsRef,
      where("userId", "==", userId),
      where("platform", "==", platform),
      where("isActive", "==", true)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, error: "Account not found" };
    }

    const account = {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data(),
    } as SocialAccount;

    return { success: true, data: account };
  } catch (error) {
    console.error("Error getting user platform account:", error);
    return { success: false, error };
  }
};

// Update social account token
export const updateSocialAccountToken = async (
  accountId: string,
  accessToken: string,
  refreshToken?: string,
  tokenExpiry?: number
) => {
  try {
    const accountRef = doc(db, "social_accounts", accountId);
    await updateDoc(accountRef, {
      accessToken,
      ...(refreshToken && { refreshToken }),
      ...(tokenExpiry && { tokenExpiry }),
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating social account token:", error);
    return { success: false, error };
  }
};

// Deactivate social account
export const deactivateSocialAccount = async (accountId: string) => {
  try {
    const accountRef = doc(db, "social_accounts", accountId);
    await updateDoc(accountRef, {
      isActive: false,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error deactivating social account:", error);
    return { success: false, error };
  }
};

// Delete social account
export const deleteSocialAccount = async (accountId: string) => {
  try {
    const accountRef = doc(db, "social_accounts", accountId);
    await deleteDoc(accountRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting social account:", error);
    return { success: false, error };
  }
};

// Check if token is expired
export const isTokenExpired = (tokenExpiry?: number): boolean => {
  if (!tokenExpiry) return false;
  return Date.now() / 1000 >= tokenExpiry;
};

// Generate account ID
export const generateAccountId = (userId: string, platform: SocialPlatform, accountId: string): string => {
  return `${userId}_${platform}_${accountId}`;
};

