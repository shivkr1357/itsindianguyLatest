"use client";
import React, { useState, useEffect } from "react";
import { useThemeState } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { WiDaySunny, WiMoonAltWaxingCrescent4 } from "react-icons/wi";
import { HiMenu, HiX } from "react-icons/hi";
import AuthModal from "@/components/Auth/AuthModal";
import UserProfile from "@/components/Auth/UserProfile";

const Topbar = () => {
  const { customTheme, toggleTheme } = useThemeState();
  const { user } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? customTheme === "dark"
              ? "bg-neutral-900/95 backdrop-blur-xl shadow-lg border-b border-neutral-800"
              : "bg-white/95 backdrop-blur-xl shadow-lg border-b border-neutral-200"
            : customTheme === "dark"
            ? "bg-neutral-900/80 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary-200 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-200 to-blue-500 bg-clip-text text-transparent hidden sm:block">
                ItsIndianGuy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/interview-qa"
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                  customTheme === "dark"
                    ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                Interview Q&A
              </Link>
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                  customTheme === "dark"
                    ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/tutorials"
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                  customTheme === "dark"
                    ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                Tutorials
              </Link>
              <Link
                href="/memes"
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                  customTheme === "dark"
                    ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                Memes
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                  customTheme === "dark"
                    ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact-us"
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                  customTheme === "dark"
                    ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all hover:scale-110 ${
                  customTheme === "dark"
                    ? "bg-neutral-800 hover:bg-neutral-700 text-yellow-400"
                    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                }`}
                aria-label="Toggle theme"
              >
                {customTheme === "light" ? (
                  <WiMoonAltWaxingCrescent4 size={24} />
                ) : (
                  <WiDaySunny size={24} />
                )}
              </button>

              {/* Auth Buttons - Desktop */}
              <div className="hidden lg:flex items-center gap-3">
                {user ? (
                  <UserProfile />
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setAuthMode("signin");
                        setAuthModalOpen(true);
                      }}
                      className={`px-5 py-2.5 rounded-xl font-medium transition-all hover:scale-105 ${
                        customTheme === "dark"
                          ? "text-white hover:bg-neutral-800"
                          : "text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setAuthMode("signup");
                        setAuthModalOpen(true);
                      }}
                      className="px-5 py-2.5 bg-gradient-to-r from-primary-200 to-blue-500 hover:from-primary-300 hover:to-blue-600 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2.5 rounded-xl transition-all ${
                  customTheme === "dark"
                    ? "hover:bg-neutral-800 text-white"
                    : "hover:bg-neutral-100 text-neutral-700"
                }`}
                onClick={() => setDrawerOpen(!drawerOpen)}
                aria-label="Toggle menu"
              >
                {drawerOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>

        </div>

        {/* Overlay */}
        {drawerOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* Mobile Navigation Drawer - Slides from Right */}
        <div
          className={`fixed top-0 right-0 h-screen w-80 lg:hidden transform transition-transform duration-300 ease-in-out z-[60] ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } ${
            customTheme === "dark"
              ? "bg-neutral-900 border-l border-neutral-800"
              : "bg-white border-l border-neutral-200"
          } shadow-2xl overflow-hidden`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-blue-500 rounded-lg blur opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary-200 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-200 to-blue-500 bg-clip-text text-transparent">
                ItsIndianGuy
              </span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className={`p-2 rounded-lg transition-all hover:scale-110 ${
                customTheme === "dark"
                  ? "hover:bg-neutral-800 text-white"
                  : "hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              <HiX size={24} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 space-y-2 overflow-y-auto" style={{ height: 'calc(100vh - 92px)' }}>
            <Link
              href="/interview-qa"
              onClick={() => setDrawerOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                customTheme === "dark"
                  ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              Interview Q&A
            </Link>
            <Link
              href="/blog"
              onClick={() => setDrawerOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                customTheme === "dark"
                  ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/tutorials"
              onClick={() => setDrawerOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                customTheme === "dark"
                  ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              Tutorials
            </Link>
            <Link
              href="/memes"
              onClick={() => setDrawerOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                customTheme === "dark"
                  ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              Memes
            </Link>
            <Link
              href="/about"
              onClick={() => setDrawerOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                customTheme === "dark"
                  ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setDrawerOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                customTheme === "dark"
                  ? "text-neutral-300 hover:text-white hover:bg-neutral-800"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              Contact
            </Link>

            {/* Divider */}
            <div className="py-4">
              <div className="border-t border-neutral-200 dark:border-neutral-800" />
            </div>

            {/* Mobile Auth Buttons */}
            <div className="space-y-3">
              {user ? (
                <UserProfile />
              ) : (
                <>
                  <button
                    onClick={() => {
                      setAuthMode("signin");
                      setAuthModalOpen(true);
                      setDrawerOpen(false);
                    }}
                    className={`w-full px-4 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                      customTheme === "dark"
                        ? "bg-neutral-800 text-white hover:bg-neutral-700"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode("signup");
                      setAuthModalOpen(true);
                      setDrawerOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-primary-200 to-blue-500 hover:from-primary-300 hover:to-blue-600 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Topbar;
