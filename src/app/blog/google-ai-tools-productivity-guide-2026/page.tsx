import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blogContent";
import RealSeoBlogPage from "@/components/Blog/RealSeoBlogPage";
import { GoogleAiToolsProductivityContent } from "@/components/Blog/content/AITrendingTopicContents";

const slug = "google-ai-tools-productivity-guide-2026";
const post = getBlogPost(slug);

export const metadata: Metadata = post
  ? {
      title: `${post.title} | ItsIndianGuy`,
      description: post.description,
      alternates: { canonical: `https://www.itsindianguy.in/blog/${slug}` },
      openGraph: { title: post.title, description: post.description, url: `https://www.itsindianguy.in/blog/${slug}`, type: "article", images: [{ url: post.image }] },
      twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.image] },
    }
  : {};

export default function Page() {
  if (!post) return notFound();
  return (
    <RealSeoBlogPage {...post}>
      <GoogleAiToolsProductivityContent />
    </RealSeoBlogPage>
  );
}
