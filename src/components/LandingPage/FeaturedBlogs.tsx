import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "Next.js 15: What's New and How to Upgrade",
    excerpt:
      "Dive into Next.js 15's latest features including improved Server Components, enhanced caching strategies, and new developer experience improvements. Learn how to upgrade your existing Next.js applications.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    date: "Dec 10, 2025",
    readTime: "18 min read",
    link: "/blog/nextjs-15-whats-new-upgrade-guide",
  },
  {
    title: "React 19 Features: Complete Guide to the Latest Updates",
    excerpt:
      "Explore React 19's groundbreaking features including Actions, Server Components, new hooks, and improved performance. Complete guide with examples and migration tips for React developers in 2025.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    date: "Dec 9, 2025",
    readTime: "20 min read",
    link: "/blog/react-19-features-complete-guide-2025",
  },
  {
    title: "Building AI-Powered Web Applications: Complete Guide 2025",
    excerpt:
      "Learn how to build AI-powered web applications from scratch. Complete guide covering OpenAI API integration, AI features, best practices, and real-world examples for Next.js, React, and modern web development.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103632.png",
    date: "Dec 8, 2025",
    readTime: "22 min read",
    link: "/blog/building-ai-powered-web-applications-2025",
  },
  {
    title: "AI-Assisted Development: Revolutionizing Coding in 2025",
    excerpt:
      "Discover how AI-powered coding assistants like GitHub Copilot, ChatGPT, and Gemini are transforming software development, boosting productivity, and reshaping the future of programming.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103771.png",
    date: "Dec 5, 2025",
    readTime: "16 min read",
    link: "/blog/ai-assisted-development-2025",
  },
  {
    title: "Hot Tech Trends 2025: What Every Developer Should Know",
    excerpt:
      "Discover the hottest technology trends shaping 2025 - from AI breakthroughs to quantum computing, Web3 innovations, and the future of software development.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    date: "Nov 27, 2025",
    readTime: "15 min read",
    link: "/blog/hot-tech-trends-2025",
  },
  {
    title:
      "How ChatGPT Actually Helps Developers: Real Stories and Practical Tips",
    excerpt:
      "Real experiences from developers using ChatGPT in their daily workflow. Learn practical tips and discover how AI assistants are changing the way we code.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103771.png",
    date: "Dec 6, 2025",
    readTime: "14 min read",
    link: "/blog/chatgpt-helping-developers-real-experiences",
  },
  {
    title: "Technology and AI: Transforming Our Everyday Lives",
    excerpt:
      "Discover how artificial intelligence and modern technology are seamlessly integrated into our daily routines, making life easier, smarter, and more connected than ever before.",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
    date: "Nov 23, 2025",
    readTime: "12 min read",
    link: "/blog/ai-technology-everyday-life",
  },
];

const FeaturedBlogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {blogPosts.map((post, index) => (
        <Link
          href={post.link}
          key={index}
          className="group h-full flex flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          <div className="relative h-48 bg-white dark:bg-neutral-700">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100 group-hover:text-primary-200 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
              {post.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedBlogs;
