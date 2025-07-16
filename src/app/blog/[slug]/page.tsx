import type { Metadata, ResolvingMetadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // This would typically fetch from a CMS or database
  const post = {
    title: "Sample Blog Post",
    description: "This is a sample blog post description.",
    author: "ItsIndianGuy",
    date: "2024-01-15",
    readTime: "8 min read",
  };

  return {
    title: `${post.title} | ItsIndianGuy Blog`,
    description: post.description,
    alternates: {
      canonical: `https://itsindianguy.in/blog/${slug}`,
    },
  };
}

const BlogPost = ({ params }: Props) => {
  const { slug } = params;

  // This would typically fetch from a CMS or database
  const post = {
    title: "Getting Started with Next.js 14",
    description:
      "Learn the fundamentals of Next.js 14 and build your first application with the latest features and improvements.",
    content: `
      <p>Next.js 14 brings exciting new features that make building React applications even more powerful and efficient. In this comprehensive guide, we'll explore the key improvements and how to leverage them in your projects.</p>
      
      <h2>What's New in Next.js 14</h2>
      <p>The latest version introduces several groundbreaking features:</p>
      <ul>
        <li><strong>App Router:</strong> The new app directory provides a more intuitive way to organize your application</li>
        <li><strong>Server Components:</strong> Built-in support for React Server Components</li>
        <li><strong>Improved Performance:</strong> Faster builds and better runtime performance</li>
        <li><strong>Enhanced Developer Experience:</strong> Better error messages and debugging tools</li>
      </ul>
      
      <h2>Setting Up Your First Next.js 14 Project</h2>
      <p>Getting started with Next.js 14 is straightforward. Here's how to create your first project:</p>
      
      <pre><code>npx create-next-app@latest my-app
cd my-app
npm run dev</code></pre>
      
      <p>This will create a new Next.js project with all the latest features enabled by default.</p>
      
      <h2>Understanding the App Router</h2>
      <p>The app router introduces a new file-system based routing approach that's more intuitive than the traditional pages directory. Each folder represents a route segment, and special files like page.tsx define the UI for that route.</p>
      
      <h2>Server Components by Default</h2>
      <p>In Next.js 14, all components in the app directory are Server Components by default. This means they run on the server, reducing the JavaScript bundle size sent to the client and improving performance.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 represents a significant step forward in the React ecosystem. With its improved performance, better developer experience, and powerful new features, it's the perfect choice for building modern web applications.</p>
    `,
    author: "ItsIndianGuy",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
  };

  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="bg-white dark:bg-neutral-800 shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="text-primary-200 hover:text-primary-300 transition-colors"
                >
                  ← Back to Blog
                </Link>
              </div>

              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                  {post.title}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                  {post.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-neutral-800 dark:text-neutral-100"
              />
            </article>

            {/* Share and Navigation */}
            <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    Share this post
                  </h3>
                  <div className="flex gap-4">
                    <button className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors">
                      Twitter
                    </button>
                    <button className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors">
                      LinkedIn
                    </button>
                    <button className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors">
                      Facebook
                    </button>
                  </div>
                </div>

                <Link
                  href="/blog"
                  className="px-6 py-2 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors"
                >
                  View All Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
