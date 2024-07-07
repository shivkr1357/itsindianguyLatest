import AboutComponent from "@/components/About/AboutComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
   title: `ContactUS |  ItsIndianGuy`,
   description:
      "Explore interview questions in various programming languages such as JavaScript, Python, C++ and more. Enhance your preparation with comprehensive language-specific content.",
   alternates: {
      canonical: "https://itsindianguy.in/about",
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
