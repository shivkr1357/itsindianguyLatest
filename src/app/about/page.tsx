import AboutComponent from "@/components/About/AboutComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `About ItsIndianGuy - Your Trusted Programming Tutorial Platform in India`,
  description:
    "Meet ItsIndianGuy - Your guide to mastering programming. Learn Next.js, React, TypeScript & full-stack development with free tutorials, real-world projects, and step-by-step guides. Best programming education platform in India.",
  keywords:
    "about ItsIndianGuy, ItsIndianGuy programming, who is ItsIndianGuy, ItsIndianGuy developer, programming tutorial platform India, ItsIndianGuy mission, learn programming ItsIndianGuy, ItsIndianGuy about page, programming educator India, ItsIndianGuy story",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/about",
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
    title:
      "About ItsIndianGuy - Programming Tutorial Platform India",
    description:
      "Meet ItsIndianGuy, your trusted guide to learning programming in India. Free Next.js, React & full-stack development tutorials with real-world projects.",
    url: "https://www.itsindianguy.in/about",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About ItsIndianGuy - Programming Tutorials, Web Development Guides & Tech Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About ItsIndianGuy - Programming Tutorials Platform",
    description:
      "Meet ItsIndianGuy - Learn programming with free Next.js, React & full-stack tutorials. Best programming education in India.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-about.jpg"],
  },
};

const About = () => {
  return (
    <Fragment>
      <AboutComponent />
    </Fragment>
  );
};

export default About;
