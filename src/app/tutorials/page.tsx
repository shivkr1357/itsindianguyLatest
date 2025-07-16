import { Metadata } from "next";
import React, { Fragment } from "react";
import TutorialsClient from "@/components/Tutorials/TutorialsClient";

export const metadata: Metadata = {
  title: `Tutorials | ItsIndianGuy - Learn Web Development`,
  description:
    "Master new skills with our comprehensive tutorials. From beginner to advanced, we have something for every developer.",
  alternates: {
    canonical: "https://itsindianguy.in/tutorials",
  },
};

// Sample tutorials data - in a real app, this would come from a CMS or database
const sampleTutorials = [
  {
    id: "1",
    title: "Build a Full-Stack App with Next.js",
    category: "Web Development",
    level: "Intermediate",
    duration: "45 min",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    slug: "fullstack-nextjs",
    description:
      "Learn to build a complete full-stack application using Next.js, TypeScript, and modern web technologies.",
  },
  {
    id: "2",
    title: "Master TypeScript Generics",
    category: "TypeScript",
    level: "Advanced",
    duration: "30 min",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    slug: "typescript-generics",
    description:
      "Deep dive into TypeScript generics and learn how to write more flexible and reusable code.",
  },
  {
    id: "3",
    title: "React Performance Optimization",
    category: "React",
    level: "Advanced",
    duration: "40 min",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    slug: "react-performance",
    description:
      "Essential techniques to optimize your React applications for better performance and user experience.",
  },
  {
    id: "4",
    title: "Node.js API Development",
    category: "Backend",
    level: "Intermediate",
    duration: "60 min",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    slug: "nodejs-api",
    description:
      "Build scalable REST APIs using Node.js, Express, and MongoDB with best practices.",
  },
  {
    id: "5",
    title: "Docker for Developers",
    category: "DevOps",
    level: "Beginner",
    duration: "35 min",
    image: "https://cdn-icons-png.flaticon.com/512/9433/9433667.png",
    slug: "docker-developers",
    description:
      "Learn Docker basics and containerize your applications for easier deployment and scaling.",
  },
  {
    id: "6",
    title: "Machine Learning Basics",
    category: "AI/ML",
    level: "Beginner",
    duration: "50 min",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    slug: "ml-basics",
    description:
      "Start your journey into machine learning with practical examples and real-world applications.",
  },
];

const categories = [
  "All",
  "Web Development",
  "TypeScript",
  "React",
  "Backend",
  "DevOps",
  "AI/ML",
];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Tutorials = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="bg-white dark:bg-neutral-800 shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Tutorials
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Master new skills with our comprehensive tutorials. From
                beginner to advanced, we have something for every developer.
              </p>
            </div>
          </div>
        </div>

        {/* Search, Filters and Tutorials Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <TutorialsClient
              tutorials={sampleTutorials}
              categories={categories}
              levels={levels}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Tutorials;
