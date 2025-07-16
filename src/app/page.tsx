import React, { Fragment } from "react";
import { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title:
    "ItsIndianGuy - Programming Tutorials, Interview Prep & Tech Resources",
  description:
    "Master programming with comprehensive tutorials, interview questions, and tech resources. Learn web development, mobile apps, AI/ML, and more with ItsIndianGuy.",
  keywords:
    "programming tutorials, interview questions, web development, coding, software development, tech resources, programming courses, coding interview prep, JavaScript, React, Python, Node.js, mobile development, AI/ML, blockchain, cybersecurity",
  alternates: {
    canonical: "https://www.itsindianguy.in",
  },
  openGraph: {
    title: "ItsIndianGuy - Programming Tutorials & Interview Preparation",
    description:
      "Master programming with comprehensive tutorials, interview questions, and tech resources. Learn web development, mobile apps, AI/ML, and more.",
    url: "https://www.itsindianguy.in",
    siteName: "ItsIndianGuy",
    locale: "en_US",
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
    title: "ItsIndianGuy - Programming Tutorials & Interview Preparation",
    description:
      "Master programming with comprehensive tutorials, interview questions, and tech resources.",
    images: ["https://www.itsindianguy.in/og-image.jpg"],
  },
};

const Home = () => {
  // Schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ItsIndianGuy",
    description:
      "Your one-stop destination for programming tutorials and interview preparation",
    url: "https://www.itsindianguy.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.itsindianguy.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
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
