import MemeComponent from "@/components/MemeComponent/MemeComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `ItsIndianGuy: Funniest & Viral Memes Collection`,
  description:
    "Browse the funniest and most viral memes on ItsIndianGuy. Discover trending humor, share with friends, and join our meme community. Stay updated with the latest memes.",
  alternates: {
    canonical: "https://www.itsindianguy.in/memes",
  },
  openGraph: {
    title: "ItsIndianGuy: Funniest & Viral Memes Collection",
    description:
      "Browse the funniest and most viral memes on ItsIndianGuy. Discover trending humor, share with friends, and join our meme community.",
    url: "https://www.itsindianguy.in/memes",
    siteName: "ItsIndianGuy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-memes.jpg",
        width: 1200,
        height: 630,
        alt: "Viral Memes Collection - ItsIndianGuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ItsIndianGuy: Funniest & Viral Memes Collection",
    description:
      "Browse the funniest and most viral memes on ItsIndianGuy. Discover trending humor and join our meme community.",
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
