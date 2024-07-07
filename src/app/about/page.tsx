import AboutComponent from "@/components/About/AboutComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `About ItsIndianGuy - Your Go-To Resource for Tech Guides and Tutorials`,
  description:
    "Discover ItsIndianGuy, your ultimate resource for tech guides, tutorials, and updates in web and mobile development. Learn about our mission, vision, and the team driving our content.",
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
