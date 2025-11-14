import React, { Fragment } from "react";
import { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title:
    "ItsIndianGuy - Learn Programming, Next.js, React & Full-Stack Development | Free Tutorials",
  description:
    "Learn programming with ItsIndianGuy. Free tutorials on Next.js, React, TypeScript, Node.js, and full-stack development. Step-by-step guides, code examples, and real-world projects. Best programming tutorials in India.",
  keywords:
    "ItsIndianGuy programming, ItsIndianGuy tutorials, Next.js tutorial India, React tutorial ItsIndianGuy, TypeScript tutorial, full-stack development India, programming tutorials India, learn coding ItsIndianGuy, web development tutorial, Node.js tutorial, free programming courses India, coding tutorial ItsIndianGuy, ItsIndianGuy blog, programming interview questions, best programming tutorials",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ItsIndianGuy - Learn Next.js, React & Full-Stack Development",
    description:
      "Free programming tutorials by ItsIndianGuy. Learn Next.js, React, TypeScript & full-stack development with step-by-step guides and real-world projects.",
    url: "https://www.itsindianguy.in",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ItsIndianGuy - Programming Tutorials & Interview Preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ItsIndianGuy - Free Programming Tutorials",
    description:
      "Learn Next.js, React, TypeScript & full-stack development. Free tutorials with code examples by ItsIndianGuy.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-image.jpg"],
  },
};

const Home = () => {
  // Schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ItsIndianGuy - Programming Tutorials India",
    alternateName: "ItsIndianGuy",
    description:
      "Free programming tutorials on Next.js, React, TypeScript, and full-stack development by ItsIndianGuy. Learn coding with step-by-step guides and real-world projects.",
    url: "https://www.itsindianguy.in",
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.itsindianguy.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    author: {
      "@type": "Person",
      name: "ItsIndianGuy",
      url: "https://www.itsindianguy.in/about",
      jobTitle: "Full-Stack Developer & Programming Instructor",
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
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "contact@itsindianguy.in",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Programming Tutorials and Resources",
      description:
        "Comprehensive collection of programming tutorials, interview questions, and tech resources",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Web Development Tutorials",
          url: "https://www.itsindianguy.in/web-development",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mobile Development Tutorials",
          url: "https://www.itsindianguy.in/mobile-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Interview Questions",
          url: "https://www.itsindianguy.in/interview-qa",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Programming Blog",
          url: "https://www.itsindianguy.in/blog",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Tech Resources",
          url: "https://www.itsindianguy.in/resources",
        },
      ],
    },
  };

  return (
    <Fragment>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HomePageClient />
    </Fragment>
  );
};

export default Home;
