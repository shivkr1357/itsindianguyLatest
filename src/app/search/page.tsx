import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import SearchClient from "@/components/Search/SearchClient";

export const metadata: Metadata = {
  title: `Search | ItsIndianGuy`,
  description:
    "Search across our platform for tutorials, blog posts, and interview questions.",
  alternates: {
    canonical: "https://itsindianguy.in/search",
  },
};

const SearchResults = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="bg-white dark:bg-neutral-800 shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <Link
                  href="/"
                  className="text-primary-200 hover:text-primary-300 transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>

              <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                Search Results
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Find content across our platform
              </p>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <SearchClient />
      </div>
    </Fragment>
  );
};

export default SearchResults;
