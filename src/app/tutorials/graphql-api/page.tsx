import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GraphQL API Development - Build Modern APIs | ItsIndianGuy",
  description: "Build powerful GraphQL APIs with Apollo Server and Node.js. Learn schemas, resolvers, mutations, subscriptions, and scalable API design patterns.",
  keywords: "GraphQL tutorial, Apollo Server, GraphQL API, Node.js GraphQL, API development, backend tutorial",
};

export default function GraphQLAPIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/tutorials"
            className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tutorials
          </Link>
          
          <Link
            href="/tutorials/graphql-api/content"
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
              src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
              alt="GraphQL"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-sm font-medium">
              Intermediate
            </span>
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 rounded-full text-sm font-medium">
              55 min
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
              Backend
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            GraphQL API Development
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Build flexible, powerful APIs with GraphQL and Apollo Server
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Introduction
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              GraphQL is a query language for APIs that gives clients the power to ask for exactly what they need. Unlike REST where you might need multiple endpoints, GraphQL uses a single endpoint with a flexible query language, making it perfect for modern applications with complex data requirements.
            </p>
            <p>
              In this tutorial, you&apos;ll build a complete GraphQL API using Apollo Server and Node.js. You&apos;ll learn how to design schemas, write resolvers, implement mutations and subscriptions, and follow best practices for production-ready GraphQL APIs.
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
              "GraphQL fundamentals and advantages",
              "Setting up Apollo Server with Node.js",
              "Defining GraphQL schemas and types",
              "Writing queries and mutations",
              "Implementing resolvers",
              "GraphQL subscriptions for real-time data",
              "Authentication and authorization",
              "Data loading patterns and DataLoader",
              "Error handling in GraphQL",
              "GraphQL vs REST comparison",
              "Performance optimization techniques",
              "Deploying GraphQL APIs to production"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-pink-600 dark:text-pink-300" fill="currentColor" viewBox="0 0 20 20">
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
              <span>Solid understanding of JavaScript and Node.js</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Experience with REST APIs recommended</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Basic understanding of databases</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Familiarity with async/await patterns</span>
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
                title: "1. GraphQL Basics",
                topics: ["Understanding GraphQL philosophy", "Schema Definition Language (SDL)", "Queries vs Mutations vs Subscriptions", "Type system overview"]
              },
              {
                title: "2. Apollo Server Setup",
                topics: ["Installing Apollo Server", "Creating your first schema", "Writing basic resolvers", "Testing with Apollo Playground"]
              },
              {
                title: "3. Advanced Schemas",
                topics: ["Complex types and relationships", "Input types and enums", "Interfaces and unions", "Custom scalars"]
              },
              {
                title: "4. Data Sources",
                topics: ["Connecting to databases", "REST API integration", "DataLoader for batching", "Caching strategies"]
              },
              {
                title: "5. Real-time with Subscriptions",
                topics: ["Setting up WebSocket server", "Implementing subscriptions", "PubSub patterns", "Real-time notifications"]
              },
              {
                title: "6. Production Best Practices",
                topics: ["Authentication strategies", "Rate limiting and throttling", "Error handling", "Schema stitching and federation"]
              }
            ].map((section, index) => (
              <div key={index} className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, idx) => (
                    <li key={idx} className="text-neutral-600 dark:text-neutral-400 flex items-start">
                      <span className="mr-2 text-pink-500">→</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Start Tutorial */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build GraphQL APIs?
            </h2>
            <p className="text-xl text-blue-50 mb-6">
              Learn GraphQL API development with Apollo Server
            </p>
            <Link
              href="/tutorials/graphql-api/content"
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
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <ul className="space-y-2">
            <li>📖 Official GraphQL and Apollo Documentation</li>
            <li>📖 GraphQL Best Practices Guide</li>
            <li>💻 Complete Code Repository on GitHub</li>
            <li>🎥 Video Tutorials and Live Coding Sessions</li>
            <li>💬 GraphQL Community and Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

