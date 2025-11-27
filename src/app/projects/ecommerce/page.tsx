import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Commerce Platform - Full-Stack Project | ItsIndianGuy",
  description:
    "A full-stack e-commerce solution built with Next.js and Stripe integration. Learn about modern e-commerce development with secure payment processing.",
  keywords:
    "e-commerce, Next.js, Stripe, online store, payment gateway, full-stack development, ItsIndianGuy projects",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/projects/ecommerce",
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
    title: "E-Commerce Platform - Full-Stack Project | ItsIndianGuy",
    description:
      "Full-stack e-commerce solution with Next.js and Stripe. Learn modern e-commerce development with secure payment processing.",
    url: "https://www.itsindianguy.in/projects/ecommerce",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-ecommerce.jpg",
        width: 1200,
        height: 630,
        alt: "E-Commerce Platform - Full-Stack Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Platform - Full-Stack Project | ItsIndianGuy",
    description:
      "Full-stack e-commerce solution with Next.js and Stripe integration. Learn modern e-commerce development.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-ecommerce.jpg"],
  },
};

export default function ECommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/projects"
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
          Back to Projects
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="E-Commerce Platform"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            E-Commerce Platform
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            A full-stack e-commerce solution built with Next.js and Stripe
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Project Overview
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              This e-commerce platform is a comprehensive full-stack solution designed to handle modern online shopping experiences. Built with Next.js 14 and the App Router, it leverages server-side rendering for optimal performance and SEO.
            </p>
            <p>
              The platform integrates with Stripe for secure payment processing, offering customers a seamless checkout experience with support for multiple payment methods including credit cards, digital wallets, and buy-now-pay-later options.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">Product Management</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Dynamic product catalog with search and filtering</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">Secure Payments</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Stripe integration with PCI compliance</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">User Authentication</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Secure login with OAuth and JWT tokens</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">Order Tracking</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Real-time order status and notifications</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">Admin Dashboard</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Comprehensive analytics and management tools</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">Responsive Design</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Mobile-first approach for all devices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Technical Highlights
          </h2>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>Server Components:</strong> Utilizing Next.js 14 App Router for optimal performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>Type Safety:</strong> Full TypeScript implementation for reliability</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>Database:</strong> PostgreSQL with Prisma ORM for data management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>Image Optimization:</strong> Next.js Image component for fast loading</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span><strong>SEO Optimized:</strong> Metadata API and sitemap generation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

