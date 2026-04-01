import type { NextRequest } from "next/server";

export function isBlogAdmin(request: NextRequest): boolean {
  const token = process.env.BLOG_SESSION_TOKEN;
  if (!token) return false;
  const cookie = request.cookies.get("blog-admin-auth")?.value;
  return cookie === token;
}
