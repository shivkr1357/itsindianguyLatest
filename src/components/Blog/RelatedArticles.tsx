import Link from "next/link";
import { BlogPost } from "@/lib/blogContent";
import { blogPosts } from "@/lib/blogContent";

interface RelatedArticlesProps {
  currentSlug: string;
  relatedSlugs: string[];
}

const RelatedArticles = ({ currentSlug, relatedSlugs }: RelatedArticlesProps) => {
  const relatedPosts = relatedSlugs
    .map((slug) => blogPosts[slug])
    .filter((post): post is BlogPost => post !== undefined)
    .slice(0, 4); // Limit to 4 related articles

  if (relatedPosts.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 mt-8">
      <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
        Related Articles You Might Find Helpful
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 bg-white dark:bg-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
          >
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {post.title}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
              {post.description}
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;



