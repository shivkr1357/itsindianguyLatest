import React, { Fragment } from "react";
import BlogListClient from "@/components/Blog/BlogListClient";
import { Metadata } from "next";
import { blogPosts, getAllBlogSlugs } from "@/lib/blogContent";

export const metadata: Metadata = {
  title: `हिंदी कहानियां - Inspiring और Motivational Stories | ItsIndianGuy`,
  description:
    "हिंदी में inspiring और motivational कहानियां जो जीवन में सीख देती हैं। Real-life stories, success stories, और life lessons से भरी कहानियां।",
  keywords:
    "हिंदी कहानियां, hindi stories, inspiring stories, motivational stories, real life stories, success stories, life lessons, ItsIndianGuy hindi",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/hindi-stories",
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
    title: "हिंदी कहानियां - Inspiring और Motivational Stories | ItsIndianGuy",
    description:
      "हिंदी में inspiring और motivational कहानियां जो जीवन में सीख देती हैं। Real-life stories और success stories।",
    url: "https://www.itsindianguy.in/blog/hindi-stories",
    siteName: "ItsIndianGuy - हिंदी कहानियां",
    locale: "hi_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-hindi-stories.jpg",
        width: 1200,
        height: 630,
        alt: "हिंदी कहानियां - ItsIndianGuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "हिंदी कहानियां - Inspiring Stories | ItsIndianGuy",
    description: "हिंदी में inspiring और motivational कहानियां जो जीवन में सीख देती हैं।",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-hindi-stories.jpg"],
  },
};

// Get Hindi stories
const getHindiStories = () => {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug, index) => ({
      id: index.toString(),
      ...blogPosts[slug],
    }))
    .filter((post) => post.category === "hindi-stories")
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
};

const hindiStories = getHindiStories();

const HindiStoriesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ItsIndianGuy हिंदी कहानियां",
    description: "हिंदी में inspiring और motivational कहानियां जो जीवन में सीख देती हैं",
    url: "https://www.itsindianguy.in/blog/hindi-stories",
    inLanguage: "hi",
    publisher: {
      "@type": "Organization",
      name: "ItsIndianGuy",
      url: "https://www.itsindianguy.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.itsindianguy.in/logo.png",
      },
    },
  };

  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-orange-50/30 to-red-50/20 dark:from-neutral-900 dark:via-orange-950/20 dark:to-red-950/10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-orange-50/30 dark:from-neutral-800 dark:to-orange-950/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400 font-[var(--font-hindi)]">
                  हिंदी कहानियां
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-neutral-800 dark:text-neutral-100 font-[var(--font-hindi)]">
                  हिंदी
                </span>
                <span className="block mt-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent font-[var(--font-hindi)]">
                  कहानियां
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto font-[var(--font-hindi)]">
                Inspiring और motivational हिंदी कहानियां जो जीवन में सीख देती हैं
              </p>
            </div>
          </div>
        </section>

        {/* Stories List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {hindiStories.length > 0 ? (
                <BlogListClient posts={hindiStories} />
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-neutral-600 dark:text-neutral-400 font-[var(--font-hindi)]">
                    जल्द ही नई कहानियां आएंगी!
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-500 mt-2">
                    Coming soon with new Hindi stories!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-white dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-white to-orange-50/50 dark:from-neutral-800 dark:to-orange-950/20 rounded-3xl p-8 md:p-12 shadow-2xl border border-neutral-200 dark:border-neutral-700 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
                और भी कहानियां चाहिए?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto font-[var(--font-hindi)]">
                हमारे newsletter को subscribe करो और कोई भी कहानी miss मत करो
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/newsletter"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold font-[var(--font-hindi)]"
                >
                  Newsletter Subscribe करें
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
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-neutral-700 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 rounded-xl transition-all hover:scale-105 shadow-md hover:shadow-lg font-semibold font-[var(--font-hindi)]"
                >
                  Programming Blogs देखें
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default HindiStoriesPage;
