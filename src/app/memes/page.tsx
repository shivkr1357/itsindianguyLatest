"use client";
import MemeComponent from "@/components/MemeComponent/MemeComponent";
import { useThemeState } from "@/context/ThemeContext";
import Head from "next/head";
import React, { Fragment } from "react";

const Meme = () => {
   const { customTheme } = useThemeState();

   return (
      <Fragment>
         <Head>
            <title>Memes | ItsIndianguy</title>
            <meta
               name='description'
               content='Top memes of the year, get this and share the memes '
            />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
         </Head>
         <main
            style={{
               marginTop: "60px",
               backgroundColor: customTheme === "dark" ? "#222" : "#ddd",
            }}
         >
            <MemeComponent />
         </main>
      </Fragment>
   );
};

export default Meme;
