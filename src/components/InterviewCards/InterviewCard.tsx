"use client";
import { useThemeState } from "@/context/ThemeContext";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const imageLinksInterview = [
  {
    label: "JavaScript",
    description: "ES6+, Closures, Async",
    questions: "50+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    link: "/interview-qa/javascript",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/10",
  },
  {
    label: "React",
    description: "Hooks, Components, State",
    questions: "40+",
    src: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    link: "/interview-qa/react",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    label: "Node.js",
    description: "Events, Streams, APIs",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    link: "/interview-qa/node",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-900/10",
  },
  {
    label: "System Design",
    description: "Scalability, Architecture",
    questions: "20+",
    src: "https://cdn-icons-png.flaticon.com/512/2059/2059309.png",
    link: "/interview-qa/cpp",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
  },
  {
    label: "Python",
    description: "OOP, Decorators, Django",
    questions: "35+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    link: "/interview-qa/python",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    label: "Data Structures",
    description: "Arrays, Trees, Graphs",
    questions: "40+",
    src: "https://cdn-icons-png.flaticon.com/512/2942/2942789.png",
    link: "/interview-qa/dsa-interview",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
  },
  {
    label: "Database",
    description: "SQL, NoSQL, Optimization",
    questions: "35+",
    src: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    link: "/interview-qa/database-interview",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50 dark:bg-teal-900/10",
  },
  {
    label: "Machine Learning",
    description: "ML, Neural Networks, AI",
    questions: "35+",
    src: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    link: "/interview-qa/ml-interview",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/10",
  },
];

const InterviewCard = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {imageLinksInterview.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="group relative block bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-transparent"
          >
            {/* Gradient background on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            {/* Content */}
            <div className="relative p-6">
              {/* Icon container with gradient background */}
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="relative w-14 h-14">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-primary-200 transition-colors">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-center text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
                {item.description}
              </p>

              {/* Question count badge */}
              <div className="flex items-center justify-center gap-2">
                <div className="px-3 py-1 bg-gradient-to-r from-primary-200/10 to-blue-500/10 rounded-full">
                  <span className="text-xs font-semibold bg-gradient-to-r from-primary-200 to-blue-500 bg-clip-text text-transparent">
                    {item.questions} Questions
                  </span>
                </div>
              </div>

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-primary-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className={`h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InterviewCard;
