import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const webDevelopmentContent = {
  title: "Web Development",
  description:
    "Master the art of building modern, responsive web applications. From frontend frameworks to backend technologies, learn everything you need to become a full-stack developer.",
  topics: [
    {
      title: "Frontend Development",
      description:
        "Learn HTML, CSS, JavaScript, and modern frameworks like React, Vue, and Angular.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721725.png",
      link: "/tutorials?category=Frontend",
    },
    {
      title: "Backend Development",
      description:
        "Master server-side programming with Node.js, Python, PHP, and database management.",
      image: "https://cdn-icons-png.flaticon.com/512/8099/8099100.png",
      link: "/tutorials?category=Backend",
    },
    {
      title: "Full-Stack Development",
      description:
        "Build complete web applications from frontend to backend with modern technologies.",
      image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
      link: "/tutorials?category=Full-Stack",
    },
  ],
  resources: [
    {
      title: "React Tutorials",
      description: "Learn React fundamentals and advanced concepts",
      link: "/tutorials?category=React",
    },
    {
      title: "Next.js Guide",
      description: "Master Next.js for production-ready applications",
      link: "/tutorials?category=Next.js",
    },
    {
      title: "JavaScript Interview Questions",
      description: "Prepare for JavaScript developer interviews",
      link: "/interview-qa/javascript",
    },
  ],
};

const WebDevelopment = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="bg-white dark:bg-neutral-800 shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4">
                <Link
                  href="/"
                  className="text-primary-200 hover:text-primary-300 transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                {webDevelopmentContent.title}
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                {webDevelopmentContent.description}
              </p>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center">
              Learning Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {webDevelopmentContent.topics.map((topic, index) => (
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

            {/* Resources */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Featured Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {webDevelopmentContent.resources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.link}
                    className="block p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-primary-200 transition-colors"
                  >
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2 hover:text-primary-200 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {resource.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Choose your path and begin your web development journey today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/tutorials"
                  className="px-6 py-3 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors"
                >
                  Browse Tutorials
                </Link>
                <Link
                  href="/interview-qa"
                  className="px-6 py-3 border border-primary-200 text-primary-200 hover:bg-primary-200/10 rounded-lg transition-colors"
                >
                  Practice Interviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WebDevelopment;
