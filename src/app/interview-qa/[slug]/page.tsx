import React, { Fragment } from "react";
import InterviewQAComponent from "@/components/InterviewQA/InterviewQAComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: `InterviewQA |  ItsIndianGuy`,
   description:
      "Explore interview questions in various programming languages such as JavaScript, Python, C++ and more. Enhance your preparation with comprehensive language-specific content.",
   alternates: {
      canonical: "https://itsindianguy.in/interview-qa",
   },
};
const InterviewQAChild = () => {
   return (
      <Fragment>
         <InterviewQAComponent />
      </Fragment>
   );
};

export default InterviewQAChild;
