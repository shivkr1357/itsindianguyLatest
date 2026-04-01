import { NextRequest } from "next/server";
import { isBlogAdmin } from "@/lib/blogAdminAuth";
import { jsonNoStore } from "@/lib/apiNoStore";

function backendBase(): string | null {
  return process.env.BLOG_API_URL?.replace(/\/$/, "") || null;
}

function apiKey(): string | null {
  return process.env.BLOG_API_KEY || null;
}

type Props = { params: { slug: string } };

export async function PATCH(request: NextRequest, { params }: Props) {
  if (!isBlogAdmin(request)) {
    return jsonNoStore({ error: "Unauthorized" }, 401);
  }
  const base = backendBase();
  const key = apiKey();
  if (!base || !key) {
    return jsonNoStore(
      { error: "BLOG_API_URL or BLOG_API_KEY not configured" },
      503
    );
  }
  const body = await request.json().catch(() => null);
  if (!body) {
    return jsonNoStore({ error: "Invalid JSON" }, 400);
  }
  const res = await fetch(`${base}/api/categories/${encodeURIComponent(params.slug)}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return jsonNoStore(data, res.status);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (!isBlogAdmin(request)) {
    return jsonNoStore({ error: "Unauthorized" }, 401);
  }
  const base = backendBase();
  const key = apiKey();
  if (!base || !key) {
    return jsonNoStore(
      { error: "BLOG_API_URL or BLOG_API_KEY not configured" },
      503
    );
  }
  const res = await fetch(`${base}/api/categories/${encodeURIComponent(params.slug)}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  const data = await res.json().catch(() => ({}));
  return jsonNoStore(data, res.status);
}
