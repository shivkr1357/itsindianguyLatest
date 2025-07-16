import AboutComponent from "@/components/About/AboutComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `About ItsIndianGuy - Programming Tutorials, Web Development Guides & Tech Learning Platform`,
  description:
    "Learn about ItsIndianGuy, your trusted platform for programming tutorials, web development guides, and tech education. Discover our mission to help developers master JavaScript, React, Node.js, and modern web technologies.",
  keywords:
    "ItsIndianGuy, programming tutorials, web development guides, tech education, JavaScript tutorials, React tutorials, Node.js tutorials, programming courses, coding tutorials, software development, ItsIndianGuy about",
  alternates: {
    canonical: "https://www.itsindianguy.in/about",
  },
  openGraph: {
    title:
      "About ItsIndianGuy - Programming Tutorials, Web Development Guides & Tech Learning Platform",
    description:
      "Learn about ItsIndianGuy, your trusted platform for programming tutorials, web development guides, and tech education. Discover our mission to help developers master JavaScript, React, Node.js, and modern web technologies through comprehensive learning resources.",
    url: "https://www.itsindianguy.in/about",
    siteName: "ItsIndianGuy",
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
      "About ItsIndianGuy - Programming Tutorials, Web Development Guides & Tech Learning Platform",
    description:
      "Learn about ItsIndianGuy, your trusted platform for programming tutorials, web development guides, and tech education. Discover our mission to help developers master modern web technologies.",
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
