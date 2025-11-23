import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Mobile App Development by ItsIndianGuy - React Native, Flutter, iOS & Android`,
  description:
    "Learn mobile app development with ItsIndianGuy. Master React Native, Flutter, iOS Swift & Android Kotlin. Build cross-platform apps with step-by-step tutorials. Best mobile development guides in India.",
  keywords:
    "mobile app development ItsIndianGuy, React Native tutorial ItsIndianGuy, Flutter tutorial, iOS development India, Android tutorial ItsIndianGuy, mobile programming ItsIndianGuy, cross-platform development, ItsIndianGuy mobile, app development India",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/mobile-development",
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
      "Mobile App Development by ItsIndianGuy",
    description:
      "Learn mobile app development with ItsIndianGuy. React Native, Flutter, iOS & Android tutorials. Build cross-platform apps.",
    url: "https://www.itsindianguy.in/mobile-development",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-mobile-dev.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Tutorials - React Native, Flutter, iOS & Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mobile Development | ItsIndianGuy",
    description:
      "Learn mobile app development with ItsIndianGuy. React Native, Flutter, iOS & Android tutorials.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-mobile-dev.jpg"],
  },
};

const mobileDevelopmentContent = {
  title: "Mobile Development",
  description: "Learn to build native and cross-platform mobile applications",
  topics: [
    {
      title: "React Native",
      description: "Build cross-platform mobile apps with React",
      image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      link: "/tutorials",
    },
    {
      title: "Mobile APIs",
      description: "Create backend APIs for mobile applications",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      link: "/tutorials/nodejs-api",
    },
    {
      title: "Full-Stack Mobile",
      description: "Build complete mobile app backends",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      link: "/tutorials/fullstack-nextjs",
    },
    {
      title: "Mobile Performance",
      description: "Optimize mobile app performance and APIs",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      link: "/tutorials/react-performance",
    },
  ],
};

const MobileDevelopment = () => {
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
                {mobileDevelopmentContent.title}
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {mobileDevelopmentContent.description}
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
              {mobileDevelopmentContent.topics.map((topic, index) => (
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
                Ready to Start Building?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Choose your mobile development path and start building amazing
                apps.
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

export default MobileDevelopment;
