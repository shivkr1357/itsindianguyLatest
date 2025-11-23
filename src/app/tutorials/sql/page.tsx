import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SQL Database Tutorial 2024 | Master SQL Queries | ItsIndianGuy",
  description: "Complete SQL tutorial by ItsIndianGuy. Learn SQL queries, joins, subqueries, indexes, and database optimization. Step-by-step guide with examples. 50 min tutorial.",
  keywords: "SQL tutorial ItsIndianGuy, SQL queries tutorial, database tutorial, SQL joins tutorial, SQL optimization, learn SQL India, SQL tutorial 2024, ItsIndianGuy SQL, database programming tutorial",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/tutorials/sql",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "SQL Database Tutorial - Master SQL Queries | ItsIndianGuy",
    description: "Complete SQL tutorial covering queries, joins, optimization, and database design. Learn SQL with ItsIndianGuy.",
    url: "https://www.itsindianguy.in/tutorials/sql",
    siteName: "ItsIndianGuy - Programming Tutorials",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
        width: 1200,
        height: 630,
        alt: "SQL Database Tutorial by ItsIndianGuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL Database Tutorial | ItsIndianGuy",
    description: "Master SQL queries, joins, and database optimization",
    creator: "@itsindianguy",
    images: ["https://cdn-icons-png.flaticon.com/512/4248/4248443.png"],
  },
};

export default function SQLPage() {
  const tutorialSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Master SQL Database Queries",
    description: "Complete SQL tutorial covering queries, joins, subqueries, indexes, and optimization",
    image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    author: {
      "@type": "Person",
      name: "ItsIndianGuy",
      url: "https://www.itsindianguy.in/about",
    },
    publisher: {
      "@type": "Organization",
      name: "ItsIndianGuy",
      url: "https://www.itsindianguy.in",
    },
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    mainEntityOfPage: "https://www.itsindianguy.in/tutorials/sql",
    proficiencyLevel: "Intermediate",
    timeRequired: "PT50M",
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.itsindianguy.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tutorials",
        item: "https://www.itsindianguy.in/tutorials",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SQL Database",
        item: "https://www.itsindianguy.in/tutorials/sql",
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Learn SQL Database Queries",
    description: "Step-by-step guide to mastering SQL queries and database optimization",
    step: [
      {
        "@type": "HowToStep",
        name: "SQL Basics",
        text: "Learn SELECT, INSERT, UPDATE, DELETE statements",
      },
      {
        "@type": "HowToStep",
        name: "Advanced Queries",
        text: "Master JOINs, subqueries, and aggregate functions",
      },
      {
        "@type": "HowToStep",
        name: "Database Optimization",
        text: "Learn indexing, query optimization, and performance tuning",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tutorialSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/tutorials"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
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
            Back to Tutorials
          </Link>
          
          <Link
            href="/tutorials/sql/content"
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
              src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
              alt="SQL Database"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium">
              Beginner
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
              50 min
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Master SQL Database Queries
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Learn SQL from basics to advanced queries. Master SELECT, JOINs, subqueries, indexes, and database optimization techniques.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What You&apos;ll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-neutral-700 dark:text-neutral-300">SQL fundamentals: SELECT, INSERT, UPDATE, DELETE</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-neutral-700 dark:text-neutral-300">Advanced JOINs: INNER, LEFT, RIGHT, FULL OUTER</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-neutral-700 dark:text-neutral-300">Subqueries and correlated queries</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-neutral-700 dark:text-neutral-300">Aggregate functions: COUNT, SUM, AVG, GROUP BY</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-neutral-700 dark:text-neutral-300">Database indexing and optimization</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-neutral-700 dark:text-neutral-300">Transaction management and ACID properties</span>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Prerequisites
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">•</span>
              <span className="text-neutral-700 dark:text-neutral-300">Basic understanding of databases</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">•</span>
              <span className="text-neutral-700 dark:text-neutral-300">Familiarity with data structures</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">•</span>
              <span className="text-neutral-700 dark:text-neutral-300">No prior SQL experience required</span>
            </li>
          </ul>
        </div>

        {/* Tutorial Outline */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Tutorial Outline
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">1. SQL Fundamentals</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Learn basic SQL syntax, data types, and CRUD operations</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">2. Advanced Queries</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Master JOINs, subqueries, and complex query patterns</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">3. Aggregate Functions</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Use GROUP BY, HAVING, and aggregate functions effectively</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">4. Database Optimization</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Learn indexing strategies and query performance tuning</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">5. Transactions & ACID</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Understand transaction management and database integrity</p>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Key Concepts
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">SELECT Queries</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">JOINs</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Subqueries</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Indexes</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Query Optimization</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Transactions</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">ACID Properties</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Database Design</span>
          </div>
        </div>

        {/* Start Tutorial Button */}
        <div className="text-center mb-8">
          <Link
            href="/tutorials/sql/content"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Start SQL Tutorial
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Additional Resources */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Additional Resources
          </h2>
          <div className="space-y-4">
            <Link href="/tutorials" className="block p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">More Database Tutorials</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Explore NoSQL, database design, and ORM tutorials</p>
            </Link>
            <Link href="/database" className="block p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Database Category</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Browse all database-related tutorials and resources</p>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

