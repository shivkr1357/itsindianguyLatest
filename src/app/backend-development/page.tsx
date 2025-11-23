import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Backend Development by ItsIndianGuy - Node.js, Python, APIs & Databases`,
  description:
    "Master backend development with ItsIndianGuy. Learn Node.js, Python, Express, REST APIs, GraphQL & database design. Build scalable server applications. Best backend tutorials in India.",
  keywords:
    "backend development ItsIndianGuy, Node.js tutorial ItsIndianGuy, Python backend, API development ItsIndianGuy, database design tutorial, server-side programming ItsIndianGuy, ItsIndianGuy backend, REST API tutorial, GraphQL ItsIndianGuy",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/backend-development",
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
    title:
      "Backend Development by ItsIndianGuy",
    description:
      "Master backend development with ItsIndianGuy. Node.js, Python, APIs & database tutorials. Build scalable servers.",
    url: "https://www.itsindianguy.in/backend-development",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-backend-dev.jpg",
        width: 1200,
        height: 630,
        alt: "Backend Development Tutorials - Node.js, Python, APIs & Database Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Backend Development | ItsIndianGuy",
    description:
      "Master backend development with ItsIndianGuy. Node.js, Python, APIs & database tutorials.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-backend-dev.jpg"],
  },
};

const backendDevelopmentContent = {
  title: "Backend Development",
  description: "Learn to build robust server-side applications and APIs",
  topics: [
    {
      title: "Node.js APIs",
      description: "Build scalable backend applications with JavaScript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      link: "/tutorials/nodejs-api",
    },
    {
      title: "GraphQL APIs",
      description: "Create powerful APIs with GraphQL",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      link: "/tutorials/graphql-api",
    },
    {
      title: "Database Integration",
      description: "Master SQL and NoSQL database management",
      image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      link: "/tutorials/fullstack-nextjs",
    },
    {
      title: "API Development",
      description: "Design and build RESTful and GraphQL APIs",
      image: "https://cdn-icons-png.flaticon.com/512/8099/8099100.png",
      link: "/tutorials/nodejs-api",
    },
  ],
};

const BackendDevelopment = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="bg-white dark:bg-neutral-800 shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <Link
                  href="/"
                  className="text-primary-200 hover:text-primary-300 transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>

              <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                {backendDevelopmentContent.title}
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {backendDevelopmentContent.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center">
              Learning Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {backendDevelopmentContent.topics.map((topic, index) => (
                <Link
                  key={index}
                  href={topic.link}
                  className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-all p-6"
                >
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3 text-center group-hover:text-primary-200 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-center">
                    {topic.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Ready to Build Backends?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Choose your backend development path and start building powerful
                server applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/tutorials"
                  className="px-6 py-3 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors"
                >
                  Browse Tutorials
                </Link>
                <Link
                  href="/resources"
                  className="px-6 py-3 border border-primary-200 text-primary-200 hover:bg-primary-200/10 rounded-lg transition-colors"
                >
                  View Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BackendDevelopment;
