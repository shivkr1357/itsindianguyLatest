"use client";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import api, {
  ApiResponse,
  handleApiResponse,
  handleApiError,
} from "@/lib/axios";

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

// API functions
const postsApi = {
  async getPosts(params?: {
    status?: "draft" | "published";
    limit?: number;
    category?: string;
  }): Promise<ApiResponse<BlogPost[]>> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.status) searchParams.append("status", params.status);
      if (params?.limit) searchParams.append("limit", params.limit.toString());
      if (params?.category) searchParams.append("category", params.category);

      const response = await api.get(`/api/posts?${searchParams.toString()}`);
      return handleApiResponse<BlogPost[]>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async getPost(id: string): Promise<ApiResponse<BlogPost>> {
    try {
      const response = await api.get(`/api/posts/${id}`);
      return handleApiResponse<BlogPost>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async createPost(
    postData: Omit<BlogPost, "id" | "publishedAt" | "updatedAt">
  ): Promise<ApiResponse<BlogPost>> {
    try {
      const response = await api.post("/api/posts", postData);
      return handleApiResponse<BlogPost>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async updatePost(
    id: string,
    updates: Partial<BlogPost>
  ): Promise<ApiResponse<void>> {
    try {
      const response = await api.put(`/api/posts/${id}`, updates);
      return handleApiResponse<void>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },

  async deletePost(id: string): Promise<ApiResponse<void>> {
    try {
      const response = await api.delete(`/api/posts/${id}`);
      return handleApiResponse<void>(response);
    } catch (error) {
      return handleApiError(error);
    }
  },
};

// Blog Posts Hook
export const usePosts = (status: "draft" | "published" = "published") => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(
    async (params?: {
      status?: "draft" | "published";
      limit?: number;
      category?: string;
    }) => {
      setLoading(true);
      setError(null);

      const result = await postsApi.getPosts(params);

      if (result.success && result.data) {
        setPosts(result.data);
      } else {
        setError(result.error || "Failed to fetch posts");
      }

      setLoading(false);
    },
    []
  );

  // Fetch posts when status changes
  useEffect(() => {
    fetchPosts({ status });
  }, [status, fetchPosts]);

  const createPost = useCallback(
    async (postData: Omit<BlogPost, "id" | "publishedAt" | "updatedAt">) => {
      if (!user) {
        setError("No user logged in");
        return { success: false, error: "No user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await postsApi.createPost(postData);

      if (result.success && result.data) {
        // Add new post to the list
        setPosts((prev) => [result.data!, ...prev]);
      } else {
        setError(result.error || "Failed to create post");
      }

      setLoading(false);
      return result;
    },
    [user]
  );

  const updatePost = useCallback(
    async (id: string, updates: Partial<BlogPost>) => {
      if (!user) {
        setError("No user logged in");
        return { success: false, error: "No user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await postsApi.updatePost(id, updates);

      if (result.success) {
        // Update post in the list
        setPosts((prev) =>
          prev.map((post) => (post.id === id ? { ...post, ...updates } : post))
        );
      } else {
        setError(result.error || "Failed to update post");
      }

      setLoading(false);
      return result;
    },
    [user]
  );

  const deletePost = useCallback(
    async (id: string) => {
      if (!user) {
        setError("No user logged in");
        return { success: false, error: "No user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await postsApi.deletePost(id);

      if (result.success) {
        // Remove post from the list
        setPosts((prev) => prev.filter((post) => post.id !== id));
      } else {
        setError(result.error || "Failed to delete post");
      }

      setLoading(false);
      return result;
    },
    [user]
  );

  const publishPost = useCallback(
    async (id: string) => {
      return updatePost(id, { status: "published" });
    },
    [updatePost]
  );

  const unpublishPost = useCallback(
    async (id: string) => {
      return updatePost(id, { status: "draft" });
    },
    [updatePost]
  );

  return {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    publishPost,
    unpublishPost,
  };
};

// Single Blog Post Hook
export const usePost = (id: string | null) => {
  const { user } = useAuth();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    setError(null);

    const result = await postsApi.getPost(id);

    if (result.success && result.data) {
      setPost(result.data);
    } else {
      setError(result.error || "Failed to fetch post");
    }

    setLoading(false);
  }, [id]);

  // Fetch post when id changes
  useEffect(() => {
    if (id) {
      fetchPost();
    } else {
      setPost(null);
      setError(null);
    }
  }, [id, fetchPost]);

  const updatePost = useCallback(
    async (updates: Partial<BlogPost>) => {
      if (!id || !user) {
        setError("No post ID or user logged in");
        return { success: false, error: "No post ID or user logged in" };
      }

      setLoading(true);
      setError(null);

      const result = await postsApi.updatePost(id, updates);

      if (result.success) {
        setPost((prev) => (prev ? { ...prev, ...updates } : null));
      } else {
        setError(result.error || "Failed to update post");
      }

      setLoading(false);
      return result;
    },
    [id, user]
  );

  const deletePost = useCallback(async () => {
    if (!id || !user) {
      setError("No post ID or user logged in");
      return { success: false, error: "No post ID or user logged in" };
    }

    setLoading(true);
    setError(null);

    const result = await postsApi.deletePost(id);

    if (result.success) {
      setPost(null);
    } else {
      setError(result.error || "Failed to delete post");
    }

    setLoading(false);
    return result;
  }, [id, user]);

  const publishPost = useCallback(async () => {
    return updatePost({ status: "published" });
  }, [updatePost]);

  const unpublishPost = useCallback(async () => {
    return updatePost({ status: "draft" });
  }, [updatePost]);

  return {
    post,
    loading,
    error,
    fetchPost,
    updatePost,
    deletePost,
    publishPost,
    unpublishPost,
  };
};
