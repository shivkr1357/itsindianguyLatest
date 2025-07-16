"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// Sample search data - in a real app, this would come from a search API
const searchData = {
  blogs: [
    {
      id: "1",
      title: "Getting Started with Next.js 14",
      description:
        "Learn the fundamentals of Next.js 14 and build your first application with the latest features and improvements.",
      type: "Blog Post",
      url: "/blog/getting-started-with-nextjs-14",
      image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    },
    {
      id: "2",
      title: "Mastering TypeScript Generics",
      description:
        "Deep dive into TypeScript generics and learn how to write more flexible and reusable code.",
      type: "Blog Post",
      url: "/blog/mastering-typescript-generics",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    },
  ],
  tutorials: [
    {
      id: "3",
      title: "Build a Full-Stack App with Next.js",
      description:
        "Learn to build a complete full-stack application using Next.js, TypeScript, and modern web technologies.",
      type: "Tutorial",
      url: "/tutorials/fullstack-nextjs",
      image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    },
  ],
  interviews: [
    {
      id: "4",
      title: "JavaScript Interview Questions",
      description:
        "Prepare for JavaScript interviews with questions on syntax, closures, async programming, and more.",
      type: "Interview Q&A",
      url: "/interview-qa/javascript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
  ],
};

const SearchClient = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      // Simulate search delay
      setTimeout(() => {
        const allResults = [
          ...searchData.blogs,
          ...searchData.tutorials,
          ...searchData.interviews,
        ];

        const filteredResults = allResults.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filteredResults);
        setLoading(false);
      }, 500);
    }
  }, [query]);

  if (!query) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Search
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Enter a search term to find content across our site.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-200 mx-auto mb-4"></div>
              <p className="text-neutral-600 dark:text-neutral-400">
                Searching...
              </p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-6">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.url}
                  className="block bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-all p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={result.image}
                        alt={result.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-primary-200/10 text-primary-200 rounded">
                          {result.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2 hover:text-primary-200 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {result.description}
                      </p>
                    </div>
                    <div className="text-neutral-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                No results found
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Try adjusting your search terms or browse our content
                categories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog"
                  className="px-4 py-2 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors"
                >
                  Browse Blog
                </Link>
                <Link
                  href="/tutorials"
                  className="px-4 py-2 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors"
                >
                  Browse Tutorials
                </Link>
                <Link
                  href="/interview-qa"
                  className="px-4 py-2 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors"
                >
                  Browse Interview Q&A
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchClient;
