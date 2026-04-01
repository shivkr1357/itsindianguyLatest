import Link from "next/link";
import Image from "next/image";
import StickyShareButton from "@/components/Blog/StickyShareButton";
import BlogAuthorSection from "@/components/Blog/BlogAuthorSection";
import BlogShareSection from "@/components/Blog/BlogShareSection";
import AdUnit from "@/components/AdSense/AdUnit";
import type { CmsBlogPost } from "@/lib/blogCms";

function formatDate(iso?: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function articleSchema(post: CmsBlogPost, slug: string) {
  const date =
    post.publishedAt ||
    post.updatedAt ||
    post.createdAt ||
    new Date().toISOString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: date,
    dateModified: post.updatedAt || date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.itsindianguy.in/about",
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
    articleSection: post.articleSection || post.category,
    keywords: (post.keywords || []).join(", "),
  };
}

export default function CmsBlogPost({
  post,
  slug,
}: {
  post: CmsBlogPost;
  slug: string;
}) {
  const canonical =
    post.canonicalUrl || `https://www.itsindianguy.in/blog/${slug}`;

  return (
    <>
      <StickyShareButton
        title={post.metaTitle || post.title}
        url={`/blog/${slug}`}
        description={post.description}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(post, slug)),
        }}
      />
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-green-50/20 to-teal-50/10 dark:from-neutral-900 dark:via-green-950/10 dark:to-teal-950/5">
        <section className="relative bg-gradient-to-b from-white to-green-50/20 dark:from-neutral-800 dark:to-green-950/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500" />
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                Back to Blog
              </Link>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="px-2 py-0.5 rounded-full bg-green-500/15 text-green-700 dark:text-green-300 capitalize">
                  {post.category.replace(/-/g, " ")}
                </span>
                <span aria-hidden>•</span>
                <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                <span aria-hidden>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100">
                {post.title}
              </h1>
              <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
                {post.description}
              </p>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                <a href={canonical} className="hover:underline">
                  {canonical}
                </a>
              </p>
              <div className="mt-6 flex items-center gap-3">
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
              <div className="relative mt-8 h-64 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <BlogAuthorSection
                author={post.author}
                readTime={post.readTime}
                date={
                  post.publishedAt
                    ? post.publishedAt.slice(0, 10)
                    : new Date().toISOString().slice(0, 10)
                }
              />

              <div className="my-8">
                <AdUnit adSlot="1234567890" adFormat="auto" />
              </div>

              <article
                className="cms-html max-w-none
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
                  [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
                  [&_p]:text-neutral-700 [&_p]:dark:text-neutral-300 [&_p]:leading-relaxed [&_p]:mb-4
                  [&_a]:text-green-600 [&_a]:dark:text-green-400 [&_a]:underline
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
                  [&_blockquote]:border-l-4 [&_blockquote]:border-green-500 [&_blockquote]:pl-4 [&_blockquote]:italic
                  [&_pre]:bg-neutral-900 [&_pre]:text-neutral-100 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto
                  [&_code]:text-sm [&_img]:rounded-xl [&_img]:max-w-full"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              <div className="my-8">
                <AdUnit adSlot="1234567891" adFormat="auto" />
              </div>

              <BlogShareSection
                title={post.title}
                slug={slug}
                description={post.description}
                readTime={post.readTime}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
