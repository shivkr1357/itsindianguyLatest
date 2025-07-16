"use client";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import api, {
  ApiResponse,
  handleApiResponse,
  handleApiError,
} from "@/lib/axios";

// Types
interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: any;
  updatedAt: any;
  isAdmin?: boolean;
  preferences?: {
    theme?: string;
    notifications?: boolean;
  };
}

// API functions
const userApi = {
  async getUserProfile(): Promise<ApiResponse<UserProfile>> {
    try {
      const response = await api.get("/api/users");
      return handleApiResponse<UserProfile>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async createUserProfile(
    userData: Partial<UserProfile>
  ): Promise<ApiResponse<UserProfile>> {
    try {
      const response = await api.post("/api/users", userData);
      return handleApiResponse<UserProfile>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async updateUserProfile(
    updates: Partial<UserProfile>
  ): Promise<ApiResponse<void>> {
    try {
      const response = await api.put("/api/users", updates);
      return handleApiResponse<void>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async deleteUserProfile(): Promise<ApiResponse<void>> {
    try {
      const response = await api.delete("/api/users");
      return handleApiResponse<void>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },
};

// User Management Hook
export const useUser = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!user) return;

    setLoading(true);
    setError(null);

    const result = await userApi.getUserProfile();

    if (result.success && result.data) {
      setProfile(result.data);
    } else {
      setError(result.error || "Failed to fetch profile");
    }

    setLoading(false);
  }, [user]);

  // Fetch user profile when user changes
  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
      setError(null);
    }
  }, [user, fetchProfile]);

  const createProfile = useCallback(
    async (userData: Partial<UserProfile>) => {
      if (!user) {
        setError("No user logged in");
        return { success: false, error: "No user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await userApi.createUserProfile(userData);

      if (result.success && result.data) {
        setProfile(result.data);
      } else {
        setError(result.error || "Failed to create profile");
      }

      setLoading(false);
      return result;
    },
    [user]
  );

  const updateProfile = useCallback(
    async (updates: Partial<UserProfile>) => {
      if (!user) {
        setError("No user logged in");
        return { success: false, error: "No user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await userApi.updateUserProfile(updates);

      if (result.success) {
        // Update local state
        setProfile((prev) => (prev ? { ...prev, ...updates } : null));
      } else {
        setError(result.error || "Failed to update profile");
      }

      setLoading(false);
      return result;
    },
    [user]
  );

  const deleteProfile = useCallback(async () => {
    if (!user) {
      setError("No user logged in");
      return { success: false, error: "No user logged in" };
    }

    setLoading(true);
    setError(null);

    const result = await userApi.deleteUserProfile();

    if (result.success) {
      setProfile(null);
    } else {
      setError(result.error || "Failed to delete profile");
    }

    setLoading(false);
    return result;
  }, [user]);

  const updatePreferences = useCallback(
    async (preferences: UserProfile["preferences"]) => {
      return updateProfile({ preferences });
    },
    [updateProfile]
  );

  const updateTheme = useCallback(
    async (theme: string) => {
      return updateProfile({
        preferences: {
          ...profile?.preferences,
          theme,
        },
      });
    },
    [updateProfile, profile?.preferences]
  );

  const updateNotifications = useCallback(
    async (notifications: boolean) => {
      return updateProfile({
        preferences: {
          ...profile?.preferences,
          notifications,
        },
      });
    },
    [updateProfile, profile?.preferences]
  );

  return {
    profile,
    loading,
    error,
    fetchProfile,
    createProfile,
    updateProfile,
    deleteProfile,
    updatePreferences,
    updateTheme,
    updateNotifications,
  };
};
