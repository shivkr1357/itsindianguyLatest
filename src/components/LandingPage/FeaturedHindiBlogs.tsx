import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getAllBlogSlugs } from "@/lib/blogContent";

const FeaturedHindiStories = () => {
  // Get Hindi stories posts
  const getHindiStories = () => {
    const slugs = getAllBlogSlugs();
    return slugs
      .map((slug) => ({
        ...blogPosts[slug],
        slug,
      }))
      .filter((post) => post.category === "hindi-stories")
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // Newest first
      })
      .slice(0, 6); // Limit to 6 posts
  };

  const hindiStories = getHindiStories();

  // If no Hindi stories, return null
  if (hindiStories.length === 0) {
    return null;
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hindiStories.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group h-full flex flex-col bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-orange-200/50 dark:border-orange-800/50"
            >
              <div className="relative h-48 bg-white dark:bg-neutral-700">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium font-[var(--font-hindi)]">
                    कहानी
                  </span>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-[var(--font-hindi)]">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow font-[var(--font-hindi)]">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      );
    };

    export default FeaturedHindiStories;

