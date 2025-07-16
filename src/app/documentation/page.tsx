import React, { Fragment } from "react";
import Link from "next/link";

const documentationSections = [
  {
    title: "Getting Started",
    description: "Learn the basics and set up your development environment",
    guides: [
      {
        title: "Quick Start Guide",
        description: "Get up and running in minutes",
        link: "/tutorials?category=Getting-Started",
        difficulty: "Beginner",
      },
      {
        title: "Development Setup",
        description: "Configure your development environment",
        link: "/tutorials?category=Setup",
        difficulty: "Beginner",
      },
      {
        title: "Best Practices",
        description: "Learn coding standards and conventions",
        link: "/blog?category=Best-Practices",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    title: "Frontend Development",
    description: "Master modern frontend technologies and frameworks",
    guides: [
      {
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development",
        link: "/tutorials?category=HTML-CSS",
        difficulty: "Beginner",
      },
      {
        title: "JavaScript Deep Dive",
        description: "Master JavaScript concepts and ES6+ features",
        link: "/tutorials?category=JavaScript",
        difficulty: "Intermediate",
      },
      {
        title: "React Development",
        description: "Build modern UIs with React",
        link: "/tutorials?category=React",
        difficulty: "Intermediate",
      },
      {
        title: "Next.js Framework",
        description: "Full-stack React applications",
        link: "/tutorials?category=Next.js",
        difficulty: "Advanced",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Server-side programming and API development",
    guides: [
      {
        title: "Node.js Basics",
        description: "Server-side JavaScript development",
        link: "/tutorials?category=Node.js",
        difficulty: "Intermediate",
      },
      {
        title: "API Development",
        description: "Build RESTful APIs and GraphQL",
        link: "/tutorials?category=API",
        difficulty: "Advanced",
      },
      {
        title: "Database Design",
        description: "SQL and NoSQL database concepts",
        link: "/tutorials?category=Database",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    title: "DevOps & Deployment",
    description: "Deploy and maintain your applications",
    guides: [
      {
        title: "Git Version Control",
        description: "Collaborative development with Git",
        link: "/tutorials?category=Git",
        difficulty: "Beginner",
      },
      {
        title: "Docker Containers",
        description: "Containerize your applications",
        link: "/tutorials?category=Docker",
        difficulty: "Intermediate",
      },
      {
        title: "CI/CD Pipelines",
        description: "Automate your deployment process",
        link: "/tutorials?category=CI-CD",
        difficulty: "Advanced",
      },
    ],
  },
];

const Documentation = () => {
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
                Documentation
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Comprehensive guides and tutorials to help you master modern web
                development.
              </p>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {documentationSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8"
                >
                  <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {section.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.guides.map((guide, guideIndex) => (
                      <Link
                        key={guideIndex}
                        href={guide.link}
                        className="block p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-primary-200 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 hover:text-primary-200 transition-colors">
                            {guide.title}
                          </h3>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              guide.difficulty === "Beginner"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : guide.difficulty === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {guide.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {guide.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="mt-16 bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Additional Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    Interview Preparation
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    Practice coding questions and prepare for technical
                    interviews
                  </p>
                  <Link
                    href="/interview-qa"
                    className="text-primary-200 hover:text-primary-300 text-sm font-medium"
                  >
                    Start Practicing →
                  </Link>
                </div>

                <div className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    Blog Articles
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    In-depth articles on latest trends and technologies
                  </p>
                  <Link
                    href="/blog"
                    className="text-primary-200 hover:text-primary-300 text-sm font-medium"
                  >
                    Read Articles →
                  </Link>
                </div>

                <div className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    Community Support
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    Get help from our community and support team
                  </p>
                  <Link
                    href="/support"
                    className="text-primary-200 hover:text-primary-300 text-sm font-medium"
                  >
                    Get Support →
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

export default Documentation;
