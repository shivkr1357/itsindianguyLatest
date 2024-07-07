import MemeComponent from "@/components/MemeComponent/MemeComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `ItsIndianGuy: Funniest & Viral Memes Collection`,
  description:
    "Browse the funniest and most viral memes on ItsIndianGuy. Discover trending humor, share with friends, and join our meme community. Stay updated with the latest memes.",
  alternates: {
    canonical: "https://itsindianguy.in/memes",
  },
};

const Meme = () => {
  return (
    <Fragment>
      <MemeComponent />
    </Fragment>
  );
};

export default Meme;
