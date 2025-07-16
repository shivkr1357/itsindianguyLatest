import InterviewCard from "@/components/InterviewCards/InterviewCard";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `InterviewQA: Master Programming Interviews | ItsIndianGuy`,
  description:
    "Explore interview questions in JavaScript, Python, C++, and more. Enhance your prep with comprehensive language-specific content.",
  alternates: {
    canonical: "https://www.itsindianguy.in/interview-qa",
  },
  openGraph: {
    title: "InterviewQA: Master Programming Interviews | ItsIndianGuy",
    description:
      "Explore interview questions in JavaScript, Python, C++, and more. Enhance your prep with comprehensive language-specific content.",
    url: "https://www.itsindianguy.in/interview-qa",
    siteName: "ItsIndianGuy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-interview.jpg",
        width: 1200,
        height: 630,
        alt: "Programming Interview Questions - ItsIndianGuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InterviewQA: Master Programming Interviews | ItsIndianGuy",
    description:
      "Explore interview questions in JavaScript, Python, C++, and more. Enhance your prep with comprehensive language-specific content.",
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
