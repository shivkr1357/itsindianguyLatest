import InterviewCard from "@/components/InterviewCards/InterviewCard";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `Programming Interview Questions | ItsIndianGuy - JavaScript, Python, React, Node.js Interview Prep`,
  description:
    "Master programming interviews with comprehensive question banks covering JavaScript, Python, React, Node.js, data structures, algorithms, and system design. Practice with detailed explanations and coding challenges.",
  keywords:
    "programming interview questions, JavaScript interview prep, Python interview questions, React interview prep, Node.js interview questions, coding interviews, ItsIndianGuy interview prep, programming interview preparation, ItsIndianGuy interview questions",
  alternates: {
    canonical: "https://www.itsindianguy.in/interview-qa",
  },
  openGraph: {
    title:
      "Programming Interview Questions | ItsIndianGuy - JavaScript, Python, React, Node.js Interview Prep",
    description:
      "Master programming interviews with comprehensive question banks covering JavaScript, Python, React, Node.js, data structures, algorithms, and system design. Practice with detailed explanations and coding challenges for top tech companies.",
    url: "https://www.itsindianguy.in/interview-qa",
    siteName: "ItsIndianGuy",
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
      "Programming Interview Questions | ItsIndianGuy - JavaScript, Python, React, Node.js Interview Prep",
    description:
      "Master programming interviews with comprehensive question banks covering JavaScript, Python, React, Node.js, data structures, algorithms, and system design. Practice with detailed explanations and coding challenges.",
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
