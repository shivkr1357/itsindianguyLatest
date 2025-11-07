import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started with Next.js 14 - Complete Guide | ItsIndianGuy",
  description: "Learn how to build modern web applications with Next.js 14's latest features including App Router, Server Components, and improved performance.",
  keywords: "Next.js 14, App Router, React Server Components, Next.js tutorial, web development",
};

export default function NextJS14BlogPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              alt="Next.js 14"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Getting Started with Next.js 14
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2024-03-15">Mar 15, 2024</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Next.js 14 represents a significant milestone in modern web development, introducing powerful features that make building production-ready applications easier and faster than ever. This guide will walk you through the essential features and help you get started with Next.js 14.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Whether you&apos;re migrating from an older version or starting fresh, Next.js 14 offers improved performance, better developer experience, and new capabilities that will transform how you build web applications.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              What&apos;s New in Next.js 14?
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  1. Turbopack (Stable)
                </h3>
                <p>
                  Next.js 14 marks Turbopack as stable for local development, offering up to 53% faster local server startup and 94% faster code updates with Fast Refresh. This Rust-powered bundler significantly improves the development experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  2. Server Actions (Stable)
                </h3>
                <p>
                  Server Actions are now stable, allowing you to write server-side mutations directly in your React components. This eliminates the need for separate API routes for simple data mutations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  3. Partial Prerendering (Preview)
                </h3>
                <p>
                  A groundbreaking feature that combines static and dynamic rendering on the same page. Components can be rendered statically at build time while keeping other parts dynamic.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Getting Started
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Create a New Project
                </h3>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    npx create-next-app@latest my-app
                  </code>
                </div>
                <p className="mt-2">
                  The setup wizard will guide you through selecting TypeScript, ESLint, Tailwind CSS, and the App Router.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Project Structure
                </h3>
                <p>
                  Next.js 14 uses the App Router by default, with a file-based routing system in the <code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">app</code> directory. Each folder represents a route, and special files like <code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">page.tsx</code> define the UI for that route.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Key Concepts
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Server and Client Components
                </h3>
                <p>
                  By default, all components in the App Router are Server Components. Use the <code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">&apos;use client&apos;</code> directive at the top of a file to create Client Components when you need interactivity or browser APIs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Data Fetching
                </h3>
                <p>
                  Next.js 14 simplifies data fetching with async/await in Server Components. You can fetch data directly in your components without useEffect or separate API routes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Layouts and Templates
                </h3>
                <p>
                  Create shared UI with <code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">layout.tsx</code> files that wrap multiple pages. Layouts preserve state and don&apos;t re-render on navigation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Best Practices
            </h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Use Server Components by default for better performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Implement proper error boundaries with error.tsx files</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Use loading.tsx for instant loading states</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Leverage Route Handlers for API endpoints</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Optimize images with the built-in Image component</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Conclusion
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Next.js 14 brings significant improvements to performance, developer experience, and capabilities. With Turbopack, Server Actions, and Partial Prerendering, building modern web applications has never been more efficient. Start your Next.js 14 journey today and experience the future of web development.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

