import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "ChatGPT vs Gemini vs Claude in 2026: Which AI Is Best for You?",
    excerpt:
      "A practical comparison of ChatGPT, Gemini, and Claude for coding, research, writing, and daily productivity in 2026.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103771.png",
    date: "Mar 24, 2026",
    readTime: "14 min read",
    link: "/blog/chatgpt-vs-gemini-vs-claude-2026",
  },
  {
    title: "Google AI Tools in 2026: Complete Productivity Guide",
    excerpt:
      "Explore the most useful Google AI tools and how to use them for faster work, better writing, smarter search, and automation.",
    image: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    date: "Mar 24, 2026",
    readTime: "12 min read",
    link: "/blog/google-ai-tools-productivity-guide-2026",
  },
  {
    title: "Best AI Video Generation Tools in 2026",
    excerpt:
      "Hands-on guide to top AI video tools for creators and developers, with feature comparison, pricing, and best use cases.",
    image: "https://cdn-icons-png.flaticon.com/512/3649/3649587.png",
    date: "Mar 24, 2026",
    readTime: "13 min read",
    link: "/blog/best-ai-video-tools-2026",
  },
  {
    title: "Microsoft AI Strategy and Mustafa Suleyman: What It Means for Developers",
    excerpt:
      "A breakdown of Microsoft's AI direction under Mustafa Suleyman and the impact on AI products, copilots, and developer workflows.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    date: "Mar 24, 2026",
    readTime: "11 min read",
    link: "/blog/microsoft-ai-strategy-mustafa-suleyman",
  },
  {
    title: "Uncensored AI on GitHub: Open-Source Models, Risks, and Safe Usage",
    excerpt:
      "Understand uncensored AI repos on GitHub, how they work, legal/safety concerns, and best practices for responsible experimentation.",
    image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    date: "Mar 24, 2026",
    readTime: "15 min read",
    link: "/blog/uncensored-ai-open-source-github-guide",
  },
  {
    title: "Gemini AI Complete Guide 2026: Features, Use Cases, and Pro Tips",
    excerpt:
      "Everything you need to know about Gemini AI in 2026 with practical prompts, workflows, and real productivity use cases.",
    image: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
    date: "Mar 24, 2026",
    readTime: "12 min read",
    link: "/blog/gemini-ai-complete-guide-2026",
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
