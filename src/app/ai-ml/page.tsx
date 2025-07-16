import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: `AI/ML | ItsIndianGuy - Learn Artificial Intelligence and Machine Learning`,
  description:
    "Master artificial intelligence and machine learning with our comprehensive guides covering Python, TensorFlow, PyTorch, and real-world applications.",
  alternates: {
    canonical: "https://itsindianguy.in/ai-ml",
  },
};

const aiMlContent = {
  title: "AI/ML",
  description: "Learn artificial intelligence and machine learning",
  topics: [
    {
      title: "Python ML",
      description: "Build ML models with Python and scikit-learn",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      link: "/tutorials/python-ml",
    },
    {
      title: "Deep Learning",
      description: "Master neural networks and deep learning",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      link: "/tutorials/deep-learning",
    },
    {
      title: "Computer Vision",
      description: "Build image recognition and computer vision systems",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      link: "/tutorials/computer-vision",
    },
    {
      title: "NLP",
      description: "Natural Language Processing and text analysis",
      image: "https://cdn-icons-png.flaticon.com/512/8099/8099100.png",
      link: "/tutorials/nlp",
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
