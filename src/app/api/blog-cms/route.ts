import { NextRequest } from "next/server";
import { isBlogAdmin } from "@/lib/blogAdminAuth";
import { jsonNoStore } from "@/lib/apiNoStore";

function backendBase(): string | null {
  const b = process.env.BLOG_API_URL?.replace(/\/$/, "");
  return b || null;
}

function apiKey(): string | null {
  return process.env.BLOG_API_KEY || null;
}

/** GET — list published (public) or ?status=all with admin cookie */
export async function GET(request: NextRequest) {
  const base = backendBase();
  if (!base) {
    return jsonNoStore({ error: "BLOG_API_URL not configured" }, 503);
  }
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || "published";
  const category = searchParams.get("category");
  const limit = searchParams.get("limit") || "200";

  if (status === "all" || status === "draft") {
    if (!isBlogAdmin(request)) {
      return jsonNoStore({ error: "Unauthorized" }, 401);
    }
  }

  const url = new URL(`${base}/api/blogs`);
  url.searchParams.set("status", status);
  url.searchParams.set("limit", limit);
  if (category) url.searchParams.set("category", category);

  const res = await fetch(url.toString(), { cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  return jsonNoStore(data, res.status);
}

/** POST — create (admin) */
export async function POST(request: NextRequest) {
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
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonNoStore({ error: "Invalid JSON" }, 400);
  }
  const res = await fetch(`${base}/api/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return jsonNoStore(data, res.status);
}
