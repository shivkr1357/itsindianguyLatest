import InterviewCard from "@/components/InterviewCards/InterviewCard";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
   title: `InterviewQA |  ItsIndianGuy`,
   description:
      "Explore interview questions in various programming languages such as JavaScript, Python, C++ and more. Enhance your preparation with comprehensive language-specific content.",
   alternates: {
      canonical: "https://itsindianguy.in/interview-qa",
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
