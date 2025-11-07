import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build a Full-Stack App with Next.js - Tutorial | ItsIndianGuy",
  description: "Learn how to build a complete full-stack application with Next.js 14, including server components, API routes, database integration, and authentication.",
  keywords: "Next.js tutorial, full-stack development, Next.js 14, React Server Components, API routes, authentication",
};

export default function FullStackNextJSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
              alt="Full-Stack Next.js"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-sm font-medium">
              Intermediate
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
              45 min
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
              Web Development
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Build a Full-Stack App with Next.js
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Master modern full-stack development with Next.js 14, Server Components, and API Routes
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Introduction
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Next.js 14 has revolutionized full-stack development with its powerful App Router, React Server Components, and seamless API integration. In this comprehensive tutorial, you'll learn how to build a complete full-stack application from scratch.
            </p>
            <p>
              We'll cover everything from setting up your development environment to deploying your application to production. You'll learn how to work with databases, implement authentication, create API routes, and leverage the power of server and client components.
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Setting up Next.js 14 with TypeScript",
              "Understanding Server and Client Components",
              "Creating API Routes with Route Handlers",
              "Database integration with Prisma",
              "Implementing authentication with NextAuth",
              "State management and data fetching",
              "Form handling and validation",
              "File uploads and image optimization",
              "Error handling and loading states",
              "Deployment best practices"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-neutral-600 dark:text-neutral-300">{item}</span>
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
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Basic knowledge of JavaScript and React</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Familiarity with HTML and CSS</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Node.js and npm installed on your machine</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>A code editor (VS Code recommended)</span>
            </li>
          </ul>
        </div>

        {/* Tutorial Sections */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Tutorial Outline
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">1. Project Setup</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Initialize your Next.js project with TypeScript and configure your development environment</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">2. Understanding the App Router</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Learn about file-based routing, layouts, and the new app directory structure</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">3. Server vs Client Components</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Understand when to use server components and when to use client components</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">4. Database Integration</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Set up Prisma ORM and connect to your database</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">5. API Routes</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Create RESTful API endpoints using Route Handlers</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">6. Authentication</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Implement secure authentication with NextAuth.js</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">7. Building Features</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Create CRUD operations and build your application features</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">8. Deployment</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Deploy your application to Vercel with best practices</p>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Key Concepts
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                React Server Components
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Server Components allow you to render components on the server, reducing bundle size and improving performance. They can directly access backend resources without API routes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                Route Handlers
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                The new way to create API endpoints in Next.js 14. Route Handlers support all HTTP methods and provide a clean, type-safe way to build your backend.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                Data Fetching
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Next.js 14 introduces new patterns for data fetching with async/await in Server Components, automatic request deduplication, and powerful caching strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Additional Resources
          </h2>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>Official Next.js 14 Documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>Prisma Getting Started Guide</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>NextAuth.js Documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>TypeScript Handbook</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>Vercel Deployment Guide</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

