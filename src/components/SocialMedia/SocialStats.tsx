"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { UserSocialStats, SocialPlatform } from "@/types/social-media";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaChartLine, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const platformIcons: Record<SocialPlatform, React.ReactNode> = {
  facebook: <FaFacebook className="w-5 h-5" />,
  instagram: <FaInstagram className="w-5 h-5" />,
  twitter: <FaTwitter className="w-5 h-5" />,
  linkedin: <FaLinkedin className="w-5 h-5" />,
  youtube: <FaYoutube className="w-5 h-5" />,
};

const platformNames: Record<SocialPlatform, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  twitter: "Twitter",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

interface SocialStatsProps {
  className?: string;
}

export default function SocialStats({ className = "" }: SocialStatsProps) {
  const { user } = useAuth();
  const [stats, setStats] = useState<UserSocialStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  const fetchStats = async () => {
    if (!user) return;

    try {
      const token = await user.getIdToken();
      const response = await fetch("/api/social/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`${className} flex justify-center items-center p-8`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className={`${className} p-6 bg-white dark:bg-neutral-800 rounded-lg shadow`}>
        <p className="text-gray-500 dark:text-gray-400">No statistics available yet.</p>
      </div>
    );
  }

  const successRate = stats.totalPosts > 0 
    ? Math.round((stats.totalSuccessfulPosts / stats.totalPosts) * 100) 
    : 0;

  return (
    <div className={`${className} space-y-6`}>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stats.totalPosts}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <FaChartLine className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Successful</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                {stats.totalSuccessfulPosts}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
              <FaCheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Failed</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
                {stats.totalFailedPosts}
              </p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
              <FaTimesCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {successRate}%
              </p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <FaChartLine className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Connected Accounts
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.connectedAccounts}
            </span>
            <span className="text-gray-600 dark:text-gray-400">accounts</span>
          </div>
          <div className="flex gap-2">
            {stats.connectedPlatforms.map((platform) => (
              <div
                key={platform}
                className="p-2 bg-gray-100 dark:bg-neutral-700 rounded-lg"
                title={platformNames[platform]}
              >
                {platformIcons[platform]}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Breakdown */}
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Posts by Platform
        </h3>
        <div className="space-y-4">
          {(Object.keys(stats.postsByPlatform) as SocialPlatform[]).map((platform) => {
            const platformStats = stats.postsByPlatform[platform];
            if (platformStats.total === 0) return null;

            const platformSuccessRate = platformStats.total > 0
              ? Math.round((platformStats.successful / platformStats.total) * 100)
              : 0;

            return (
              <div key={platform} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-neutral-700 rounded-lg">
                      {platformIcons[platform]}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {platformNames[platform]}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {platformStats.total} total posts
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      {platformStats.successful} successful
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {platformSuccessRate}% success rate
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${platformSuccessRate}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
          {Object.values(stats.postsByPlatform).every((p) => p.total === 0) && (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">
              No posts yet. Start posting to see statistics!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

