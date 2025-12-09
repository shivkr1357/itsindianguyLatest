"use client";
import Link from "next/link";
import SocialShareButtons from "./SocialShareButtons";
import { getBlogPost } from "@/lib/blogContent";

interface BlogShareSectionProps {
  title: string;
  slug: string;
}

const BlogShareSection = ({ title, slug }: BlogShareSectionProps) => {
  const post = getBlogPost(slug);
  const url = `/blog/${slug}`;
  const description = post?.description || "";

  return (
    <div className="bg-gradient-to-r from-white to-green-50/30 dark:from-neutral-800 dark:to-green-950/20 rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Share Section */}
          <div className="flex-1">
            <SocialShareButtons
              title={title}
              url={url}
              description={description}
            />
          </div>

          {/* View All Posts Button */}
          <div className="w-full lg:w-auto">
            <Link
              href="/blog"
              className="block text-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              <span className="flex items-center justify-center gap-2">
                View All Posts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Engagement Section */}
      <div className="bg-neutral-100 dark:bg-neutral-900/50 px-8 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-lg">👁️</span>
              <span>1.2k views</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">❤️</span>
              <span>45 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💬</span>
              <span>12 comments</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogShareSection;

