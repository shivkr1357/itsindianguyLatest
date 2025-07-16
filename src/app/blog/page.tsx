import { Metadata } from "next";
import React, { Fragment } from "react";
import BlogListClient from "@/components/Blog/BlogListClient";

export const metadata: Metadata = {
  title: `Blog | ItsIndianGuy - Tech Insights, Tutorials & Updates`,
  description:
    "Explore our latest blog posts covering web development, mobile apps, AI/ML, and tech trends. Stay updated with tutorials, insights, and industry news.",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog",
  },
  openGraph: {
    title: "Blog | ItsIndianGuy - Tech Insights, Tutorials & Updates",
    description:
      "Explore our latest blog posts covering web development, mobile apps, AI/ML, and tech trends. Stay updated with tutorials, insights, and industry news.",
    url: "https://www.itsindianguy.in/blog",
    siteName: "ItsIndianGuy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog - Tech Insights and Tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | ItsIndianGuy - Tech Insights, Tutorials & Updates",
    description:
      "Explore our latest blog posts covering web development, mobile apps, AI/ML, and tech trends.",
    images: ["https://www.itsindianguy.in/og-blog.jpg"],
  },
};

// Sample blog posts data - in a real app, this would come from a CMS or database
const samplePosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    description:
      "Learn the fundamentals of Next.js 14 and build your first application with the latest features and improvements.",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    author: "ItsIndianGuy",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "getting-started-with-nextjs-14",
  },
  {
    id: "2",
    title: "Mastering TypeScript Generics",
    description:
      "Deep dive into TypeScript generics and learn how to write more flexible and reusable code.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    author: "ItsIndianGuy",
    date: "2024-01-10",
    readTime: "12 min read",
    slug: "mastering-typescript-generics",
  },
  {
    id: "3",
    title: "React Performance Optimization Tips",
    description:
      "Essential techniques to optimize your React applications for better performance and user experience.",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    author: "ItsIndianGuy",
    date: "2024-01-05",
    readTime: "10 min read",
    slug: "react-performance-optimization-tips",
  },
  {
    id: "4",
    title: "Building REST APIs with Node.js",
    description:
      "Complete guide to building scalable REST APIs using Node.js, Express, and MongoDB.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    author: "ItsIndianGuy",
    date: "2024-01-01",
    readTime: "15 min read",
    slug: "building-rest-apis-with-nodejs",
  },
  {
    id: "5",
    title: "Introduction to Machine Learning",
    description:
      "Start your journey into machine learning with practical examples and real-world applications.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    author: "ItsIndianGuy",
    date: "2023-12-28",
    readTime: "20 min read",
    slug: "introduction-to-machine-learning",
  },
  {
    id: "6",
    title: "Docker for Beginners",
    description:
      "Learn Docker basics and containerize your applications for easier deployment and scaling.",
    image: "https://cdn-icons-png.flaticon.com/512/9433/9433667.png",
    author: "ItsIndianGuy",
    date: "2023-12-25",
    readTime: "14 min read",
    slug: "docker-for-beginners",
  },
];

const Blog = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="bg-white dark:bg-neutral-800 shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Our Blog
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Discover insights, tutorials, and the latest trends in
                technology. From web development to AI/ML, we&apos;ve got you
                covered.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Blog Posts */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <BlogListClient posts={samplePosts} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
