"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export default function AdminHomeClient() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const checkSession = useCallback(async () => {
    const res = await fetch("/api/blog-cms?status=all", {
      credentials: "include",
      cache: "no-store",
    });
    setLoggedIn(res.ok);
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/blog-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setLoginError((j as { error?: string }).error || "Login failed");
      return;
    }
    setPassword("");
    setLoggedIn(true);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/blog-logout", { method: "POST", credentials: "include" });
    setLoggedIn(false);
  };

  if (loggedIn === null) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 p-6">
        <p className="text-neutral-500">Checking session...</p>
      </main>
    );
  }

  if (!loggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-green-50/30 dark:from-neutral-900 dark:to-green-950/20 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700"
        >
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Admin login
          </h1>
          <p className="text-sm text-neutral-500 mb-6">
            Enter password to access blogs and categories.
          </p>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
            autoComplete="current-password"
          />
          {loginError && <p className="text-red-600 text-sm mt-2">{loginError}</p>}
          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:opacity-95"
          >
            Sign in
          </button>
          <Link
            href="/"
            className="block text-center mt-4 text-green-600 dark:text-green-400 text-sm"
          >
            Back to site
          </Link>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">Admin</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="text-sm text-neutral-500 hover:underline"
          >
            Log out
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/admin/blogs"
            className="p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Blogs</h2>
            <p className="text-sm text-neutral-500">List, edit, delete, create blogs</p>
          </Link>
          <Link
            href="/admin/blog"
            className="p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Write Blog</h2>
            <p className="text-sm text-neutral-500">Open TinyMCE editor page</p>
          </Link>
          <Link
            href="/admin/categories"
            className="p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            <p className="text-sm text-neutral-500">CRUD categories in table view</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
