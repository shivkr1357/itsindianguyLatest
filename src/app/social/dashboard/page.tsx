"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import SocialAccountConnector from "@/components/SocialMedia/SocialAccountConnector";
import PostComposer from "@/components/SocialMedia/PostComposer";
import SocialStats from "@/components/SocialMedia/SocialStats";
import { PostResult } from "@/types/social-media";

export default function SocialDashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"compose" | "accounts" | "stats">("compose");
  const [postResults, setPostResults] = useState<PostResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    // Check for OAuth callback messages
    const connected = searchParams.get("connected");
    const errorParam = searchParams.get("error");

    if (connected) {
      setActiveTab("accounts");
      setError(null);
      // Clear the URL parameter
      router.replace("/social/dashboard");
    }

    if (errorParam) {
      setError(decodeURIComponent(errorParam));
      setActiveTab("accounts");
      // Clear the URL parameter
      router.replace("/social/dashboard");
    }
  }, [searchParams, router]);

  const handlePostSuccess = (results: any) => {
    setPostResults(results.results || []);
    setError(null);
  };

  const handlePostError = (errorMessage: string) => {
    setError(errorMessage);
    setPostResults(null);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Social Media Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your connected accounts and publish content across multiple platforms
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        {/* Success Alert */}
        {postResults && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
              Post Results:
            </h3>
            <ul className="space-y-2">
              {postResults.map((result, index) => (
                <li
                  key={index}
                  className={`text-sm ${
                    result.success
                      ? "text-green-700 dark:text-green-300"
                      : "text-red-700 dark:text-red-300"
                  }`}
                >
                  <span className="capitalize font-medium">{result.platform}:</span>{" "}
                  {result.success ? (
                    <>
                      Posted successfully
                      {result.url && (
                        <a
                          href={result.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 underline"
                        >
                          View post
                        </a>
                      )}
                    </>
                  ) : (
                    result.error
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("compose")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "compose"
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Compose Post
            </button>
            <button
              onClick={() => setActiveTab("accounts")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "accounts"
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Connected Accounts
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "stats"
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Statistics
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "compose" && (
          <PostComposer onPostSuccess={handlePostSuccess} onPostError={handlePostError} />
        )}

        {activeTab === "accounts" && <SocialAccountConnector />}

        {activeTab === "stats" && <SocialStats />}
      </div>
    </div>
  );
}

