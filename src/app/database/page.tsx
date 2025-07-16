import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Database Tutorials | ItsIndianGuy - Learn SQL, NoSQL, MongoDB, PostgreSQL & Database Design`,
  description:
    "Master database design and management with comprehensive tutorials covering SQL, NoSQL, MongoDB, PostgreSQL, MySQL, Redis, and data modeling. Learn database optimization and ORM tools.",
  keywords:
    "database tutorials, SQL tutorials, NoSQL tutorials, MongoDB tutorials, PostgreSQL tutorials, database design, ItsIndianGuy database, programming tutorials, coding tutorials, database programming",
  alternates: {
    canonical: "https://www.itsindianguy.in/database",
  },
  openGraph: {
    title:
      "Database Tutorials | ItsIndianGuy - Learn SQL, NoSQL, MongoDB, PostgreSQL & Database Design",
    description:
      "Master database design and management with comprehensive tutorials covering SQL, NoSQL, MongoDB, PostgreSQL, MySQL, Redis, and data modeling. Learn database optimization, ORM tools, and build scalable data solutions for modern applications.",
    url: "https://www.itsindianguy.in/database",
    siteName: "ItsIndianGuy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-database.jpg",
        width: 1200,
        height: 630,
        alt: "Database Tutorials - SQL, NoSQL, MongoDB, PostgreSQL & Database Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Database Tutorials | ItsIndianGuy - Learn SQL, NoSQL, MongoDB, PostgreSQL & Database Design",
    description:
      "Master database design and management with comprehensive tutorials covering SQL, NoSQL, MongoDB, PostgreSQL, MySQL, Redis, and data modeling. Learn database optimization, ORM tools, and build scalable data solutions.",
    images: ["https://www.itsindianguy.in/og-database.jpg"],
  },
};

const databaseContent = {
  title: "Database",
  description: "Learn to design and manage databases effectively",
  topics: [
    {
      title: "SQL",
      description: "Master SQL databases and query optimization",
      image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      link: "/tutorials/sql",
    },
    {
      title: "NoSQL",
      description: "Work with MongoDB, Redis, and other NoSQL databases",
      image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      link: "/tutorials/nosql",
    },
    {
      title: "Database Design",
      description: "Learn data modeling and database architecture",
      image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      link: "/tutorials/database-design",
    },
    {
      title: "ORM",
      description: "Use Object-Relational Mapping tools effectively",
      image: "https://cdn-icons-png.flaticon.com/512/8099/8099100.png",
      link: "/tutorials/orm",
    },
  ],
};

const Database = () => {
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
                {databaseContent.title}
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {databaseContent.description}
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
              {databaseContent.topics.map((topic, index) => (
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
                Ready to Master Databases?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Choose your database path and start building robust data
                solutions.
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

export default Database;
