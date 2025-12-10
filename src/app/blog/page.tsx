import React, { Fragment } from "react";
import Link from "next/link";
import BlogListClient from "@/components/Blog/BlogListClient";
import { Metadata } from "next";
import { blogPosts, getAllBlogSlugs } from "@/lib/blogContent";

export const metadata: Metadata = {
  title: `ItsIndianGuy Blog - Next.js 15, React, TypeScript & Full-Stack Development Tutorials`,
  description:
    "Latest programming tutorials by ItsIndianGuy. Learn Next.js 15, React performance, TypeScript best practices, Node.js, GraphQL, Docker & full-stack development. In-depth guides with code examples for Indian developers.",
  keywords:
    "ItsIndianGuy blog, Next.js 15 tutorial, React performance optimization, TypeScript best practices, Node.js tutorial India, full-stack development blog, programming blog ItsIndianGuy, web development tutorials, GraphQL tutorial, Docker guide, coding blog India, ItsIndianGuy articles, Next.js 14 vs 15, React Server Components tutorial",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ItsIndianGuy Blog - Next.js, React & Full-Stack Development",
    description:
      "Latest programming tutorials by ItsIndianGuy. Learn Next.js 15, React, TypeScript & full-stack development with practical code examples.",
    url: "https://www.itsindianguy.in/blog",
    siteName: "ItsIndianGuy - Programming Blog India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Programming Blog - Web Development, React, Node.js Tutorials & Tech Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ItsIndianGuy Blog - Programming Tutorials",
    description:
      "Latest Next.js, React, TypeScript tutorials by ItsIndianGuy. Learn full-stack development with practical code examples.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-blog.jpg"],
  },
};

// Get all blog posts from blogContent.tsx and convert to array format
// Sort by date (newest first)
const getAllBlogPosts = () => {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug, index) => ({
      id: index.toString(),
      ...blogPosts[slug],
    }))
    .sort((a, b) => {
      // Sort by date descending (newest first)
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
};

const samplePosts = getAllBlogPosts();

const Blog = () => {
  // Schema.org structured data for blog listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ItsIndianGuy Programming Blog",
    description:
      "Latest programming tutorials, tech insights, and development articles",
    url: "https://www.itsindianguy.in/blog",
    publisher: {
      "@type": "Organization",
      name: "ItsIndianGuy",
      url: "https://www.itsindianguy.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.itsindianguy.in/logo.png",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Programming Blog Posts",
      description: "Collection of programming tutorials and tech articles",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Web Development Tutorials",
          url: "https://www.itsindianguy.in/blog/web-development",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mobile Development Guides",
          url: "https://www.itsindianguy.in/blog/mobile-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI/ML Articles",
          url: "https://www.itsindianguy.in/blog/ai-ml",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Programming Tips",
          url: "https://www.itsindianguy.in/blog/programming-tips",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Tech Trends",
          url: "https://www.itsindianguy.in/blog/tech-trends",
        },
      ],
    },
  };

  return (
    <Fragment>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-green-50/30 to-teal-50/20 dark:from-neutral-900 dark:via-green-950/20 dark:to-teal-950/10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-green-50/30 dark:from-neutral-800 dark:to-green-950/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Updated Weekly
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-neutral-800 dark:text-neutral-100">
                  Programming
                </span>
                <span className="block mt-2 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                  Blog & Insights
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                Latest programming tutorials, tech insights, and development
                articles to help you stay ahead in the world of software
                development.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog/hindi-stories"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-medium font-[var(--font-hindi)]"
                >
                  <span className="text-xl">🇮🇳</span>
                  <span>हिंदी कहानियां</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <BlogListClient posts={samplePosts} />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-white dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-white to-green-50/50 dark:from-neutral-800 dark:to-green-950/20 rounded-3xl p-8 md:p-12 shadow-2xl border border-neutral-200 dark:border-neutral-700 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Want More Content?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss a post
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/newsletter"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                >
                  Subscribe Newsletter
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-neutral-700 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 rounded-xl transition-all hover:scale-105 shadow-md hover:shadow-lg font-semibold"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Blog;
