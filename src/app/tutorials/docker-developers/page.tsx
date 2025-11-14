import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docker for Developers - Containerization Tutorial | ItsIndianGuy",
  description: "Master Docker containerization from scratch. Learn Dockerfile, Docker Compose, multi-stage builds, and deployment strategies for modern applications.",
  keywords: "Docker tutorial, containerization, Docker Compose, Dockerfile, DevOps, container deployment",
};

export default function DockerDevelopersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/tutorials"
            className="inline-flex items-center text-sky-600 dark:text-sky-400 hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tutorials
          </Link>
          
          <Link
            href="/tutorials/docker-developers/content"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Tutorial
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/9433/9433667.png"
              alt="Docker"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium">
              Beginner
            </span>
            <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-100 rounded-full text-sm font-medium">
              35 min
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
              DevOps
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Docker for Developers
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Master containerization and streamline your development workflow
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Introduction
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Docker has revolutionized how we build, ship, and run applications. By packaging your application with all its dependencies into containers, you ensure consistency across development, testing, and production environments. Say goodbye to &quot;it works on my machine&quot; problems!
            </p>
            <p>
              This tutorial will take you from Docker basics to building multi-container applications. You&apos;ll learn how to create Dockerfiles, use Docker Compose, optimize images, and deploy containerized applications to the cloud.
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Docker fundamentals and architecture",
              "Installing Docker on your system",
              "Creating your first Dockerfile",
              "Building and running containers",
              "Docker images and layers",
              "Docker Compose for multi-container apps",
              "Volumes and data persistence",
              "Networking between containers",
              "Multi-stage builds for optimization",
              "Docker best practices and security",
              "Container orchestration basics",
              "Deploying Docker containers to production"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-sky-100 dark:bg-sky-900 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-sky-600 dark:text-sky-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Prerequisites
          </h2>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Basic command line/terminal knowledge</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Understanding of applications and dependencies</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>A computer with Windows, Mac, or Linux</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>No prior Docker experience required!</span>
            </li>
          </ul>
        </div>

        {/* Tutorial Outline */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Tutorial Outline
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "1. Docker Fundamentals",
                topics: ["What is Docker and why use it?", "Containers vs Virtual Machines", "Docker architecture overview", "Installing Docker Desktop"]
              },
              {
                title: "2. Your First Container",
                topics: ["Running pre-built images", "Basic Docker commands", "Container lifecycle", "Managing containers"]
              },
              {
                title: "3. Creating Dockerfiles",
                topics: ["Dockerfile syntax and instructions", "Building custom images", "Layer caching optimization", "Best practices for Dockerfiles"]
              },
              {
                title: "4. Docker Compose",
                topics: ["Multi-container applications", "docker-compose.yml syntax", "Service networking", "Development workflows"]
              },
              {
                title: "5. Advanced Topics",
                topics: ["Multi-stage builds", "Volume management", "Docker networks", "Security best practices"]
              },
              {
                title: "6. Production Deployment",
                topics: ["Container registries (Docker Hub, ECR)", "Deploying to cloud platforms", "Kubernetes introduction", "Monitoring and logging"]
              }
            ].map((section, index) => (
              <div key={index} className="border-l-4 border-sky-500 pl-6">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, idx) => (
                    <li key={idx} className="text-neutral-600 dark:text-neutral-400 flex items-start">
                      <span className="mr-2 text-sky-500">→</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Key Concepts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-sky-700 dark:text-sky-300">Containers</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Lightweight, portable units that package your application with all dependencies for consistent execution anywhere.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-300">Images</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Read-only templates used to create containers. Build once, run anywhere with guaranteed consistency.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-700 dark:text-indigo-300">Orchestration</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Manage multiple containers with Docker Compose and prepare for production with orchestration tools.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">CI/CD Integration</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Integrate Docker into your continuous integration and deployment pipelines for automated workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Start Tutorial */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Containerize?
            </h2>
            <p className="text-xl text-blue-50 mb-6">
              Learn Docker containerization with practical examples
            </p>
            <Link
              href="/tutorials/docker-developers/content"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Tutorial
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <ul className="space-y-2">
            <li>📖 Official Docker Documentation</li>
            <li>📖 Docker Hub - Container Registry</li>
            <li>💻 Sample Dockerfiles and Configurations</li>
            <li>🎥 Video Demonstrations</li>
            <li>💬 Community Support and Q&A</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

