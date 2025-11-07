"use client";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { interviewQA } from "@/config/InterviewQA";
import Head from "next/head";
import Link from "next/link";

const InterviewQAComponent = () => {
  const pathname = usePathname();
  const [qa, setQa] = useState<any[]>([]);
  const [canonical, setCanonical] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const language = pathname.split("/")[2];

  useEffect(() => {
    setCanonical(`https://www.itsindianguy.in/${pathname}`);
    setQa(interviewQA.filter((item) => item.slug === language));
  }, [language, pathname]);

  const filteredData = qa[0]?.data.filter((item: any) =>
    item.que.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.ans.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const getLanguageDisplay = (slug: string) => {
    const displayNames: { [key: string]: string } = {
      'javascript': 'JavaScript',
      'react': 'React',
      'node': 'Node.js',
      'cpp': 'System Design',
      'python': 'Python',
      'typescript': 'TypeScript',
      'next': 'Next.js',
      'nest': 'Nest.js',
      'dsa-interview': 'Data Structures & Algorithms',
      'database-interview': 'Database',
      'ml-interview': 'Machine Learning',
    };
    return displayNames[slug] || slug.toUpperCase();
  };

  return (
    <Fragment>
      <Head>
        <title>
          InterviewQA | ItsIndianGuy | {language.toUpperCase()} Interview
          Questions
        </title>
        <meta
          name="description"
          content={`Top ${language.toUpperCase()} interview questions and answers for developers`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-blue-950/20 dark:to-purple-950/10 py-8">
        {qa.map((item) => (
          <div key={item.id} className="max-w-5xl mx-auto px-4">
            {/* Back Button */}
            <Link
              href="/interview-qa"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Interview Topics
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-200/10 to-blue-500/10 rounded-full mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-200"></span>
                </span>
                <span className="text-sm font-medium text-primary-200">
                  {filteredData.length} Questions Available
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-neutral-800 dark:text-neutral-100">
                  {getLanguageDisplay(item.slug)}
                </span>
                <span className="block mt-2 bg-gradient-to-r from-primary-200 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Interview Questions
                </span>
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Ace your technical interviews with comprehensive questions and detailed explanations
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-200 focus:border-transparent text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400"
                />
              </div>
            </div>

            {/* Questions Grid */}
            <div className="space-y-4">
              {filteredData.map((subItem: any, index: number) => {
                const isExpanded = expandedIndex === index;
                return (
                  <div
                    key={index}
                    className="group bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-primary-200 to-blue-500 text-white rounded-lg font-bold text-sm">
                            {index + 1}
                          </span>
                          <h2 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary-200 transition-colors">
                            {subItem.que}
                          </h2>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-6 h-6 text-neutral-400 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-11 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                          <div className="flex items-start gap-2 mb-2">
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                              Answer
                            </span>
                          </div>
                          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                            {subItem.ans}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* No Results */}
            {searchQuery && filteredData.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-4">
                  <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  No questions found
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Try searching with different keywords
                </p>
              </div>
            )}

            {/* Footer CTA */}
            <div className="mt-16 text-center bg-gradient-to-r from-primary-200/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-primary-200/20">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Ready to practice more?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Explore more interview questions across different technologies
              </p>
              <Link
                href="/interview-qa"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-200 to-blue-500 hover:from-primary-300 hover:to-blue-600 text-white rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                View All Topics
              </Link>
            </div>
          </div>
        ))}
      </main>
    </Fragment>
  );
};

export default InterviewQAComponent;
