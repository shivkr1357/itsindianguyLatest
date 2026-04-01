import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const password = process.env.BLOG_ADMIN_PASSWORD;
  const sessionToken = process.env.BLOG_SESSION_TOKEN;
  if (!password || !sessionToken) {
    return NextResponse.json(
      { error: "Server missing BLOG_ADMIN_PASSWORD or BLOG_SESSION_TOKEN" },
      { status: 500 }
    );
  }
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (body.password !== password) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  const res = NextResponse.json({ success: true });
  res.cookies.set("blog-admin-auth", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
