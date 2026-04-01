"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ColumnDef } from "@tanstack/react-table";
import AdminDataTable from "@/components/Admin/AdminDataTable";

type Blog = {
  _id: string;
  slug: string;
  title: string;
  category: string;
  status: "draft" | "published";
  featured?: boolean;
  readTime: string;
  updatedAt?: string;
};

export default function BlogCrudPage() {
  const [rows, setRows] = useState<Blog[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError("");
    const res = await fetch("/api/blog-cms?status=all&limit=500", {
      credentials: "include",
      cache: "no-store",
    });
    const json = (await res.json().catch(() => ({}))) as {
      data?: Blog[];
      error?: string;
    };
    if (!res.ok) {
      setError(json.error || "Unauthorized. Login from /admin/blog first.");
      setLoading(false);
      return;
    }
    setRows(json.data || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const onDelete = async (slug: string) => {
    if (!confirm(`Delete blog "${slug}"?`)) return;
    setDeletingSlug(slug);
    try {
      const res = await fetch(`/api/blog-cms/${encodeURIComponent(slug)}`, {
        method: "DELETE",
        credentials: "include",
        cache: "no-store",
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        alert((j as { error?: string }).error || "Delete failed");
        return;
      }
      await load();
    } finally {
      setDeletingSlug(null);
    }
  };

  const columns: ColumnDef<Blog>[] = [
      {
        header: "Title",
        accessorKey: "title",
        cell: ({ row }) => (
          <div>
            <div className="font-medium">{row.original.title}</div>
            <div className="text-xs text-neutral-500">{row.original.slug}</div>
          </div>
        ),
      },
      { header: "Category", accessorKey: "category" },
      { header: "Status", accessorKey: "status" },
      {
        header: "Featured",
        cell: ({ row }) =>
          row.original.featured ? (
            <span className="text-amber-600 font-medium">Yes</span>
          ) : (
            <span className="text-neutral-400">—</span>
          ),
      },
      { header: "Read Time", accessorKey: "readTime" },
      {
        header: "Updated",
        cell: ({ row }) =>
          row.original.updatedAt
            ? new Date(row.original.updatedAt).toLocaleDateString()
            : "-",
      },
      {
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-3 text-sm">
            <Link
              href={`/admin/blog?edit=${encodeURIComponent(row.original.slug)}`}
              className="text-blue-600 hover:underline"
            >
              Edit
            </Link>
            <Link
              href={`/blog/${row.original.slug}`}
              className="text-green-600 hover:underline"
              target="_blank"
            >
              View
            </Link>
            <button
              onClick={() => onDelete(row.original.slug)}
              className="text-red-600 hover:underline disabled:opacity-50"
              disabled={deletingSlug === row.original.slug}
            >
              Delete
            </button>
          </div>
        ),
      },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold">Blogs</h1>
          <div className="flex gap-3">
            <Link href="/admin" className="text-sm text-neutral-500 hover:underline">
              Admin home
            </Link>
            <Link href="/admin/blog" className="text-sm text-green-600 hover:underline">
              + New Blog
            </Link>
          </div>
        </div>
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        {loading ? (
          <p className="text-neutral-500">Loading blogs...</p>
        ) : (
          <AdminDataTable data={rows} columns={columns} />
        )}
      </div>
    </main>
  );
}
