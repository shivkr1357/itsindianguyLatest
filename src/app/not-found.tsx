import { Metadata } from "next";
import Link from "next/link";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `Page Not Found | ItsIndianGuy - Programming Tutorials & Web Development Guides`,
  description:
    "The page you're looking for doesn't exist. Browse our programming tutorials, web development guides, interview questions, and resources to find what you need.",
  keywords:
    "404 error, page not found, ItsIndianGuy, programming tutorials, web development guides, coding tutorials, ItsIndianGuy 404",
  alternates: {
    canonical: "https://www.itsindianguy.in/404",
  },
  openGraph: {
    title:
      "Page Not Found | ItsIndianGuy - Programming Tutorials & Web Development Guides",
    description:
      "The page you're looking for doesn't exist. Browse our programming tutorials, web development guides, interview questions, and resources to find what you need.",
    url: "https://www.itsindianguy.in/404",
    siteName: "ItsIndianGuy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-404.jpg",
        width: 1200,
        height: 630,
        alt: "Page Not Found - Programming Tutorials & Web Development Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Page Not Found | ItsIndianGuy - Programming Tutorials & Web Development Guides",
    description:
      "The page you're looking for doesn't exist. Browse our programming tutorials, web development guides, interview questions, and resources to find what you need.",
    images: ["https://www.itsindianguy.in/og-404.jpg"],
  },
};

const NotFound = () => {
  // Schema.org structured data for 404 page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Page Not Found",
    description: "404 error page for ItsIndianGuy",
    url: "https://www.itsindianguy.in/404",
    mainEntity: {
      "@type": "ItemList",
      name: "Suggested Pages",
      description: "Popular pages on ItsIndianGuy",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Programming Tutorials",
          url: "https://www.itsindianguy.in/tutorials",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Web Development Guides",
          url: "https://www.itsindianguy.in/web-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Interview Questions",
          url: "https://www.itsindianguy.in/interview-qa",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Programming Blog",
          url: "https://www.itsindianguy.in/blog",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Developer Resources",
          url: "https://www.itsindianguy.in/resources",
        },
      ],
    },
  };

  const suggestedPages = [
    {
      title: "Programming Tutorials",
      description: "Learn web development, React, Node.js, and more",
      link: "/tutorials",
      icon: "📚",
    },
    {
      title: "Web Development",
      description: "Master frontend and backend development",
      link: "/web-development",
      icon: "🌐",
    },
    {
      title: "Interview Questions",
      description: "Prepare for programming interviews",
      link: "/interview-qa",
      icon: "💼",
    },
    {
      title: "Programming Blog",
      description: "Latest tutorials and tech insights",
      link: "/blog",
      icon: "📝",
    },
    {
      title: "Developer Resources",
      description: "Tools, frameworks, and learning materials",
      link: "/resources",
      icon: "🛠️",
    },
    {
      title: "About Us",
      description: "Learn more about ItsIndianGuy",
      link: "/about",
      icon: "ℹ️",
    },
  ];

  return (
    <Fragment>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Icon */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-primary-200 mb-4">
                404
              </div>
              <div className="text-6xl mb-4">😕</div>
            </div>

            {/* Main Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
              Oops! Page Not Found
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Don't
              worry, we have plenty of amazing content for you to explore!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/"
                className="px-6 py-3 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors font-semibold"
              >
                Go to Homepage
              </Link>
              <Link
                href="/tutorials"
                className="px-6 py-3 border border-primary-200 text-primary-200 hover:bg-primary-200/10 rounded-lg transition-colors font-semibold"
              >
                Browse Tutorials
              </Link>
            </div>

            {/* Suggested Pages */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Popular Pages
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestedPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.link}
                    className="group block p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-primary-200 hover:shadow-md transition-all"
                  >
                    <div className="text-3xl mb-3">{page.icon}</div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-primary-200 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="mt-8 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Can't find what you're looking for?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Try browsing our categories or contact us for help.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/web-development"
                  className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded transition-colors text-sm"
                >
                  Web Development
                </Link>
                <Link
                  href="/mobile-development"
                  className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded transition-colors text-sm"
                >
                  Mobile Development
                </Link>
                <Link
                  href="/backend-development"
                  className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded transition-colors text-sm"
                >
                  Backend Development
                </Link>
                <Link
                  href="/ai-ml"
                  className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded transition-colors text-sm"
                >
                  AI/ML
                </Link>
                <Link
                  href="/contact-us"
                  className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
