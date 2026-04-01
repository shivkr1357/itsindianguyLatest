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

/** GET — public published post, or admin preview with ?admin=1 */
export async function GET(request: NextRequest, { params }: Props) {
  const base = backendBase();
  if (!base) {
    return jsonNoStore({ error: "BLOG_API_URL not configured" }, 503);
  }
  const slug = params.slug;
  const adminPreview = request.nextUrl.searchParams.get("admin") === "1";

  if (adminPreview) {
    if (!isBlogAdmin(request)) {
      return jsonNoStore({ error: "Unauthorized" }, 401);
    }
    const key = apiKey();
    if (!key) {
      return jsonNoStore({ error: "BLOG_API_KEY not configured" }, 503);
    }
    const res = await fetch(`${base}/api/blogs/slug/${encodeURIComponent(slug)}/admin`, {
      headers: { Authorization: `Bearer ${key}` },
      cache: "no-store",
    });
    const data = await res.json().catch(() => ({}));
    return jsonNoStore(data, res.status);
  }

  const res = await fetch(`${base}/api/blogs/slug/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json().catch(() => ({}));
  return jsonNoStore(data, res.status);
}

/** PATCH — update */
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
  const slug = params.slug;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonNoStore({ error: "Invalid JSON" }, 400);
  }
  const res = await fetch(`${base}/api/blogs/slug/${encodeURIComponent(slug)}`, {
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

/** DELETE */
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
  const slug = params.slug;
  const res = await fetch(`${base}/api/blogs/slug/${encodeURIComponent(slug)}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${key}` },
  });
  const data = await res.json().catch(() => ({}));
  return jsonNoStore(data, res.status);
}
