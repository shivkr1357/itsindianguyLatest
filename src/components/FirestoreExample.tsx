"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  createUserProfile,
  getUserProfile,
  createBlogPost,
  getBlogPosts,
} from "@/utils/firestore";

export default function FirestoreExample() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Create user profile when user signs in
  useEffect(() => {
    if (user && !profile) {
      createUserProfile({
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      }).then((result) => {
        if (result.success) {
          setMessage("User profile created successfully!");
        } else {
          setMessage("Error creating profile: " + result.error);
        }
      });
    }
  }, [user, profile]);

  // Fetch user profile
  useEffect(() => {
    if (user) {
      getUserProfile(user.uid).then((result) => {
        if (result.success) {
          setProfile(result.data);
        }
      });
    }
  }, [user]);

  // Fetch blog posts
  useEffect(() => {
    getBlogPosts().then((result) => {
      if (result.success && result.data) {
        setPosts(result.data);
      }
    });
  }, []);

  const createSamplePost = async () => {
    if (!user) {
      setMessage("Please sign in first");
      return;
    }

    setLoading(true);
    const result = await createBlogPost({
      title: "Sample Blog Post",
      content: "This is a sample blog post content.",
      excerpt: "A sample excerpt for the blog post.",
      authorId: user.uid,
      authorName: user.displayName || "Anonymous",
      tags: ["sample", "blog"],
      status: "published",
    });

    if (result.success) {
      setMessage("Blog post created successfully!");
      // Refresh posts
      getBlogPosts().then((result) => {
        if (result.success && result.data) {
          setPosts(result.data);
        }
      });
    } else {
      setMessage("Error creating post: " + result.error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Firestore Example</h1>

      {message && (
        <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          {user ? (
            <div>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Display Name:</strong> {user.displayName || "Not set"}
              </p>
              <p>
                <strong>UID:</strong> {user.uid}
              </p>
              {profile && (
                <div className="mt-4 p-4 bg-gray-50 rounded">
                  <h3 className="font-semibold">Profile from Firestore:</h3>
                  <pre className="text-sm mt-2">
                    {JSON.stringify(profile, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <p>Please sign in to see your profile</p>
          )}
        </div>

        {/* Blog Posts Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
          <button
            onClick={createSamplePost}
            disabled={loading || !user}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Sample Post"}
          </button>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 border rounded">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
                <p className="text-xs text-gray-500 mt-2">
                  By {post.authorName} • {post.views || 0} views
                </p>
              </div>
            ))}
            {posts.length === 0 && (
              <p className="text-gray-500">
                No blog posts yet. Create one to get started!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Firestore Collections Info */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Firestore Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold">users</h3>
            <p className="text-sm text-gray-600">
              User profiles and preferences
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold">blog_posts</h3>
            <p className="text-sm text-gray-600">Blog articles and content</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold">tutorials</h3>
            <p className="text-sm text-gray-600">Programming tutorials</p>
          </div>
        </div>
      </div>
    </div>
  );
}
