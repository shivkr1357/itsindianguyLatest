import InterviewCard from "@/components/InterviewCards/InterviewCard";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `Programming Interview Questions by ItsIndianGuy - Master Tech Interviews`,
  description:
    "Ace tech interviews with ItsIndianGuy. Practice JavaScript, React, Node.js, Python interview questions with detailed solutions. Data structures, algorithms & system design prep. Best interview preparation for Indian developers.",
  keywords:
    "programming interview questions ItsIndianGuy, JavaScript interview ItsIndianGuy, React interview questions, Node.js interview prep, coding interview ItsIndianGuy, interview preparation India, ItsIndianGuy interview, tech interview questions, coding challenges ItsIndianGuy, algorithm questions",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/interview-qa",
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
      "Programming Interview Prep by ItsIndianGuy",
    description:
      "Ace tech interviews with ItsIndianGuy. JavaScript, React, Node.js interview questions with solutions. Best interview prep for Indian developers.",
    url: "https://www.itsindianguy.in/interview-qa",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-interview.jpg",
        width: 1200,
        height: 630,
        alt: "Programming Interview Questions - JavaScript, Python, React, Node.js Interview Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interview Questions | ItsIndianGuy",
    description:
      "Ace tech interviews with ItsIndianGuy. Practice JavaScript, React, Node.js questions with solutions. Best interview prep.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-interview.jpg"],
  },
};

const InterviewQA = () => {
  return (
    <Fragment>
      <InterviewCard />
    </Fragment>
  );
};

export default InterviewQA;
