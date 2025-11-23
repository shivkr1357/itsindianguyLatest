import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: `AI/ML Tutorials by ItsIndianGuy - Machine Learning & Deep Learning Guide`,
  description:
    "Learn AI & machine learning with ItsIndianGuy. Master Python, TensorFlow, PyTorch & neural networks. Build intelligent applications. Best AI/ML tutorials in India.",
  keywords:
    "AI tutorials ItsIndianGuy, machine learning ItsIndianGuy, deep learning tutorial, artificial intelligence ItsIndianGuy, Python ML tutorial, TensorFlow ItsIndianGuy, neural networks guide, ItsIndianGuy AI ML, computer vision tutorial",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/ai-ml",
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
      "AI/ML Tutorials by ItsIndianGuy",
    description:
      "Learn AI & machine learning with ItsIndianGuy. Python, TensorFlow & neural networks tutorials. Build intelligent apps.",
    url: "https://www.itsindianguy.in/ai-ml",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-ai-ml.jpg",
        width: 1200,
        height: 630,
        alt: "AI/ML Tutorials - Machine Learning, Deep Learning & Artificial Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI/ML Tutorials | ItsIndianGuy",
    description:
      "Learn AI & machine learning with ItsIndianGuy. Python, TensorFlow & neural networks tutorials.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-ai-ml.jpg"],
  },
};

const aiMlContent = {
  title: "AI/ML",
  description: "Learn artificial intelligence and machine learning",
  topics: [
    {
      title: "Machine Learning Basics",
      description: "Build ML models and understand ML fundamentals",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      link: "/tutorials/ml-basics",
    },
    {
      title: "ML Integration",
      description: "Integrate ML models with web applications",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      link: "/tutorials/fullstack-nextjs",
    },
    {
      title: "Data Processing",
      description: "Process data for machine learning applications",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      link: "/tutorials/ml-basics",
    },
    {
      title: "ML APIs",
      description: "Build APIs for machine learning models",
      image: "https://cdn-icons-png.flaticon.com/512/8099/8099100.png",
      link: "/tutorials/nodejs-api",
    },
  ],
};

const AIML = () => {
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
                {aiMlContent.title}
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {aiMlContent.description}
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
              {aiMlContent.topics.map((topic, index) => (
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
                Ready to Build AI?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Choose your AI/ML path and start building intelligent
                applications.
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

export default AIML;
