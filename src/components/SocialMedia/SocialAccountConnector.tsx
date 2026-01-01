"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { SocialPlatform } from "@/types/social-media";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

interface SocialAccount {
  id: string;
  platform: SocialPlatform;
  platformAccountName: string;
  platformAccountType?: string;
  isActive: boolean;
}

interface SocialAccountConnectorProps {
  onAccountConnected?: (platform: SocialPlatform) => void;
}

const platformConfig: Record<SocialPlatform, { name: string; icon: React.ReactNode; color: string }> = {
  facebook: {
    name: "Facebook Page",
    icon: <FaFacebook className="w-6 h-6" />,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  instagram: {
    name: "Instagram Business",
    icon: <FaInstagram className="w-6 h-6" />,
    color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
  },
  twitter: {
    name: "X (Twitter)",
    icon: <FaTwitter className="w-6 h-6" />,
    color: "bg-black hover:bg-gray-800",
  },
  linkedin: {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-6 h-6" />,
    color: "bg-blue-700 hover:bg-blue-800",
  },
  youtube: {
    name: "YouTube",
    icon: <FaYoutube className="w-6 h-6" />,
    color: "bg-red-600 hover:bg-red-700",
  },
};

export default function SocialAccountConnector({ onAccountConnected }: SocialAccountConnectorProps) {
  const { user } = useAuth();
  const [accounts, setAccounts] = useState<SocialAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState<SocialPlatform | null>(null);

  useEffect(() => {
    if (user) {
      fetchAccounts();
    }
  }, [user]);

  const fetchAccounts = async () => {
    if (!user) return;

    try {
      const token = await user.getIdToken();
      const response = await fetch("/api/social/accounts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAccounts(data.accounts || []);
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    } finally {
      setLoading(false);
    }
  };

  const connectAccount = async (platform: SocialPlatform) => {
    if (!user) return;

    setConnecting(platform);

    try {
      const token = await user.getIdToken();
      const response = await fetch(`/api/social/oauth/${platform}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.authUrl) {
          window.location.href = data.authUrl;
        }
      } else {
        const error = await response.json();
        alert(error.error || "Failed to initiate OAuth");
        setConnecting(null);
      }
    } catch (error) {
      console.error("Error connecting account:", error);
      alert("Failed to connect account");
      setConnecting(null);
    }
  };

  const disconnectAccount = async (accountId: string) => {
    if (!user || !confirm("Are you sure you want to disconnect this account?")) return;

    try {
      const token = await user.getIdToken();
      const response = await fetch(`/api/social/accounts/${accountId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        await fetchAccounts();
      } else {
        const error = await response.json();
        alert(error.error || "Failed to disconnect account");
      }
    } catch (error) {
      console.error("Error disconnecting account:", error);
      alert("Failed to disconnect account");
    }
  };

  const isConnected = (platform: SocialPlatform) => {
    return accounts.some((acc) => acc.platform === platform && acc.isActive);
  };

  const getConnectedAccount = (platform: SocialPlatform) => {
    return accounts.find((acc) => acc.platform === platform && acc.isActive);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {(Object.keys(platformConfig) as SocialPlatform[]).map((platform) => {
        const config = platformConfig[platform];
        const connected = isConnected(platform);
        const account = getConnectedAccount(platform);

        return (
          <div
            key={platform}
            className={`border rounded-lg p-6 flex flex-col items-center justify-between ${
              connected
                ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                : "border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800"
            }`}
          >
            <div className="flex flex-col items-center mb-4">
              <div className={`${config.color} text-white p-4 rounded-full mb-3`}>
                {config.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{config.name}</h3>
              {connected && account && (
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Connected as: {account.platformAccountName}
                </p>
              )}
            </div>

            {connected ? (
              <button
                onClick={() => disconnectAccount(account!.id)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                Disconnect
              </button>
            ) : (
              <button
                onClick={() => connectAccount(platform)}
                disabled={connecting === platform}
                className={`px-4 py-2 ${config.color} text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {connecting === platform ? "Connecting..." : "Connect"}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

