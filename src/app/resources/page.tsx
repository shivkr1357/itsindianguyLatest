import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Developer Resources | ItsIndianGuy - Programming Tools, Frameworks & Learning Materials`,
  description:
    "Discover curated developer resources including programming tools, frameworks, learning platforms, and essential software for web development, mobile apps, and software engineering.",
  keywords:
    "developer resources, programming tools, frameworks, learning materials, ItsIndianGuy resources, programming resources, web development tools, coding resources, ItsIndianGuy developer resources, programming learning materials",
  alternates: {
    canonical: "https://www.itsindianguy.in/resources",
  },
  openGraph: {
    title:
      "Developer Resources | ItsIndianGuy - Programming Tools, Frameworks & Learning Materials",
    description:
      "Discover curated developer resources including programming tools, frameworks, learning platforms, and essential software for web development, mobile apps, and software engineering. Everything you need to build amazing applications.",
    url: "https://www.itsindianguy.in/resources",
    siteName: "ItsIndianGuy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-resources.jpg",
        width: 1200,
        height: 630,
        alt: "Developer Resources - Programming Tools, Frameworks & Learning Materials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Developer Resources | ItsIndianGuy - Programming Tools, Frameworks & Learning Materials",
    description:
      "Discover curated developer resources including programming tools, frameworks, learning platforms, and essential software for web development, mobile apps, and software engineering.",
    images: ["https://www.itsindianguy.in/og-resources.jpg"],
  },
};

const resources = [
  {
    category: "Development Tools",
    items: [
      {
        title: "VS Code",
        description: "Popular code editor with extensive extensions",
        link: "https://code.visualstudio.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
      },
      {
        title: "GitHub",
        description: "Version control and collaboration platform",
        link: "https://github.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
      },
      {
        title: "Postman",
        description: "API development and testing tool",
        link: "https://www.postman.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
    ],
  },
  {
    category: "Learning Platforms",
    items: [
      {
        title: "MDN Web Docs",
        description: "Comprehensive web development documentation",
        link: "https://developer.mozilla.org/",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        title: "Stack Overflow",
        description: "Q&A platform for developers",
        link: "https://stackoverflow.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111628.png",
      },
      {
        title: "Dev.to",
        description: "Developer community and articles",
        link: "https://dev.to/",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      {
        title: "React Documentation",
        description: "Official React documentation and guides",
        link: "https://react.dev/",
        icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      },
      {
        title: "Next.js Documentation",
        description: "Next.js framework documentation",
        link: "https://nextjs.org/docs",
        icon: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
      },
      {
        title: "TypeScript Handbook",
        description: "TypeScript language documentation",
        link: "https://www.typescriptlang.org/docs/",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      },
    ],
  },
  {
    category: "Design & UI",
    items: [
      {
        title: "Figma",
        description: "Collaborative design tool",
        link: "https://www.figma.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
        link: "https://tailwindcss.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        title: "Material-UI",
        description: "React component library",
        link: "https://mui.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      },
    ],
  },
  {
    category: "Hosting & Deployment",
    items: [
      {
        title: "Vercel",
        description: "Deploy frontend applications",
        link: "https://vercel.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
      },
      {
        title: "Netlify",
        description: "Web development platform",
        link: "https://www.netlify.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        title: "Railway",
        description: "Deploy full-stack applications",
        link: "https://railway.app/",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
    ],
  },
  {
    category: "Database & Backend",
    items: [
      {
        title: "MongoDB",
        description: "NoSQL database platform",
        link: "https://www.mongodb.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      },
      {
        title: "PostgreSQL",
        description: "Advanced open source database",
        link: "https://www.postgresql.org/",
        icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      },
      {
        title: "Redis",
        description: "In-memory data structure store",
        link: "https://redis.io/",
        icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      },
    ],
  },
];

const Resources = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="bg-white dark:bg-neutral-800 shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Developer Resources
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Curated collection of essential tools, platforms, and resources
                for developers. Everything you need to build amazing
                applications.
              </p>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resources.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6"
                >
                  <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                          <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary-200 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                              {item.description}
                            </p>
                          </div>
                          <div className="text-neutral-400 group-hover:text-primary-200 transition-colors">
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Resources Section */}
            <div className="mt-16 bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                More Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    Free Courses
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    Access free programming courses and tutorials
                  </p>
                  <Link
                    href="/tutorials"
                    className="text-primary-200 hover:text-primary-300 text-sm font-medium"
                  >
                    Browse Courses →
                  </Link>
                </div>

                <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    Interview Prep
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    Practice interview questions and coding challenges
                  </p>
                  <Link
                    href="/interview-qa"
                    className="text-primary-200 hover:text-primary-300 text-sm font-medium"
                  >
                    Start Practicing →
                  </Link>
                </div>

                <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    Community
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    Join our developer community and connect with others
                  </p>
                  <Link
                    href="/contact-us"
                    className="text-primary-200 hover:text-primary-300 text-sm font-medium"
                  >
                    Get Connected →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resources;
