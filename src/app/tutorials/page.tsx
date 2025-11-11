import React, { Fragment } from "react";
import TutorialsClient from "@/components/Tutorials/TutorialsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Programming Tutorials | ItsIndianGuy - Learn Web Development, React, Node.js & Full-Stack Development`,
  description:
    "Master programming with step-by-step tutorials covering web development, React, Node.js, TypeScript, and full-stack development. From beginner to advanced, learn practical coding skills.",
  keywords:
    "programming tutorials, web development tutorials, coding tutorials, software development courses, learn programming, coding lessons, developer tutorials, programming courses, tech tutorials, coding education, React tutorials, Node.js guides, TypeScript lessons, ItsIndianGuy, programming courses",
  alternates: {
    canonical: "https://www.itsindianguy.in/tutorials",
  },
  openGraph: {
    title:
      "Programming Tutorials | ItsIndianGuy - Learn Web Development, React, Node.js & Full-Stack Development",
    description:
      "Master programming with step-by-step tutorials covering web development, React, Node.js, TypeScript, and full-stack development. From beginner to advanced, learn practical coding skills with hands-on projects and real-world examples.",
    url: "https://www.itsindianguy.in/tutorials",
    siteName: "ItsIndianGuy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-tutorials.jpg",
        width: 1200,
        height: 630,
        alt: "Programming Tutorials - Web Development, React, Node.js & Full-Stack Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Programming Tutorials | ItsIndianGuy - Learn Web Development, React, Node.js & Full-Stack Development",
    description:
      "Master programming with step-by-step tutorials covering web development, React, Node.js, TypeScript, and full-stack development. From beginner to advanced, learn practical coding skills.",
    images: ["https://www.itsindianguy.in/og-tutorials.jpg"],
  },
};

// Sample tutorials data - in a real app, this would come from a CMS or database
const sampleTutorials = [
  {
    id: "1",
    title: "Build a Full-Stack App with Next.js",
    category: "Web Development",
    level: "Intermediate",
    duration: "45 min",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    slug: "fullstack-nextjs",
    description:
      "Learn to build a complete full-stack application with authentication, database integration, and deployment using Next.js 14, TypeScript, Prisma, and modern web technologies.",
  },
  {
    id: "2",
    title: "Master TypeScript Generics",
    category: "TypeScript",
    level: "Advanced",
    duration: "30 min",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    slug: "typescript-generics",
    description:
      "Deep dive into TypeScript generics with real-world examples. Learn constraints, inference, utility types, and advanced patterns for writing flexible, type-safe code.",
  },
  {
    id: "3",
    title: "React Performance Optimization",
    category: "React",
    level: "Advanced",
    duration: "40 min",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    slug: "react-performance",
    description:
      "Master React performance optimization with memo, useMemo, useCallback, virtualization, code splitting, and profiling techniques to build lightning-fast applications.",
  },
  {
    id: "4",
    title: "Node.js API Development",
    category: "Backend",
    level: "Intermediate",
    duration: "60 min",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    slug: "nodejs-api",
    description:
      "Build production-ready REST APIs with Node.js, Express, and MongoDB. Learn authentication, validation, error handling, security, and deployment best practices.",
  },
  {
    id: "5",
    title: "Docker for Developers",
    category: "DevOps",
    level: "Beginner",
    duration: "35 min",
    image: "https://cdn-icons-png.flaticon.com/512/9433/9433667.png",
    slug: "docker-developers",
    description:
      "Master Docker containerization from scratch. Learn Dockerfile creation, Docker Compose, multi-stage builds, networking, volumes, and deployment strategies.",
  },
  {
    id: "6",
    title: "Machine Learning Basics",
    category: "AI/ML",
    level: "Beginner",
    duration: "50 min",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    slug: "ml-basics",
    description:
      "Begin your ML journey with Python, scikit-learn, and TensorFlow. Build your first models for classification, regression, and clustering with practical examples.",
  },
  {
    id: "7",
    title: "GraphQL API Development",
    category: "Backend",
    level: "Intermediate",
    duration: "55 min",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    slug: "graphql-api",
    description:
      "Build powerful GraphQL APIs with Apollo Server and Node.js. Learn schemas, resolvers, mutations, subscriptions, and best practices for scalable API design.",
  },
  {
    id: "8",
    title: "AWS Cloud Deployment",
    category: "DevOps",
    level: "Intermediate",
    duration: "65 min",
    image: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    slug: "aws-deployment",
    description:
      "Deploy full-stack applications to AWS. Learn EC2, S3, RDS, Lambda, CloudFront, and CI/CD pipelines with GitHub Actions for production deployments.",
  },
];

const categories = [
  "All",
  "Web Development",
  "TypeScript",
  "React",
  "Backend",
  "DevOps",
  "AI/ML",
];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Tutorials = () => {
  // Schema.org structured data for tutorials
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Programming Tutorials Collection",
    description:
      "Comprehensive collection of programming tutorials for all skill levels",
    url: "https://www.itsindianguy.in/tutorials",
    publisher: {
      "@type": "Organization",
      name: "ItsIndianGuy",
      url: "https://www.itsindianguy.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.itsindianguy.in/logo.png",
      },
    },
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Web Development Tutorials",
        description:
          "Learn HTML, CSS, JavaScript, React, and modern web technologies",
        url: "https://www.itsindianguy.in/web-development",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mobile Development Tutorials",
        description:
          "Master React Native, Flutter, iOS, and Android development",
        url: "https://www.itsindianguy.in/mobile-development",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Backend Development Tutorials",
        description:
          "Learn Node.js, Python, databases, and server-side programming",
        url: "https://www.itsindianguy.in/backend-development",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "DevOps Tutorials",
        description:
          "Master CI/CD, Docker, Kubernetes, and infrastructure as code",
        url: "https://www.itsindianguy.in/devops",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "AI/ML Tutorials",
        description:
          "Learn machine learning, artificial intelligence, and data science",
        url: "https://www.itsindianguy.in/ai-ml",
      },
    ],
  };

  return (
    <Fragment>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-green-50/30 to-teal-50/20 dark:from-neutral-900 dark:via-green-950/20 dark:to-teal-950/10">
        {/* Header */}
        <div className="relative bg-gradient-to-b from-white to-green-50/30 dark:from-neutral-800 dark:to-green-950/10 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />

          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  {sampleTutorials.length} Tutorials Available
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-neutral-800 dark:text-neutral-100">
                  Programming
                </span>
                <span className="block mt-2 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                  Tutorials
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
                Master new skills with our comprehensive tutorials. From
                beginner to advanced, we have something for every developer.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap items-center justify-center gap-6 max-w-3xl mx-auto">
                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Step-by-Step</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Hands-on Projects</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Code Examples</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search, Filters and Tutorials Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <TutorialsClient
              tutorials={sampleTutorials}
              categories={categories}
              levels={levels}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Tutorials;
