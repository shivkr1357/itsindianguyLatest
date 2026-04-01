/** CMS blog post shape returned by MongoDB API */

export const CMS_AUTHOR = "Shiv Shankar Prasad";

export interface CmsBlogPost {
  _id: string;
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  keywords?: string[];
  image: string;
  canonicalUrl?: string;
  contentHtml: string;
  category: string;
  author: string;
  readTime: string;
  status: "draft" | "published";
  /** When true, post is highlighted and listed first on /blog (CMS) */
  featured?: boolean;
  publishedAt?: string;
  articleSection?: string;
  createdAt?: string;
  updatedAt?: string;
}

export function getBlogApiBase(): string | null {
  const base = process.env.BLOG_API_URL?.replace(/\/$/, "");
  return base || null;
}

export async function fetchPublishedCmsPosts(): Promise<CmsBlogPost[]> {
  const base = getBlogApiBase();
  if (!base) return [];
  try {
    const res = await fetch(`${base}/api/blogs?status=published&limit=200`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = (await res.json()) as { success?: boolean; data?: CmsBlogPost[] };
    return json.data || [];
  } catch {
    return [];
  }
}

export async function fetchCmsPostBySlug(
  slug: string
): Promise<CmsBlogPost | null> {
  const base = getBlogApiBase();
  if (!base) return null;
  try {
    const res = await fetch(`${base}/api/blogs/slug/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { success?: boolean; data?: CmsBlogPost };
    return json.data || null;
  } catch {
    return null;
  }
}
