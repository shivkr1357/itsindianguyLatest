"use client";
import Link from "next/link";
import SocialShareButtons from "./SocialShareButtons";
import { getBlogPost } from "@/lib/blogContent";

interface BlogShareSectionProps {
  title: string;
  slug: string;
  /** Meta description for share previews — pass from CMS/static so share text is correct */
  description?: string;
  readTime?: string;
}

const BlogShareSection = ({
  title,
  slug,
  description: descriptionProp,
  readTime: readTimeProp,
}: BlogShareSectionProps) => {
  const staticPost = getBlogPost(slug);
  const description =
    descriptionProp ?? staticPost?.description ?? "";
  const readTime = readTimeProp ?? staticPost?.readTime;

  const url = `/blog/${slug}`;

  return (
    <div className="bg-gradient-to-r from-white to-green-50/30 dark:from-neutral-800 dark:to-green-950/20 rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex-1">
            <SocialShareButtons
              title={title}
              url={url}
              description={description}
            />
          </div>

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

      <div className="bg-neutral-100 dark:bg-neutral-900/50 px-8 py-4">
        <p className="m-0 text-sm text-neutral-600 dark:text-neutral-400">
          {readTime ? (
            <>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {readTime}
              </span>
              <span className="mx-2 text-neutral-400" aria-hidden>
                ·
              </span>
            </>
          ) : null}
          Share this article with the buttons above — thanks for reading.
        </p>
      </div>
    </div>
  );
};

export default BlogShareSection;
