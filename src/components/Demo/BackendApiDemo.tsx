"use client";
import { useState } from "react";
import { useUser } from "@/hooks/useUser";
import { usePosts, usePost } from "@/hooks/usePosts";
import { useTutorials, useTutorial } from "@/hooks/useTutorials";
import { useAuth } from "@/context/AuthContext";

export default function BackendApiDemo() {
  const { user, signIn, logout } = useAuth();
  const {
    profile,
    loading: userLoading,
    createProfile,
    updateProfile,
  } = useUser();
  const {
    posts,
    loading: postsLoading,
    createPost,
    updatePost,
    deletePost,
  } = usePosts();
  const {
    tutorials,
    loading: tutorialsLoading,
    createTutorial,
    updateTutorial,
    deleteTutorial,
  } = useTutorials();

  // Single item hooks
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [selectedTutorialId, setSelectedTutorialId] = useState<string | null>(
    null
  );
  const { post: selectedPost, updatePost: updateSelectedPost } =
    usePost(selectedPostId);
  const { tutorial: selectedTutorial, updateTutorial: updateSelectedTutorial } =
    useTutorial(selectedTutorialId);

  // Form states
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    tags: [] as string[],
    status: "draft" as "draft" | "published",
  });

  const [newTutorial, setNewTutorial] = useState({
    title: "",
    content: "",
    category: "",
    difficulty: "beginner" as "beginner" | "intermediate" | "advanced",
    tags: [] as string[],
    status: "draft" as "draft" | "published",
  });

  const handleCreatePost = async () => {
    if (!user) return;

    const result = await createPost({
      ...newPost,
      authorId: user.uid,
      authorName: user.displayName || "Anonymous",
    });

    if (result.success) {
      setNewPost({ title: "", content: "", tags: [], status: "draft" });
    }
  };

  const handleCreateTutorial = async () => {
    if (!user) return;

    const result = await createTutorial({
      ...newTutorial,
      authorId: user.uid,
      authorName: user.displayName || "Anonymous",
    });

    if (result.success) {
      setNewTutorial({
        title: "",
        content: "",
        category: "",
        difficulty: "beginner",
        tags: [],
        status: "draft",
      });
    }
  };

  const handleUpdateProfile = async () => {
    if (!profile) return;

    await updateProfile({
      displayName: "Updated Name",
      preferences: {
        theme: "dark",
        notifications: true,
      },
    });
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Backend API Demo</h1>
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          Please sign in to test the backend APIs
        </div>
        <button
          onClick={() => signIn("demo@example.com", "password123")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign In (Demo)
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Backend API Demo</h1>
        <button
          onClick={() => logout()}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>

      {/* User Profile Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        {userLoading ? (
          <div>Loading profile...</div>
        ) : profile ? (
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Display Name:</strong> {profile.displayName || "Not set"}
            </p>
            <p>
              <strong>Theme:</strong> {profile.preferences?.theme || "light"}
            </p>
            <p>
              <strong>Notifications:</strong>{" "}
              {profile.preferences?.notifications ? "Enabled" : "Disabled"}
            </p>
            <button
              onClick={handleUpdateProfile}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Update Profile
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-4">No profile found. Create one:</p>
            <button
              onClick={() =>
                createProfile({
                  email: user.email || "",
                  displayName: user.displayName || "",
                  photoURL: user.photoURL || "",
                })
              }
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Create Profile
            </button>
          </div>
        )}
      </div>

      {/* Blog Posts Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>

        {/* Create Post Form */}
        <div className="mb-6 p-4 bg-gray-50 rounded">
          <h3 className="text-lg font-medium mb-3">Create New Post</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Post title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Post content"
              value={newPost.content}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, content: e.target.value }))
              }
              className="w-full p-2 border rounded h-24"
            />
            <div className="flex gap-2">
              <select
                value={newPost.status}
                onChange={(e) =>
                  setNewPost((prev) => ({
                    ...prev,
                    status: e.target.value as "draft" | "published",
                  }))
                }
                className="p-2 border rounded"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <button
                onClick={handleCreatePost}
                disabled={!newPost.title || !newPost.content}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>

        {/* Posts List */}
        {postsLoading ? (
          <div>Loading posts...</div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 border rounded">
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {post.status}
                  </span>
                  <span className="text-xs bg-blue-200 px-2 py-1 rounded">
                    {post.views || 0} views
                  </span>
                  <button
                    onClick={() => setSelectedPostId(post.id || null)}
                    className="text-xs bg-green-500 text-white px-2 py-1 rounded"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => deletePost(post.id!)}
                    className="text-xs bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tutorials Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>

        {/* Create Tutorial Form */}
        <div className="mb-6 p-4 bg-gray-50 rounded">
          <h3 className="text-lg font-medium mb-3">Create New Tutorial</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Tutorial title"
              value={newTutorial.title}
              onChange={(e) =>
                setNewTutorial((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Tutorial content"
              value={newTutorial.content}
              onChange={(e) =>
                setNewTutorial((prev) => ({ ...prev, content: e.target.value }))
              }
              className="w-full p-2 border rounded h-24"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Category"
                value={newTutorial.category}
                onChange={(e) =>
                  setNewTutorial((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }))
                }
                className="p-2 border rounded"
              />
              <select
                value={newTutorial.difficulty}
                onChange={(e) =>
                  setNewTutorial((prev) => ({
                    ...prev,
                    difficulty: e.target.value as
                      | "beginner"
                      | "intermediate"
                      | "advanced",
                  }))
                }
                className="p-2 border rounded"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="flex gap-2">
              <select
                value={newTutorial.status}
                onChange={(e) =>
                  setNewTutorial((prev) => ({
                    ...prev,
                    status: e.target.value as "draft" | "published",
                  }))
                }
                className="p-2 border rounded"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <button
                onClick={handleCreateTutorial}
                disabled={
                  !newTutorial.title ||
                  !newTutorial.content ||
                  !newTutorial.category
                }
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
              >
                Create Tutorial
              </button>
            </div>
          </div>
        </div>

        {/* Tutorials List */}
        {tutorialsLoading ? (
          <div>Loading tutorials...</div>
        ) : (
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="p-4 border rounded">
                <h3 className="font-medium">{tutorial.title}</h3>
                <p className="text-sm text-gray-600">
                  {tutorial.content.substring(0, 100)}...
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {tutorial.status}
                  </span>
                  <span className="text-xs bg-blue-200 px-2 py-1 rounded">
                    {tutorial.difficulty}
                  </span>
                  <span className="text-xs bg-green-200 px-2 py-1 rounded">
                    {tutorial.category}
                  </span>
                  <span className="text-xs bg-purple-200 px-2 py-1 rounded">
                    {tutorial.views || 0} views
                  </span>
                  <button
                    onClick={() => setSelectedTutorialId(tutorial.id || null)}
                    className="text-xs bg-green-500 text-white px-2 py-1 rounded"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => deleteTutorial(tutorial.id!)}
                    className="text-xs bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Post Details */}
      {selectedPost && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Selected Post Details</h2>
          <div className="space-y-2">
            <p>
              <strong>Title:</strong> {selectedPost.title}
            </p>
            <p>
              <strong>Content:</strong> {selectedPost.content}
            </p>
            <p>
              <strong>Status:</strong> {selectedPost.status}
            </p>
            <p>
              <strong>Views:</strong> {selectedPost.views || 0}
            </p>
            <button
              onClick={() =>
                updateSelectedPost({
                  status:
                    selectedPost.status === "published" ? "draft" : "published",
                })
              }
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Toggle Status
            </button>
            <button
              onClick={() => setSelectedPostId(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Selected Tutorial Details */}
      {selectedTutorial && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Selected Tutorial Details
          </h2>
          <div className="space-y-2">
            <p>
              <strong>Title:</strong> {selectedTutorial.title}
            </p>
            <p>
              <strong>Content:</strong> {selectedTutorial.content}
            </p>
            <p>
              <strong>Category:</strong> {selectedTutorial.category}
            </p>
            <p>
              <strong>Difficulty:</strong> {selectedTutorial.difficulty}
            </p>
            <p>
              <strong>Status:</strong> {selectedTutorial.status}
            </p>
            <p>
              <strong>Views:</strong> {selectedTutorial.views || 0}
            </p>
            <button
              onClick={() =>
                updateSelectedTutorial({
                  status:
                    selectedTutorial.status === "published"
                      ? "draft"
                      : "published",
                })
              }
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Toggle Status
            </button>
            <button
              onClick={() => setSelectedTutorialId(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
