import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React Server Components Explained - Complete Guide | ItsIndianGuy",
  description:
    "Deep dive into React Server Components and their benefits. Learn how to use Server Components to build faster, more efficient React applications.",
  keywords:
    "React Server Components, RSC, Next.js, Server Components, React 18, performance optimization, ItsIndianGuy blog",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/server-components",
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
    title: "React Server Components Explained - Complete Guide | ItsIndianGuy",
    description:
      "Deep dive into React Server Components and their benefits. Learn how to use Server Components to build faster, more efficient React applications.",
    url: "https://www.itsindianguy.in/blog/server-components",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://cdn-icons-png.flaticon.com/512/2103/2103648.png",
        width: 1200,
        height: 630,
        alt: "React Server Components Explained - Complete Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Server Components Explained - Complete Guide | ItsIndianGuy",
    description:
      "Deep dive into React Server Components and their benefits. Learn how to use Server Components to build faster applications.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://cdn-icons-png.flaticon.com/512/2103/2103648.png"],
  },
};

export default function ServerComponentsBlogPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
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
              src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png"
              alt="React Server Components"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            React Server Components Explained
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2024-12-12">Dec 12, 2024</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              What Are React Server Components?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              React Server Components (RSC) are a new paradigm introduced in React 18 that allows you to render components on the server. Unlike traditional Server-Side Rendering (SSR), RSC components never ship JavaScript to the client, resulting in smaller bundle sizes and faster page loads.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              This revolutionary approach enables you to fetch data, access backend resources, and render UI on the server while keeping interactive components on the client where they belong.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Server Components vs Client Components
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-neutral-600 dark:text-neutral-300">
                <thead className="bg-neutral-100 dark:bg-neutral-700">
                  <tr>
                    <th className="p-3 font-semibold">Feature</th>
                    <th className="p-3 font-semibold">Server Components</th>
                    <th className="p-3 font-semibold">Client Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3">Data Fetching</td>
                    <td className="p-3">✅ Direct access</td>
                    <td className="p-3">❌ Requires API</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3">Backend Resources</td>
                    <td className="p-3">✅ Direct access</td>
                    <td className="p-3">❌ Not available</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3">JavaScript Bundle</td>
                    <td className="p-3">✅ Zero KB</td>
                    <td className="p-3">❌ Added to bundle</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3">Interactivity</td>
                    <td className="p-3">❌ Not supported</td>
                    <td className="p-3">✅ Full support</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3">Hooks (useState, etc.)</td>
                    <td className="p-3">❌ Not available</td>
                    <td className="p-3">✅ Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Benefits of Server Components
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  1. Zero Bundle Impact
                </h3>
                <p>
                  Server Components don&apos;t add any JavaScript to your client bundle. Large dependencies used in Server Components have zero impact on the client, improving initial load times significantly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  2. Direct Backend Access
                </h3>
                <p>
                  Access databases, file systems, and other backend resources directly from your components without creating API routes. This simplifies your architecture and reduces roundtrips.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  3. Automatic Code Splitting
                </h3>
                <p>
                  Every import in a Server Component is treated as a code split point, automatically optimizing your application without manual intervention.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  4. Improved SEO
                </h3>
                <p>
                  Content is fully rendered on the server, making it immediately available to search engine crawlers and improving SEO performance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              When to Use Each Type
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
                  Use Server Components For:
                </h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Data fetching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Direct backend access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Reducing bundle size</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Static content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>SEO-critical pages</span>
                  </li>
                </ul>
              </div>
              <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                  Use Client Components For:
                </h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Interactive elements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Event listeners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>State management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Browser-only APIs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>React hooks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Best Practices
            </h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">1.</span>
                <span><strong>Start with Server Components:</strong> Make components Server Components by default and only use &apos;use client&apos; when necessary.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">2.</span>
                <span><strong>Minimize Client Boundary:</strong> Keep Client Components as low in your component tree as possible to maximize the benefits of Server Components.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">3.</span>
                <span><strong>Compose Components:</strong> Pass Server Components as children to Client Components to maintain server rendering benefits.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">4.</span>
                <span><strong>Avoid Prop Drilling:</strong> Use the composition pattern to avoid passing props through multiple layers.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Conclusion
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              React Server Components represent a fundamental shift in how we build React applications. By understanding when to use Server Components versus Client Components, you can build faster, more efficient applications that provide better user experiences. Start incorporating Server Components into your projects today and experience the benefits firsthand.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

