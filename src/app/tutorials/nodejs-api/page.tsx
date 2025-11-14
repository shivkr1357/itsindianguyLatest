import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Node.js API Development - Build REST APIs | ItsIndianGuy",
  description: "Learn to build production-ready REST APIs with Node.js, Express, and MongoDB. Master authentication, validation, error handling, and deployment.",
  keywords: "Node.js tutorial, REST API, Express.js, MongoDB, backend development, API development",
};

export default function NodeJSAPIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/tutorials"
            className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tutorials
          </Link>
          
          <Link
            href="/tutorials/nodejs-api/content"
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
              src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
              alt="Node.js API"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-sm font-medium">
              Intermediate
            </span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 rounded-full text-sm font-medium">
              60 min
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
              Backend
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Node.js API Development
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Build production-ready REST APIs with Node.js, Express, and MongoDB
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Introduction
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Node.js has become the go-to choice for building REST APIs due to its event-driven, non-blocking I/O model. In this comprehensive tutorial, you&apos;ll learn how to build production-ready APIs that can handle thousands of concurrent requests efficiently.
            </p>
            <p>
              We&apos;ll use Express.js for routing and middleware, MongoDB for data persistence, and implement industry-standard patterns for authentication, validation, error handling, and security. By the end, you&apos;ll have a solid foundation for building any kind of backend service.
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
              "Setting up Node.js and Express project",
              "RESTful API design principles",
              "MongoDB integration with Mongoose",
              "CRUD operations and data modeling",
              "JWT authentication and authorization",
              "Request validation with Joi",
              "Error handling middleware",
              "Security best practices (helmet, cors, rate limiting)",
              "File uploads with Multer",
              "API documentation with Swagger",
              "Testing with Jest and Supertest",
              "Deployment to production (Heroku, AWS, DigitalOcean)"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
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
              <span>Basic JavaScript knowledge and ES6+ syntax</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Familiarity with async/await and promises</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Node.js installed on your system (v18 or higher)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Basic understanding of HTTP methods and REST principles</span>
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
                title: "1. Project Setup & Configuration",
                topics: ["Initialize Node.js project", "Install dependencies (Express, Mongoose, etc.)", "Configure environment variables", "Set up project structure"]
              },
              {
                title: "2. Express Server & Middleware",
                topics: ["Create Express server", "Configure middleware (CORS, Helmet, Morgan)", "Set up error handling", "Implement rate limiting"]
              },
              {
                title: "3. Database Integration",
                topics: ["Connect to MongoDB", "Create Mongoose schemas and models", "Implement data validation", "Set up database seeding"]
              },
              {
                title: "4. API Routes & Controllers",
                topics: ["Design RESTful endpoints", "Implement CRUD operations", "Create controllers", "Add pagination and filtering"]
              },
              {
                title: "5. Authentication & Authorization",
                topics: ["Implement JWT authentication", "Create login and register endpoints", "Add middleware for protected routes", "Handle refresh tokens"]
              },
              {
                title: "6. Testing & Documentation",
                topics: ["Write API tests with Jest", "Document API with Swagger", "Integration testing", "API versioning"]
              },
              {
                title: "7. Deployment",
                topics: ["Prepare for production", "Deploy to cloud platforms", "Set up CI/CD", "Monitor and maintain"]
              }
            ].map((section, index) => (
              <div key={index} className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, idx) => (
                    <li key={idx} className="text-neutral-600 dark:text-neutral-400 flex items-start">
                      <span className="mr-2 text-emerald-500">→</span>
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
            Key Concepts Covered
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-emerald-700 dark:text-emerald-300">MVC Pattern</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Learn to structure your API using the Model-View-Controller pattern for better code organization and maintainability.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-300">Middleware</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Master Express middleware for authentication, validation, logging, and error handling to build robust APIs.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Database Design</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Design efficient MongoDB schemas, implement relationships, and optimize queries for production use.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-orange-700 dark:text-orange-300">Security</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Implement industry-standard security practices including encryption, sanitization, and protection against common vulnerabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Start Tutorial */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build APIs?
            </h2>
            <p className="text-xl text-blue-50 mb-6">
              Learn Node.js API development with hands-on examples
            </p>
            <Link
              href="/tutorials/nodejs-api/content"
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
        <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <ul className="space-y-2">
            <li>📖 Official Express.js Documentation</li>
            <li>📖 Mongoose Documentation and Best Practices</li>
            <li>💻 GitHub Repository with Complete Code</li>
            <li>🎥 Video Walkthrough (Coming Soon)</li>
            <li>💬 Join our Discord Community for Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

