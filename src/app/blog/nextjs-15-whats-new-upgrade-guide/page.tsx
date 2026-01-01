import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RelatedArticles from "@/components/Blog/RelatedArticles";
import StickyShareButton from "@/components/Blog/StickyShareButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
  title: "Next.js 15: What's New and How to Upgrade | ItsIndianGuy",
  description:
    "Dive into Next.js 15's latest features including improved Server Components, enhanced caching strategies, and new developer experience improvements. Learn how to upgrade your existing Next.js applications.",
  keywords:
    "Next.js 15, Next.js 15 features, Next.js upgrade guide, React 19 Next.js, Next.js 15 migration, Next.js caching, Turbopack, Next.js 15 tutorial, Next.js development 2025, ItsIndianGuy blog",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/nextjs-15-whats-new-upgrade-guide",
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
    title: "Next.js 15: What's New and How to Upgrade | ItsIndianGuy",
    description:
      "Dive into Next.js 15's latest features including improved Server Components, enhanced caching strategies, and new developer experience improvements. Learn how to upgrade your existing Next.js applications.",
    url: "https://www.itsindianguy.in/blog/nextjs-15-whats-new-upgrade-guide",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
        width: 1200,
        height: 630,
        alt: "Next.js 15: What's New and How to Upgrade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 15: What's New and How to Upgrade | ItsIndianGuy",
    description:
      "Complete guide to Next.js 15's new features including React 19 integration, async request APIs, enhanced caching, and migration strategies.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://cdn-icons-png.flaticon.com/512/919/919825.png"],
  },
};

export default function NextJS15UpgradeGuideBlogPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <StickyShareButton
        title="Next.js 15: What's New and How to Upgrade"
        url="/blog/nextjs-15-whats-new-upgrade-guide"
        description="Dive into Next.js 15's latest features including improved Server Components, enhanced caching strategies, and new developer experience improvements. Learn how to upgrade your existing Next.js applications."
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
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
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              alt="Next.js 15"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Next.js 15: What&apos;s New and How to Upgrade
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2025-12-10">Dec 10, 2025</time>
            <span>•</span>
            <span>18 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl mb-8">
            <p className="text-lg font-semibold mb-2">🚀 What&apos;s New in Next.js 15</p>
            <p className="text-white/90">
              Next.js 15 has arrived with groundbreaking features that push the
              boundaries of React development. Built on React 19, this release
              introduces async request APIs, enhanced caching strategies, and
              significant performance improvements that make building modern web
              applications faster and more intuitive than ever.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Introduction to Next.js 15
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Next.js 15 represents a major milestone in the Next.js ecosystem.
              Released in late 2024 and refined throughout 2025, this version
              brings React 19 support, async request APIs, improved caching
              strategies, and Turbopack stability. The framework has focused on
              developer experience, performance, and stability in this release.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Whether you&apos;re migrating from Next.js 14 or starting fresh,
              this release brings powerful tools to build faster, more efficient
              applications. If you&apos;re working with React 19, check out our
              guide on{" "}
              <Link
                href="/blog/react-19-features-complete-guide-2025"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                React 19 features
              </Link>{" "}
              to see how it integrates seamlessly with Next.js 15.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Key Features in Next.js 15
            </h2>
            <div className="space-y-6 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  1. React 19 Support
                </h3>
                <p className="mb-3">
                  Next.js 15 is built on React 19, bringing all the latest React
                  features to your Next.js applications. React 19 introduces the
                  React Compiler, Actions, improved hydration, and better error
                  handling. These features work seamlessly with Next.js to provide
                  an unparalleled development experience.
                </p>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
                  <SyntaxHighlighter
                    language="tsx"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: 0,
                      fontSize: "0.875rem",
                      background: "transparent",
                    }}
                  >
                    {`// Server Component with React 19
async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  
  return <div>{json.title}</div>;
}`}
                  </SyntaxHighlighter>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  2. Async Request APIs
                </h3>
                <p className="mb-3">
                  One of the most significant changes in Next.js 15 is the
                  introduction of async request APIs. Headers, cookies, and params
                  are now accessed asynchronously, aligning with React&apos;s async
                  model and enabling better streaming and performance.
                </p>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
                  <SyntaxHighlighter
                    language="tsx"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: 0,
                      fontSize: "0.875rem",
                      background: "transparent",
                    }}
                  >
                    {`import { headers, cookies } from 'next/headers';

export default async function Page() {
  // Access headers asynchronously
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');
  
  // Access cookies asynchronously  
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  
  return <div>User Agent: {userAgent}</div>;
}`}
                  </SyntaxHighlighter>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  3. Enhanced Caching Strategy
                </h3>
                <p className="mb-3">
                  Next.js 15 introduces a more intuitive caching system. By
                  default, fetch requests are no longer cached automatically -
                  giving you explicit control over when and how data is cached.
                  This prevents unexpected stale data issues and makes the caching
                  behavior more predictable.
                </p>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
                  <SyntaxHighlighter
                    language="tsx"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: 0,
                      fontSize: "0.875rem",
                      background: "transparent",
                    }}
                  >
                    {`// Cached fetch request
const data = await fetch('https://api.example.com/data', {
  cache: 'force-cache', // Explicit caching
  next: { revalidate: 3600 } // Revalidate every hour
});

// No cache (default in Next.js 15)
const liveData = await fetch('https://api.example.com/live', {
  cache: 'no-store' // Always fresh
});`}
                  </SyntaxHighlighter>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  4. Turbopack Dev - Production Ready
                </h3>
                <p className="mb-3">
                  Turbopack, the Rust-powered successor to Webpack, is now stable
                  for development in Next.js 15. It delivers dramatically faster
                  builds and hot module replacement (HMR), making your development
                  experience significantly smoother. Early benchmarks show 10x
                  faster updates compared to Webpack in large applications.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-blue-900 dark:text-blue-100">
                    <strong>💡 Enable Turbopack:</strong> Add{" "}
                    <code className="bg-neutral-900 text-green-400 px-2 py-1 rounded text-xs font-mono">
                      --turbo
                    </code>{" "}
                    flag:{" "}
                    <code className="bg-neutral-900 text-green-400 px-2 py-1 rounded text-xs font-mono">
                      next dev --turbo
                    </code>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  5. Improved Image Component
                </h3>
                <p className="mb-3">
                  The next/image component gets better with faster loading,
                  improved placeholder support, and better optimization for modern
                  image formats like AVIF. Automatic format detection ensures your
                  users get the best possible image experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Breaking Changes & Migration
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Upgrading from Next.js 14
                </h3>
                <p className="mb-3">
                  Next.js 15 includes some breaking changes, primarily around the
                  async request APIs. Here&apos;s what you need to know to migrate
                  your existing applications smoothly:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>
                    <strong>Async Headers & Cookies:</strong> The headers() and
                    cookies() functions now return Promises. You&apos;ll need to add
                    await when using them in Server Components.
                  </li>
                  <li>
                    <strong>Fetch Caching Default:</strong> Fetch requests are no
                    longer cached by default. Add cache: &apos;force-cache&apos;
                    explicitly if you want caching behavior.
                  </li>
                  <li>
                    <strong>Route Segment Config:</strong> Some route segment
                    config options have been renamed or deprecated. Check the
                    migration guide for specifics.
                  </li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-blue-900 dark:text-blue-100">
                    <strong>Tip:</strong> Use Next.js&apos;s codemod tool to
                    automatically migrate most of your code to Next.js 15 patterns.
                    Run: <code className="bg-neutral-900 text-green-400 px-2 py-1 rounded text-xs font-mono">npx @next/codemod@latest</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Step-by-Step Upgrade Guide
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Step 1: Update Dependencies
                </h3>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto mb-3">
                  <SyntaxHighlighter
                    language="bash"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: 0,
                      fontSize: "0.875rem",
                      background: "transparent",
                    }}
                  >
                    {`npm install next@latest react@latest react-dom@latest
# or
yarn add next@latest react@latest react-dom@latest
# or  
pnpm add next@latest react@latest react-dom@latest`}
                  </SyntaxHighlighter>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Step 2: Update Async APIs
                </h3>
                <p className="mb-3">
                  Add await to headers(), cookies(), and params usage throughout
                  your codebase. Use codemod for automated migration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Step 3: Review Caching
                </h3>
                <p className="mb-3">
                  Explicitly add cache: &apos;force-cache&apos; to fetch requests
                  that should be cached. Review your data fetching strategy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Step 4: Test Thoroughly
                </h3>
                <p className="mb-3">
                  Run your application locally with Turbopack (next dev --turbo),
                  test all features, and run your test suite before deploying.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Performance Improvements
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Beyond the headline features, Next.js 15 includes numerous
              performance improvements across the board. From faster builds to
              optimized runtime performance, every aspect of the framework has been
              refined for production use at scale.
            </p>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  <strong>Faster Builds:</strong> Improved build performance with
                  better tree shaking, code splitting, and bundle optimization.
                  Production builds are 20-30% faster.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  <strong>Runtime Optimizations:</strong> Reduced overhead in the
                  Next.js runtime, resulting in faster page loads and better Time to
                  Interactive (TTI) metrics.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  <strong>Smaller Bundles:</strong> Better tree shaking and dead
                  code elimination result in smaller JavaScript bundles sent to
                  clients.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  <strong>Memory Usage:</strong> Optimized memory consumption
                  during builds and runtime, allowing larger applications to build
                  more efficiently.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Best Practices
            </h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Use Server Components by default for better performance and SEO
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Leverage async request APIs for better streaming and performance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Explicitly configure caching for predictable data fetching
                  behavior
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Enable Turbopack for faster development builds and HMR
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Take advantage of React 19&apos;s new features like Actions and
                  improved hooks
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Conclusion
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Next.js 15 represents a major leap forward with React 19 integration,
              async request APIs, and Turbopack stability. While the breaking
              changes require some migration effort, the performance and developer
              experience improvements make it well worth the upgrade.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Start experimenting with Next.js 15 today in a new project, then
              plan your migration strategy for existing applications. The future of
              React development is here, and it&apos;s faster, more powerful, and
              more intuitive than ever! For more on modern React development, check
              out our article on{" "}
              <Link
                href="/blog/react-19-features-complete-guide-2025"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                React 19 Features
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/nextjs-14"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Next.js 14 Features
              </Link>
              .
            </p>
          </div>

          <RelatedArticles
            currentSlug="nextjs-15-whats-new-upgrade-guide"
            relatedSlugs={[
              "react-19-features-complete-guide-2025",
              "nextjs-14",
              "server-components",
              "building-ai-powered-web-applications-2025",
              "ai-assisted-development-2025",
            ]}
          />
        </div>
      </div>
    </article>
  );
}

