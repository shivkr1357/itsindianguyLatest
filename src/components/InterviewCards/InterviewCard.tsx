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
  {
    label: "TypeScript",
    description: "Types, Interfaces, Generics",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    link: "/interview-qa/typescript",
    color: "from-blue-600 to-indigo-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    label: "Next.js",
    description: "SSR, SSG, App Router",
    questions: "25+",
    src: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    link: "/interview-qa/next",
    color: "from-neutral-700 to-neutral-900",
    bgColor: "bg-neutral-50 dark:bg-neutral-900/10",
  },
  {
    label: "Nest.js",
    description: "Decorators, Modules, DI",
    questions: "20+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    link: "/interview-qa/nest",
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50 dark:bg-red-900/10",
  },
  {
    label: "Vue.js",
    description: "Components, Directives, Vuex",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    link: "/interview-qa/vue",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-900/10",
  },
  {
    label: "Angular",
    description: "Components, Services, RxJS",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968252.png",
    link: "/interview-qa/angular",
    color: "from-red-600 to-red-800",
    bgColor: "bg-red-50 dark:bg-red-900/10",
  },
  {
    label: "Java",
    description: "OOP, Collections, Spring",
    questions: "40+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
    link: "/interview-qa/java",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
  },
  {
    label: "Go (Golang)",
    description: "Goroutines, Channels, Interfaces",
    questions: "25+",
    src: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    link: "/interview-qa/golang",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/10",
  },
  {
    label: "AWS Cloud",
    description: "EC2, S3, Lambda, Services",
    questions: "35+",
    src: "https://cdn-icons-png.flaticon.com/512/873/873107.png",
    link: "/interview-qa/aws",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
  },
  {
    label: "Docker",
    description: "Containers, Images, Compose",
    questions: "25+",
    src: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    link: "/interview-qa/docker",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    label: "Kubernetes",
    description: "Pods, Services, Deployments",
    questions: "25+",
    src: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    link: "/interview-qa/kubernetes",
    color: "from-blue-600 to-indigo-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    label: "Git & GitHub",
    description: "Version Control, Commands",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "/interview-qa/git",
    color: "from-neutral-700 to-neutral-900",
    bgColor: "bg-neutral-50 dark:bg-neutral-900/10",
  },
  {
    label: "Redis",
    description: "Caching, Data Structures",
    questions: "20+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    link: "/interview-qa/redis",
    color: "from-red-500 to-red-700",
    bgColor: "bg-red-50 dark:bg-red-900/10",
  },
  {
    label: "C++",
    description: "OOP, Pointers, STL",
    questions: "35+",
    src: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    link: "/interview-qa/cpp-lang",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    label: "C#",
    description: ".NET, LINQ, Async",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    link: "/interview-qa/csharp",
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
  },
  {
    label: "Express.js",
    description: "Middleware, Routing, APIs",
    questions: "25+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    link: "/interview-qa/express",
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50 dark:bg-gray-900/10",
  },
  {
    label: "MongoDB",
    description: "NoSQL, Aggregation, Indexes",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/528/528260.png",
    link: "/interview-qa/mongodb",
    color: "from-green-600 to-green-800",
    bgColor: "bg-green-50 dark:bg-green-900/10",
  },
  {
    label: "PostgreSQL",
    description: "SQL, Joins, Performance",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    link: "/interview-qa/postgresql",
    color: "from-blue-500 to-indigo-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    label: "GraphQL",
    description: "Queries, Mutations, Schema",
    questions: "25+",
    src: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    link: "/interview-qa/graphql",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/10",
  },
  {
    label: "Flutter",
    description: "Dart, Widgets, State",
    questions: "30+",
    src: "https://cdn-icons-png.flaticon.com/512/919/919835.png",
    link: "/interview-qa/flutter",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/10",
  },
  {
    label: "React Native",
    description: "Mobile, Components, Navigation",
    questions: "25+",
    src: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    link: "/interview-qa/react-native",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
];

interface InterviewCardProps {
  limit?: number;
  showSeeMore?: boolean;
}

const InterviewCard = ({ limit, showSeeMore = false }: InterviewCardProps) => {
  const displayedItems = limit ? imageLinksInterview.slice(0, limit) : imageLinksInterview;
  
  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedItems.map((item, index) => (
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
      {showSeeMore && limit && imageLinksInterview.length > limit && (
        <div className="text-center mt-8">
          <Link
            href="/interview-qa"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
          >
            See More Interview Topics
            <svg
              className="w-5 h-5 ml-2"
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
          </Link>
        </div>
      )}
    </div>
  );
};

export default InterviewCard;
