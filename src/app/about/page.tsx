import AboutComponent from "@/components/About/AboutComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `About ItsIndianGuy - Your Go-To Resource for Tech Guides and Tutorials`,
  description:
    "Discover ItsIndianGuy, your ultimate resource for tech guides, tutorials, and updates in web and mobile development. Learn about our mission, vision, and the team driving our content.",
  alternates: {
    canonical: "https://www.itsindianguy.in/about",
  },
  openGraph: {
    title:
      "About ItsIndianGuy - Your Go-To Resource for Tech Guides and Tutorials",
    description:
      "Discover ItsIndianGuy, your ultimate resource for tech guides, tutorials, and updates in web and mobile development. Learn about our mission, vision, and the team driving our content.",
    url: "https://www.itsindianguy.in/about",
    siteName: "ItsIndianGuy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About ItsIndianGuy - Tech Guides and Tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About ItsIndianGuy - Your Go-To Resource for Tech Guides and Tutorials",
    description:
      "Discover ItsIndianGuy, your ultimate resource for tech guides, tutorials, and updates in web and mobile development.",
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
