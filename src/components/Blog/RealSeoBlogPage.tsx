import Link from "next/link";
import StickyShareButton from "@/components/Blog/StickyShareButton";

interface RealSeoBlogPageProps {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  children: React.ReactNode;
}

const RealSeoBlogPage = ({
  slug,
  title,
  description,
  author,
  date,
  readTime,
  image,
  children,
}: RealSeoBlogPageProps) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author,
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
  };

  return (
    <>
      <StickyShareButton title={title} url={`/blog/${slug}`} description={description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-green-50/20 to-teal-50/10 dark:from-neutral-900 dark:via-green-950/10 dark:to-teal-950/5">
        <section className="relative bg-gradient-to-b from-white to-green-50/20 dark:from-neutral-800 dark:to-green-950/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500" />
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="text-green-600 dark:text-green-400 hover:underline">
                Back to Blog
              </Link>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100">
                {title}
              </h1>
              <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
                {description}
              </p>
              <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                {author} • {new Date(date).toLocaleDateString("en-US")} • {readTime}
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">{children}</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RealSeoBlogPage;
