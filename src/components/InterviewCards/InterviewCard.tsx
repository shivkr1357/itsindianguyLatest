"use client";
import { useThemeState } from "@/context/ThemeContext";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const imageLinksInterview = [
  {
    label: "JavaScript",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    link: "/interview-qa/javascript",
  },
  {
    label: "React",
    src: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    link: "/interview-qa/react",
  },
  {
    label: "Node.js",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    link: "/interview-qa/node",
  },
  {
    label: "System Design",
    src: "https://cdn-icons-png.flaticon.com/512/2059/2059309.png",
    link: "/interview-qa/cpp",
  },
  {
    label: "Python",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    link: "/interview-qa/python",
  },
  {
    label: "Data Structures",
    src: "https://cdn-icons-png.flaticon.com/512/2942/2942789.png",
    link: "/interview-qa/dsa-interview",
  },
  {
    label: "Database",
    src: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    link: "/interview-qa/database-interview",
  },
  {
    label: "Machine Learning",
    src: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    link: "/interview-qa/ml-interview",
  }
];

const InterviewCard = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-neutral-800 dark:text-neutral-100">
        Interview Questions
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {imageLinksInterview.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="group block bg-white dark:bg-neutral-800 rounded-lg shadow-sm overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-square relative p-2 h-[80px] sm:h-[100px]">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="p-2 bg-neutral-50 dark:bg-neutral-700">
              <h3 className="text-center text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-100">
                {item.label}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InterviewCard;
