"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const TinyMceField = dynamic(() => import("./TinyMceField"), {
  ssr: false,
  loading: () => <p className="text-neutral-500">Loading editor…</p>,
});

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminBlogEditor() {
  type CategoryRow = { _id: string; name: string; slug: string };
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [categories, setCategories] = useState<CategoryRow[]>([]);
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [image, setImage] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [category, setCategory] = useState("programming");
  const [readTime, setReadTime] = useState("8 min read");
  const [articleSection, setArticleSection] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [featured, setFeatured] = useState(false);
  const [contentHtml, setContentHtml] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

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

  useEffect(() => {
    if (!loggedIn) return;
    fetch("/api/blog-cms/categories", {
      credentials: "include",
      cache: "no-store",
    })
      .then((r) => r.json())
      .then((j) => {
        if (Array.isArray(j.data)) {
          setCategories(
            j.data
              .map((row: unknown) => {
                const r = row as Partial<CategoryRow>;
                return {
                  _id: String(r._id || ""),
                  name: String(r.name || r.slug || ""),
                  slug: String(r.slug || ""),
                };
              })
              .filter((r: CategoryRow) => !!r.slug)
          );
        }
      })
      .catch(() => {});
  }, [loggedIn]);

  const handleLogout = async () => {
    await fetch("/api/admin/blog-logout", { method: "POST", credentials: "include" });
    setLoggedIn(false);
  };

  const loadForEdit = async (editSlug: string) => {
    const res = await fetch(
      `/api/blog-cms/${encodeURIComponent(editSlug)}?admin=1`,
      { credentials: "include", cache: "no-store" }
    );
    if (!res.ok) {
      setMessage("Could not load post for edit");
      return;
    }
    const j = (await res.json()) as { data?: Record<string, unknown> };
    const p = j.data;
    if (!p) return;
    setSlug(String(p.slug || ""));
    setTitle(String(p.title || ""));
    setMetaTitle(String(p.metaTitle || ""));
    setDescription(String(p.description || ""));
    setKeywords(
      Array.isArray(p.keywords) ? (p.keywords as string[]).join(", ") : ""
    );
    setImage(String(p.image || ""));
    setCanonicalUrl(String(p.canonicalUrl || ""));
    setCategory(String(p.category || "programming"));
    setReadTime(String(p.readTime || "8 min read"));
    setArticleSection(String(p.articleSection || ""));
    setStatus(p.status === "draft" ? "draft" : "published");
    setFeatured(p.featured === true);
    setContentHtml(String(p.contentHtml || ""));
    setMessage("Loaded draft for editing");
  };

  useEffect(() => {
    if (typeof window === "undefined" || !loggedIn) return;
    const sp = new URLSearchParams(window.location.search);
    const edit = sp.get("edit");
    if (edit) loadForEdit(edit);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only on mount when logged in
  }, [loggedIn]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const payload = {
        slug: slugify(slug || title),
        title: title.trim(),
        metaTitle: metaTitle.trim() || undefined,
        description: description.trim(),
        keywords: keywords
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean),
        image: image.trim(),
        canonicalUrl: canonicalUrl.trim() || undefined,
        category: category.trim() || "programming",
        readTime: readTime.trim() || "8 min read",
        articleSection: articleSection.trim() || undefined,
        status,
        featured,
        contentHtml,
      };

      const chk = await fetch(
        `/api/blog-cms/${encodeURIComponent(payload.slug)}?admin=1`,
        { credentials: "include", cache: "no-store" }
      );
      const exists = chk.ok;
      const method = exists ? "PATCH" : "POST";
      const url =
        method === "POST"
          ? "/api/blog-cms"
          : `/api/blog-cms/${encodeURIComponent(payload.slug)}`;

      const patchBody = {
        title: payload.title,
        metaTitle: payload.metaTitle,
        description: payload.description,
        keywords: payload.keywords,
        image: payload.image,
        canonicalUrl: payload.canonicalUrl,
        category: payload.category,
        readTime: payload.readTime,
        articleSection: payload.articleSection,
        status: payload.status,
        featured: payload.featured,
        contentHtml: payload.contentHtml,
      };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify(method === "PATCH" ? patchBody : payload),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage((j as { error?: string }).error || "Save failed");
        return;
      }
      setMessage(
        method === "POST"
          ? "Created. View: /blog/" + payload.slug
          : "Updated successfully."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loggedIn === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
        <p className="text-neutral-600">Checking session…</p>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 px-4">
        <div className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700 text-center">
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Login required
          </h1>
          <p className="text-sm text-neutral-500 mb-6">
            Please login from the admin page first.
          </p>
          <Link href="/admin" className="text-green-600 dark:text-green-400 hover:underline">
            Go to /admin
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">
            Write blog post
          </h1>
          <div className="flex gap-3">
            <Link
              href="/admin"
              className="text-sm text-green-600 dark:text-green-400 hover:underline"
            >
              Admin home
            </Link>
            <Link
              href="/admin/blogs"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Blog list
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-neutral-500 hover:underline"
            >
              Log out
            </button>
          </div>
        </div>

        <form onSubmit={save} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Slug *</label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="my-awesome-post"
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
                required
              />
              <button
                type="button"
                className="text-xs text-green-600 mt-1"
                onClick={() => setSlug(slugify(title))}
              >
                Generate from title
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
              >
                {categories.length > 0 ? (
                  categories.map((c) => (
                    <option key={c._id || c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))
                ) : (
                  ["programming", "hindi-stories", "tech"].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Title *</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Meta title (optional — overrides browser title)
            </label>
            <input
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Meta description * (SEO + OG)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Keywords (comma-separated)
            </label>
            <input
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Next.js, MongoDB, tutorial"
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Cover image URL *
            </label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Canonical URL (optional)
            </label>
            <input
              value={canonicalUrl}
              onChange={(e) => setCanonicalUrl(e.target.value)}
              placeholder="https://www.itsindianguy.in/blog/..."
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Read time</label>
              <input
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Article section (schema)</label>
              <input
                value={articleSection}
                onChange={(e) => setArticleSection(e.target.value)}
                placeholder="Programming Tutorials"
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="rounded border-neutral-300 dark:border-neutral-600"
            />
            <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
              Featured (show first on blog index with badge)
            </span>
          </label>

          <div>
            <label className="block text-sm font-medium mb-2">Content *</label>
            <TinyMceField value={contentHtml} onChange={setContentHtml} />
          </div>

          {message && (
            <p className="text-sm text-green-700 dark:text-green-400">{message}</p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save post"}
          </button>
        </form>
      </div>
    </div>
  );
}
