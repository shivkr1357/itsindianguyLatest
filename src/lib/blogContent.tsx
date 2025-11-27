export interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: { [key: string]: BlogPost } = {
  "hot-tech-trends-2025": {
    title: "Hot Tech Trends 2025: What Every Developer Should Know",
    description:
      "Discover the hottest technology trends shaping 2025 - from AI breakthroughs to quantum computing, Web3 innovations, and the future of software development.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    author: "Shiv Shankar Prasad",
    date: "2025-11-26",
    readTime: "15 min read",
    slug: "hot-tech-trends-2025",
  },
  "ai-technology-everyday-life": {
    title: "Technology and AI: Transforming Our Everyday Lives",
    description:
      "Discover how artificial intelligence and modern technology are seamlessly integrated into our daily routines, making life easier, smarter, and more connected than ever before.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    author: "Shiv Shankar Prasad",
    date: "2025-11-23",
    readTime: "12 min read",
    slug: "ai-technology-everyday-life",
  },
  "getting-started-with-nextjs-14": {
    title: "Getting Started with Next.js 14",
    description:
      "Learn the fundamentals of Next.js 14 and build your first application with the latest features and improvements.",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    author: "Shiv Shankar Prasad",
    date: "2024-12-15",
    readTime: "8 min read",
    slug: "getting-started-with-nextjs-14",
  },
  "mastering-typescript-generics": {
    title: "Mastering TypeScript Generics",
    description:
      "Deep dive into TypeScript generics and learn how to write more flexible and reusable code.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    author: "Shiv Shankar Prasad",
    date: "2024-12-12",
    readTime: "12 min read",
    slug: "mastering-typescript-generics",
  },
  "react-performance-optimization-tips": {
    title: "React Performance Optimization Tips",
    description:
      "Essential techniques to optimize your React applications for better performance and user experience.",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    author: "Shiv Shankar Prasad",
    date: "2024-12-08",
    readTime: "10 min read",
    slug: "react-performance-optimization-tips",
  },
  "building-rest-apis-with-nodejs": {
    title: "Building REST APIs with Node.js",
    description:
      "Complete guide to building scalable REST APIs using Node.js, Express, and MongoDB.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    author: "Shiv Shankar Prasad",
    date: "2024-12-05",
    readTime: "15 min read",
    slug: "building-rest-apis-with-nodejs",
  },
  "introduction-to-machine-learning": {
    title: "Introduction to Machine Learning",
    description:
      "Start your journey into machine learning with practical examples and real-world applications.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    author: "Shiv Shankar Prasad",
    date: "2024-12-01",
    readTime: "20 min read",
    slug: "introduction-to-machine-learning",
  },
  "docker-for-beginners": {
    title: "Docker for Beginners",
    description:
      "Learn Docker basics and containerize your applications for easier deployment and scaling.",
    image: "https://cdn-icons-png.flaticon.com/512/9433/9433667.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-28",
    readTime: "14 min read",
    slug: "docker-for-beginners",
  },
  "graphql-vs-rest": {
    title: "GraphQL vs REST: Which Should You Choose?",
    description:
      "A comprehensive comparison of GraphQL and REST APIs to help you make the right choice for your project.",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-25",
    readTime: "16 min read",
    slug: "graphql-vs-rest",
  },
  "nodejs-performance": {
    title: "Node.js Performance Optimization",
    description:
      "Advanced techniques to optimize your Node.js applications for maximum performance and scalability.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-22",
    readTime: "18 min read",
    slug: "nodejs-performance",
  },
  "modern-css": {
    title: "Modern CSS Techniques in 2024",
    description:
      "Explore the latest CSS features including Grid, Flexbox, Container Queries, and CSS Variables.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-20",
    readTime: "15 min read",
    slug: "modern-css",
  },
  "typescript-practices": {
    title: "TypeScript Best Practices",
    description:
      "Write better TypeScript code with these proven best practices and design patterns.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-18",
    readTime: "17 min read",
    slug: "typescript-practices",
  },
  "server-components": {
    title: "Understanding React Server Components",
    description:
      "Deep dive into React Server Components and how they revolutionize React applications.",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-15",
    readTime: "19 min read",
    slug: "server-components",
  },
  "nextjs-14": {
    title: "What's New in Next.js 14",
    description:
      "Explore the latest features and improvements in Next.js 14 including Turbopack and Server Actions.",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-12",
    readTime: "13 min read",
    slug: "nextjs-14",
  },
  "web-security": {
    title: "Web Security Best Practices",
    description:
      "Essential security practices to protect your web applications from common vulnerabilities.",
    image: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-10",
    readTime: "20 min read",
    slug: "web-security",
  },
  "mongodb-mastery": {
    title: "MongoDB Mastery Guide",
    description:
      "Master MongoDB from basics to advanced topics including aggregation, indexing, and sharding.",
    image: "https://cdn-icons-png.flaticon.com/512/528/528260.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-08",
    readTime: "22 min read",
    slug: "mongodb-mastery",
  },
  "nextjs-15-features": {
    title: "Next.js 15: What's New and Revolutionary",
    description:
      "Explore the groundbreaking features in Next.js 15 including React 19, async request APIs, and enhanced caching strategies.",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    author: "Shiv Shankar Prasad",
    date: "2024-11-05",
    readTime: "16 min read",
    slug: "nextjs-15-features",
  },
  "react-native-expert-guide": {
    title: "React Native Expert Guide: Building Cross-Platform Mobile Apps",
    description:
      "Master React Native development with expert tips, best practices, and advanced techniques for building high-performance mobile applications.",
    image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    author: "Shiv Shankar Prasad",
    date: "2024-12-20",
    readTime: "18 min read",
    slug: "react-native-expert-guide",
  },
  "ai-agents-autonomous-systems-2025": {
    title: "AI Agents and Autonomous Systems: The Future of Intelligent Automation in 2025",
    description:
      "Explore how AI agents and autonomous systems are revolutionizing industries in 2025, from autonomous vehicles to intelligent assistants and self-operating software agents.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    author: "Shiv Shankar Prasad",
    date: "2025-11-27",
    readTime: "17 min read",
    slug: "ai-agents-autonomous-systems-2025",
  },
};

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts[slug] || null;
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}
