import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Cloud Computing | ItsIndianGuy - Learn AWS, Azure, GCP`,
  description:
    "Master cloud computing with our comprehensive guides covering AWS, Azure, Google Cloud Platform, and cloud architecture.",
  alternates: {
    canonical: "https://itsindianguy.in/cloud",
  },
};

const cloudContent = {
  title: "Cloud Computing",
  description: "Learn to build and deploy applications in the cloud",
  topics: [
    {
      title: "AWS",
      description: "Master Amazon Web Services and cloud infrastructure",
      image: "https://cdn-icons-png.flaticon.com/512/4116/4116139.png",
      link: "/tutorials/aws",
    },
    {
      title: "Azure",
      description: "Build solutions with Microsoft Azure",
      image: "https://cdn-icons-png.flaticon.com/512/4116/4116139.png",
      link: "/tutorials/azure",
    },
    {
      title: "Google Cloud",
      description: "Leverage Google Cloud Platform services",
      image: "https://cdn-icons-png.flaticon.com/512/4116/4116139.png",
      link: "/tutorials/gcp",
    },
    {
      title: "Serverless",
      description: "Build serverless applications and APIs",
      image: "https://cdn-icons-png.flaticon.com/512/8099/8099100.png",
      link: "/tutorials/serverless",
    },
  ],
};

const Cloud = () => {
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
                {cloudContent.title}
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {cloudContent.description}
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
              {cloudContent.topics.map((topic, index) => (
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
                Ready to Go Cloud?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Choose your cloud platform and start building scalable
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

export default Cloud;
