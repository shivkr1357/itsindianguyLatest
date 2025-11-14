import React, { Fragment } from "react";
import BlogListClient from "@/components/Blog/BlogListClient";
import { Metadata } from "next";

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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title:
      "ItsIndianGuy Blog - Next.js, React & Full-Stack Development",
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
    title:
      "ItsIndianGuy Blog - Programming Tutorials",
    description:
      "Latest Next.js, React, TypeScript tutorials by ItsIndianGuy. Learn full-stack development with practical code examples.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-blog.jpg"],
  },
};

// Sample blog posts data - in a real app, this would come from a CMS or database
const samplePosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    description:
      "Learn the fundamentals of Next.js 14 and build your first application with the latest features and improvements.",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    author: "ItsIndianGuy",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "getting-started-with-nextjs-14",
  },
  {
    id: "2",
    title: "Mastering TypeScript Generics",
    description:
      "Deep dive into TypeScript generics and learn how to write more flexible and reusable code.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    author: "ItsIndianGuy",
    date: "2024-01-10",
    readTime: "12 min read",
    slug: "mastering-typescript-generics",
  },
  {
    id: "3",
    title: "React Performance Optimization Tips",
    description:
      "Essential techniques to optimize your React applications for better performance and user experience.",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    author: "ItsIndianGuy",
    date: "2024-01-05",
    readTime: "10 min read",
    slug: "react-performance-optimization-tips",
  },
  {
    id: "4",
    title: "Building REST APIs with Node.js",
    description:
      "Complete guide to building scalable REST APIs using Node.js, Express, and MongoDB.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    author: "ItsIndianGuy",
    date: "2024-01-01",
    readTime: "15 min read",
    slug: "building-rest-apis-with-nodejs",
  },
  {
    id: "5",
    title: "Introduction to Machine Learning",
    description:
      "Start your journey into machine learning with practical examples and real-world applications.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    author: "ItsIndianGuy",
    date: "2023-12-28",
    readTime: "20 min read",
    slug: "introduction-to-machine-learning",
  },
  {
    id: "6",
    title: "Docker for Beginners",
    description:
      "Learn Docker basics and containerize your applications for easier deployment and scaling.",
    image: "https://cdn-icons-png.flaticon.com/512/9433/9433667.png",
    author: "ItsIndianGuy",
    date: "2023-12-25",
    readTime: "14 min read",
    slug: "docker-for-beginners",
  },
  {
    id: "7",
    title: "GraphQL vs REST: Which Should You Choose?",
    description:
      "A comprehensive comparison of GraphQL and REST APIs to help you make the right choice for your project.",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    author: "ItsIndianGuy",
    date: "2023-12-20",
    readTime: "16 min read",
    slug: "graphql-vs-rest",
  },
  {
    id: "8",
    title: "Node.js Performance Optimization",
    description:
      "Advanced techniques to optimize your Node.js applications for maximum performance and scalability.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    author: "ItsIndianGuy",
    date: "2023-12-15",
    readTime: "18 min read",
    slug: "nodejs-performance",
  },
  {
    id: "9",
    title: "Modern CSS Techniques in 2024",
    description:
      "Explore the latest CSS features including Grid, Flexbox, Container Queries, and CSS Variables.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    author: "ItsIndianGuy",
    date: "2023-12-10",
    readTime: "15 min read",
    slug: "modern-css",
  },
  {
    id: "10",
    title: "TypeScript Best Practices",
    description:
      "Write better TypeScript code with these proven best practices and design patterns.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    author: "ItsIndianGuy",
    date: "2023-12-05",
    readTime: "17 min read",
    slug: "typescript-practices",
  },
  {
    id: "11",
    title: "Understanding React Server Components",
    description:
      "Deep dive into React Server Components and how they revolutionize React applications.",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    author: "ItsIndianGuy",
    date: "2023-11-30",
    readTime: "19 min read",
    slug: "server-components",
  },
  {
    id: "12",
    title: "What's New in Next.js 14",
    description:
      "Explore the latest features and improvements in Next.js 14 including Turbopack and Server Actions.",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    author: "ItsIndianGuy",
    date: "2023-11-25",
    readTime: "13 min read",
    slug: "nextjs-14",
  },
  {
    id: "13",
    title: "Web Security Best Practices",
    description:
      "Essential security practices to protect your web applications from common vulnerabilities.",
    image: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
    author: "ItsIndianGuy",
    date: "2023-11-20",
    readTime: "20 min read",
    slug: "web-security",
  },
  {
    id: "14",
    title: "MongoDB Mastery Guide",
    description:
      "Master MongoDB from basics to advanced topics including aggregation, indexing, and sharding.",
    image: "https://cdn-icons-png.flaticon.com/512/528/528260.png",
    author: "ItsIndianGuy",
    date: "2023-11-15",
    readTime: "22 min read",
    slug: "mongodb-mastery",
  },
  {
    id: "15",
    title: "Next.js 15: What's New and Revolutionary",
    description:
      "Explore the groundbreaking features in Next.js 15 including React 19, async request APIs, and enhanced caching strategies.",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    author: "ItsIndianGuy",
    date: "2024-11-10",
    readTime: "16 min read",
    slug: "nextjs-15-features",
  },
];

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
                Latest programming tutorials, tech insights, and development articles to help you stay ahead in the world of software development.
              </p>
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
