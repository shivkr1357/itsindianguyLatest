import MemeComponent from "@/components/MemeComponent/MemeComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `Viral Memes Collection | ItsIndianGuy - Funniest Programming & Tech Humor`,
  description:
    "Discover the funniest viral memes and programming humor on ItsIndianGuy. Browse trending tech jokes, developer memes, and share hilarious content with the developer community.",
  keywords:
    "viral memes, programming humor, tech jokes, developer memes, ItsIndianGuy memes, programming memes, tech humor, ItsIndianGuy viral memes, programming jokes, ItsIndianGuy meme collection",
  alternates: {
    canonical: "https://www.itsindianguy.in/memes",
  },
  openGraph: {
    title:
      "Viral Memes Collection | ItsIndianGuy - Funniest Programming & Tech Humor",
    description:
      "Discover the funniest viral memes and programming humor on ItsIndianGuy. Browse trending tech jokes, developer memes, and share hilarious content with the developer community. Join our meme culture and stay entertained.",
    url: "https://www.itsindianguy.in/memes",
    siteName: "ItsIndianGuy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-memes.jpg",
        width: 1200,
        height: 630,
        alt: "Viral Memes Collection - Programming & Tech Humor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Viral Memes Collection | ItsIndianGuy - Funniest Programming & Tech Humor",
    description:
      "Discover the funniest viral memes and programming humor on ItsIndianGuy. Browse trending tech jokes, developer memes, and share hilarious content with the developer community.",
    images: ["https://www.itsindianguy.in/og-memes.jpg"],
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
