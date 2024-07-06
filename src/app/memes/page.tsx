import MemeComponent from "@/components/MemeComponent/MemeComponent";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
   title: ` ItsIndianGuy`,
   description:
      "Discover the funniest and most viral memes on ItsIndianGuy's dedicated meme page. Browse through a collection of the latest memes across various categories, perfect for sharing with friends and bringing a smile to your day. Stay updated with the trending humor and join the meme community at ItsIndianGuy.",
   alternates: {
      canonical: "https://itsindianguy.in",
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
