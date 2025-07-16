"use client";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import api, {
  ApiResponse,
  handleApiResponse,
  handleApiError,
} from "@/lib/axios";

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

// API functions
const tutorialsApi = {
  async getTutorials(params?: {
    status?: "draft" | "published";
    limit?: number;
    category?: string;
    difficulty?: string;
  }): Promise<ApiResponse<Tutorial[]>> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.status) searchParams.append("status", params.status);
      if (params?.limit) searchParams.append("limit", params.limit.toString());
      if (params?.category) searchParams.append("category", params.category);
      if (params?.difficulty)
        searchParams.append("difficulty", params.difficulty);

      const response = await api.get(
        `/api/tutorials?${searchParams.toString()}`
      );
      return handleApiResponse<Tutorial[]>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async getTutorial(id: string): Promise<ApiResponse<Tutorial>> {
    try {
      const response = await api.get(`/api/tutorials/${id}`);
      return handleApiResponse<Tutorial>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async createTutorial(
    tutorialData: Omit<Tutorial, "id" | "createdAt" | "updatedAt">
  ): Promise<ApiResponse<Tutorial>> {
    try {
      const response = await api.post("/api/tutorials", tutorialData);
      return handleApiResponse<Tutorial>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async updateTutorial(
    id: string,
    updates: Partial<Tutorial>
  ): Promise<ApiResponse<void>> {
    try {
      const response = await api.put(`/api/tutorials/${id}`, updates);
      return handleApiResponse<void>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async deleteTutorial(id: string): Promise<ApiResponse<void>> {
    try {
      const response = await api.delete(`/api/tutorials/${id}`);
      return handleApiResponse<void>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },
};

// Tutorials Hook
export const useTutorials = (
  status: "draft" | "published" = "published",
  category?: string,
  difficulty?: string
) => {
  const { user } = useAuth();
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTutorials = useCallback(
    async (params?: {
      status?: "draft" | "published";
      limit?: number;
      category?: string;
      difficulty?: string;
    }) => {
      setLoading(true);
      setError(null);

      const result = await tutorialsApi.getTutorials(params);

      if (result.success && result.data) {
        setTutorials(result.data);
      } else {
        setError(result.error || "Failed to fetch tutorials");
      }

      setLoading(false);
    },
    []
  );

  // Fetch tutorials when filters change
  useEffect(() => {
    fetchTutorials({ status, category, difficulty });
  }, [status, category, difficulty, fetchTutorials]);

  const createTutorial = useCallback(
    async (tutorialData: Omit<Tutorial, "id" | "createdAt" | "updatedAt">) => {
      if (!user) {
        setError("No user logged in");
        return { success: false, error: "No user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await tutorialsApi.createTutorial(tutorialData);

      if (result.success && result.data) {
        // Add new tutorial to the list
        setTutorials((prev) => [result.data!, ...prev]);
      } else {
        setError(result.error || "Failed to create tutorial");
      }

      setLoading(false);
      return result;
    },
    [user]
  );

  const updateTutorial = useCallback(
    async (id: string, updates: Partial<Tutorial>) => {
      if (!user) {
        setError("No user logged in");
        return { success: false, error: "No user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await tutorialsApi.updateTutorial(id, updates);

      if (result.success) {
        // Update tutorial in the list
        setTutorials((prev) =>
          prev.map((tutorial) =>
            tutorial.id === id ? { ...tutorial, ...updates } : tutorial
          )
        );
      } else {
        setError(result.error || "Failed to update tutorial");
      }

      setLoading(false);
      return result;
    },
    [user]
  );

  const deleteTutorial = useCallback(
    async (id: string) => {
      if (!user) {
        setError("No user logged in");
        return { success: false, error: "No user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await tutorialsApi.deleteTutorial(id);

      if (result.success) {
        // Remove tutorial from the list
        setTutorials((prev) => prev.filter((tutorial) => tutorial.id !== id));
      } else {
        setError(result.error || "Failed to delete tutorial");
      }

      setLoading(false);
      return result;
    },
    [user]
  );

  const publishTutorial = useCallback(
    async (id: string) => {
      return updateTutorial(id, { status: "published" });
    },
    [updateTutorial]
  );

  const unpublishTutorial = useCallback(
    async (id: string) => {
      return updateTutorial(id, { status: "draft" });
    },
    [updateTutorial]
  );

  return {
    tutorials,
    loading,
    error,
    fetchTutorials,
    createTutorial,
    updateTutorial,
    deleteTutorial,
    publishTutorial,
    unpublishTutorial,
  };
};

// Single Tutorial Hook
export const useTutorial = (id: string | null) => {
  const { user } = useAuth();
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTutorial = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    setError(null);

    const result = await tutorialsApi.getTutorial(id);

    if (result.success && result.data) {
      setTutorial(result.data);
    } else {
      setError(result.error || "Failed to fetch tutorial");
    }

    setLoading(false);
  }, [id]);

  // Fetch tutorial when id changes
  useEffect(() => {
    if (id) {
      fetchTutorial();
    } else {
      setTutorial(null);
      setError(null);
    }
  }, [id, fetchTutorial]);

  const updateTutorial = useCallback(
    async (updates: Partial<Tutorial>) => {
      if (!id || !user) {
        setError("No tutorial ID or user logged in");
        return { success: false, error: "No tutorial ID or user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await tutorialsApi.updateTutorial(id, updates);

      if (result.success) {
        setTutorial((prev) => (prev ? { ...prev, ...updates } : null));
      } else {
        setError(result.error || "Failed to update tutorial");
      }

      setLoading(false);
      return result;
    },
    [id, user]
  );

  const deleteTutorial = useCallback(async () => {
    if (!id || !user) {
      setError("No tutorial ID or user logged in");
      return { success: false, error: "No tutorial ID or user logged in" };
    }

    setLoading(true);
    setError(null);

    const result = await tutorialsApi.deleteTutorial(id);

    if (result.success) {
      setTutorial(null);
    } else {
      setError(result.error || "Failed to delete tutorial");
    }

    setLoading(false);
    return result;
  }, [id, user]);

  const publishTutorial = useCallback(async () => {
    return updateTutorial({ status: "published" });
  }, [updateTutorial]);

  const unpublishTutorial = useCallback(async () => {
    return updateTutorial({ status: "draft" });
  }, [updateTutorial]);

  return {
    tutorial,
    loading,
    error,
    fetchTutorial,
    updateTutorial,
    deleteTutorial,
    publishTutorial,
    unpublishTutorial,
  };
};
