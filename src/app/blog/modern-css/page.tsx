import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyShareButton from "@/components/Blog/StickyShareButton";

export const metadata: Metadata = {
  title: "Modern CSS Techniques - Latest Features & Best Practices | ItsIndianGuy",
  description:
    "Exploring the latest CSS features and best practices including Container Queries, CSS Grid, Flexbox, and modern layout techniques.",
  keywords:
    "modern CSS, CSS Grid, Flexbox, Container Queries, CSS best practices, responsive design, ItsIndianGuy blog",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/modern-css",
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
    title: "Modern CSS Techniques - Latest Features & Best Practices | ItsIndianGuy",
    description:
      "Exploring the latest CSS features and best practices including Container Queries, CSS Grid, Flexbox, and modern layout techniques.",
    url: "https://www.itsindianguy.in/blog/modern-css",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.itsindianguy.in/og-modern-css.jpg",
        width: 1200,
        height: 630,
        alt: "Modern CSS Techniques - Latest Features & Best Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern CSS Techniques - Latest Features & Best Practices | ItsIndianGuy",
    description:
      "Exploring the latest CSS features and best practices including Container Queries, CSS Grid, Flexbox, and modern layout techniques.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-modern-css.jpg"],
  },
};

export default function ModernCSSBlogPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <StickyShareButton
        title="Modern CSS Techniques in 2024"
        url="/blog/modern-css"
        description="Explore the latest CSS features including Grid, Flexbox, Container Queries, and CSS Variables."
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <header className="mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
              alt="Modern CSS"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Modern CSS Techniques
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2024-12-05">Dec 5, 2024</time>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              CSS has evolved dramatically in recent years, introducing powerful features that make building responsive, maintainable layouts easier than ever. This guide explores modern CSS techniques that every developer should know in 2024.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              1. Container Queries
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Container queries allow components to respond to their parent container&apos;s size rather than the viewport. This enables truly modular, context-aware components.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-neutral-300">
{`.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}`}
              </pre>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              This makes components truly reusable, adapting to any context without media queries.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              2. CSS Grid for Complex Layouts
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              CSS Grid revolutionizes layout creation. Use it for two-dimensional layouts where you need control over both rows and columns.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Named grid areas */
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 250px 1fr 1fr;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              3. Flexbox for One-Dimensional Layouts
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Flexbox excels at distributing space along a single axis. Perfect for navigation bars, card layouts, and centering content.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* Responsive flex wrapping */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card-grid > * {
  flex: 1 1 300px;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              4. CSS Custom Properties (Variables)
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              CSS variables enable dynamic theming and make your stylesheets more maintainable.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`:root {
  --primary-color: #3b82f6;
  --spacing-unit: 8px;
  --border-radius: 8px;
}

.button {
  background-color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
}

/* Dynamic theming */
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --background: #1f2937;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              5. Modern Selectors
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              New CSS selectors provide powerful ways to target elements precisely.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`/* :is() pseudo-class */
:is(h1, h2, h3) {
  line-height: 1.2;
}

/* :where() - zero specificity */
:where(.card, .panel) {
  padding: 1rem;
}

/* :has() - parent selector */
.card:has(img) {
  display: grid;
  grid-template-columns: 200px 1fr;
}

/* :not() with multiple selectors */
button:not([disabled]):not(.loading) {
  cursor: pointer;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              6. Logical Properties
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Logical properties adapt to different writing modes and directions automatically.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`/* Instead of margin-left/right */
.element {
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;
  /* or simply */
  margin-inline: 1rem;
}

/* Instead of margin-top/bottom */
.element {
  margin-block: 2rem;
}

/* Works automatically for RTL languages */`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              7. Aspect Ratio Property
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Maintain aspect ratios without padding hacks.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.square-avatar {
  aspect-ratio: 1;
  width: 100px;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              8. Clamp() Function
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Create fluid, responsive typography and spacing with a single line.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`h1 {
  /* min, preferred, max */
  font-size: clamp(1.5rem, 5vw, 3rem);
}

.container {
  width: clamp(320px, 90%, 1200px);
  padding: clamp(1rem, 5vw, 3rem);
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Best Practices
            </h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Use Grid for two-dimensional layouts, Flexbox for one-dimensional</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Embrace CSS variables for theming and consistency</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Use logical properties for better internationalization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Prefer modern selectors to reduce specificity issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Use clamp() for fluid, responsive designs</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Conclusion
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Modern CSS provides powerful tools that make building responsive, accessible, and maintainable websites easier than ever. By leveraging these techniques, you can create better user experiences while writing cleaner, more efficient code. Start incorporating these features into your projects today!
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

