"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { FaUser, FaSignOutAlt, FaCog } from "react-icons/fa";

const UserProfile = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-200 hover:text-primary-200 transition-colors"
      >
        <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center">
          <FaUser className="text-white text-sm" />
        </div>
        <span className="hidden md:block text-sm font-medium">
          {user.displayName || user.email?.split("@")[0] || "User"}
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-neutral-200 dark:border-neutral-700">
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
              {user.displayName || "User"}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {user.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="w-full flex items-center px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors disabled:opacity-50"
          >
            <FaSignOutAlt className="mr-2" />
            {loading ? "Signing out..." : "Sign out"}
          </button>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
