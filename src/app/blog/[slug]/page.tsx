import type { Metadata, ResolvingMetadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogPostContent from "@/components/Blog/BlogPostContent";
import BlogAuthorSection from "@/components/Blog/BlogAuthorSection";
import BlogShareSection from "@/components/Blog/BlogShareSection";
import { getBlogPost } from "@/lib/blogContent";
import AdUnit from "@/components/AdSense/AdUnit";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // Fetch blog post data
  const post = getBlogPost(slug) || {
    title: "Blog Post",
    description:
      "Read our latest blog post on programming and web development.",
    author: "ItsIndianGuy",
    date: "2024-01-15",
    readTime: "8 min read",
  };

  // Enhanced keywords for better SEO
  const keywords = `${post.title}, ItsIndianGuy blog, ${slug.replace(/-/g, ' ')}, programming tutorial, web development guide, coding tutorial by ItsIndianGuy, ${post.author} tutorial, learn programming India`;

  return {
    title: `${post.title} | ItsIndianGuy Blog - ${post.readTime}`,
    description: `${post.description} | Step-by-step tutorial by ItsIndianGuy. ${post.readTime} | Learn programming with real-world examples.`,
    keywords: keywords,
    authors: [{ name: post.author, url: "https://www.itsindianguy.in/about" }],
    creator: post.author,
    publisher: "ItsIndianGuy",
    alternates: {
      canonical: `https://www.itsindianguy.in/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${post.title} | ItsIndianGuy Tutorial`,
      description: `${post.description} | Complete guide by ItsIndianGuy`,
      url: `https://www.itsindianguy.in/blog/${slug}`,
      siteName: "ItsIndianGuy - Programming Tutorials & Tech Blog",
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || "https://www.itsindianguy.in/og-blog.jpg",
          width: 1200,
          height: 630,
          alt: `${post.title} - ItsIndianGuy Tutorial`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ItsIndianGuy`,
      description: `${post.description} | ${post.readTime}`,
      creator: "@itsindianguy",
      site: "@itsindianguy",
      images: [post.image || "https://www.itsindianguy.in/og-blog.jpg"],
    },
  };
}

const BlogPost = ({ params }: Props) => {
  const { slug } = params;

  // Fetch blog post data based on slug
  const post = getBlogPost(slug) || {
    title: "Blog Post Not Found",
    description: "The requested blog post could not be found.",
    author: "ItsIndianGuy",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
    slug: slug,
  };

  // Calculate word count for article schema (approximate)
  const wordCount = Math.ceil(parseInt(post.readTime) * 200);

  // Structured Data for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.itsindianguy.in/about",
      sameAs: [
        "https://github.com/itsindianguy",
        "https://twitter.com/itsindianguy",
        "https://linkedin.com/in/itsindianguy",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "ItsIndianGuy",
      url: "https://www.itsindianguy.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.itsindianguy.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.itsindianguy.in/blog/${slug}`,
    },
    wordCount: wordCount,
    articleSection: "Programming Tutorials",
    inLanguage: "en-IN",
    keywords: `${post.title}, ItsIndianGuy, programming tutorial, ${slug.replace(/-/g, ', ')}`,
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.itsindianguy.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.itsindianguy.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.itsindianguy.in/blog/${slug}`,
      },
    ],
  };

  // FAQ Schema (if applicable)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${post.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: post.description,
        },
      },
      {
        "@type": "Question",
        name: `Who wrote this ${post.title} tutorial?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `This tutorial was written by ${post.author}, an experienced developer sharing programming knowledge on ItsIndianGuy.in`,
        },
      },
    ],
  };

  return (
    <Fragment>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-green-50/20 to-teal-50/10 dark:from-neutral-900 dark:via-green-950/10 dark:to-teal-950/5">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-green-50/20 dark:from-neutral-800 dark:to-green-950/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500" />

          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors mb-8 group"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                    {post.readTime}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {post.description}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                      {post.author}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Author
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Author Section */}
              <BlogAuthorSection
                author={post.author}
                readTime={post.readTime}
                date={post.date}
              />

              {/* Ad Unit - Top of Article */}
              <div className="my-8">
                <AdUnit adSlot="1234567890" adFormat="auto" />
              </div>

              {/* Blog Content */}
              <BlogPostContent slug={slug} />

              {/* Ad Unit - Middle of Content */}
              <div className="my-8">
                <AdUnit adSlot="1234567891" adFormat="auto" />
              </div>

              {/* Share Section */}
              <BlogShareSection title={post.title} slug={slug} />

              {/* Newsletter CTA */}
              <div className="p-8 md:p-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl shadow-2xl text-white text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-4xl">📬</span>
                  <h3 className="text-3xl font-bold">
                    Want More Content Like This?
                  </h3>
                </div>
                <p className="text-lg text-green-50 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get the latest programming
                  tutorials, tips, and insights delivered to your inbox.
                </p>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 hover:bg-green-50 rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                >
                  Subscribe Now
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default BlogPost;
