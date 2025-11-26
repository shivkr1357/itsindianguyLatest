import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
   {
      title: "Hot Tech Trends 2025: What Every Developer Should Know",
      excerpt: "Discover the hottest technology trends shaping 2025 - from AI breakthroughs to quantum computing, Web3 innovations, and the future of software development.",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      date: "Dec 20, 2024",
      readTime: "15 min read",
      link: "/blog/hot-tech-trends-2025"
   },
   {
      title: "Technology and AI: Transforming Our Everyday Lives",
      excerpt: "Discover how artificial intelligence and modern technology are seamlessly integrated into our daily routines, making life easier and smarter.",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      date: "Nov 23, 2025",
      readTime: "12 min read",
      link: "/blog/ai-technology-everyday-life"
   },
   {
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with Next.js 14's latest features",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      link: "/blog/nextjs-14"
   },
   {
      title: "React Server Components Explained",
      excerpt: "Deep dive into React Server Components and their benefits",
      image: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      link: "/blog/server-components"
   },
   {
      title: "TypeScript Best Practices",
      excerpt: "Essential TypeScript patterns and practices for better code",
      image: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      link: "/blog/typescript-practices"
   },
   {
      title: "Modern CSS Techniques",
      excerpt: "Exploring the latest CSS features and best practices",
      image: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      link: "/blog/modern-css"
   },
   {
      title: "Node.js Performance Tips",
      excerpt: "Optimize your Node.js applications for better performance",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      date: "Dec 1, 2024",
      readTime: "10 min read",
      link: "/blog/nodejs-performance"
   },
   {
      title: "GraphQL vs REST API",
      excerpt: "Comparing GraphQL and REST for modern APIs",
      image: "https://cdn-icons-png.flaticon.com/512/8297/8297437.png",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      link: "/blog/graphql-vs-rest"
   }
];

const FeaturedBlogs = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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