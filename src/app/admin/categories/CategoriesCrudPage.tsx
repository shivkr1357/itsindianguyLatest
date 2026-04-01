"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ColumnDef } from "@tanstack/react-table";
import AdminDataTable from "@/components/Admin/AdminDataTable";

type Category = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;
  updatedAt?: string;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function defaultDescriptionFromName(name: string) {
  const t = name.trim();
  if (!t) return "";
  return `Blog posts and resources in the "${t}" category.`;
}

export default function CategoriesCrudPage() {
  const [rows, setRows] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(true);
  /** While creating: slug/description follow name until user edits those fields */
  const [slugTouched, setSlugTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);

  const load = async () => {
    setLoading(true);
    setError("");
    const res = await fetch("/api/blog-cms/categories?all=1", {
      credentials: "include",
      cache: "no-store",
    });
    const json = (await res.json().catch(() => ({}))) as {
      data?: Category[];
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

  const resetForm = () => {
    setName("");
    setSlug("");
    setDescription("");
    setEditingSlug(null);
    setIsActive(true);
    setSlugTouched(false);
    setDescTouched(false);
  };

  const onNameChange = (value: string) => {
    setName(value);
    if (editingSlug) return;
    if (!slugTouched) {
      setSlug(slugify(value));
    }
    if (!descTouched) {
      setDescription(defaultDescriptionFromName(value));
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: name.trim(),
      slug: slugify(slug || name),
      description:
        description.trim() || defaultDescriptionFromName(name.trim()),
      isActive,
    };
    const isEdit = !!editingSlug;
    const url = isEdit
      ? `/api/blog-cms/categories/${encodeURIComponent(editingSlug)}`
      : "/api/blog-cms/categories";
    const method = isEdit ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      cache: "no-store",
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert((j as { error?: string }).error || "Save failed");
      return;
    }
    resetForm();
    await load();
  };

  const onEdit = (row: Category) => {
    setEditingSlug(row.slug);
    setName(row.name);
    setSlug(row.slug);
    setDescription(row.description || "");
    setIsActive(row.isActive);
    setSlugTouched(true);
    setDescTouched(true);
  };

  const onDelete = async (slugValue: string) => {
    if (!confirm(`Delete category "${slugValue}"?`)) return;
    const res = await fetch(`/api/blog-cms/categories/${encodeURIComponent(slugValue)}`, {
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
  };

  const columns: ColumnDef<Category>[] = [
      {
        header: "Category",
        cell: ({ row }) => (
          <div>
            <div className="font-medium">{row.original.name}</div>
            <div className="text-xs text-neutral-500">{row.original.slug}</div>
          </div>
        ),
      },
      { header: "Description", accessorKey: "description" },
      {
        header: "Active",
        cell: ({ row }) => (row.original.isActive ? "Yes" : "No"),
      },
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
            <button
              onClick={() => onEdit(row.original)}
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(row.original.slug)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ),
      },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <h1 className="text-3xl font-bold">Categories</h1>
          <Link href="/admin" className="text-sm text-neutral-500 hover:underline">
            Admin home
          </Link>
        </div>

        <form
          onSubmit={submit}
          className="space-y-3 p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
        >
          {!editingSlug && (
            <p className="text-xs text-neutral-500">
              Slug and description are filled from the name until you edit them.
            </p>
          )}
          <div className="grid md:grid-cols-5 gap-3">
          <input
            placeholder="Name *"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900"
            required
          />
          <input
            placeholder={editingSlug ? "Slug" : "Slug (auto from name)"}
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(e.target.value);
            }}
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900"
            required
          />
          <input
            placeholder={editingSlug ? "Description" : "Description (auto)"}
            value={description}
            onChange={(e) => {
              setDescTouched(true);
              setDescription(e.target.value);
            }}
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 md:col-span-2"
          />
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            Active
          </label>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-3 py-2 rounded-lg bg-green-600 text-white text-sm"
            >
              {editingSlug ? "Update" : "Create"}
            </button>
            {editingSlug && (
              <button
                type="button"
                onClick={resetForm}
                className="px-3 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-sm"
              >
                Cancel
              </button>
            )}
          </div>
          </div>
        </form>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {loading ? (
          <p className="text-neutral-500">Loading categories...</p>
        ) : (
          <AdminDataTable data={rows} columns={columns} />
        )}
      </div>
    </main>
  );
}
