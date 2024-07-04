"use client";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { interviewQA } from "@/config/InterviewQA";
import Head from "next/head";
import { useThemeState } from "@/context/ThemeContext";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const page = () => {
   const pathname = usePathname();
   const [qa, setQa] = useState<any[]>([]);
   const language = pathname.split("/")[2];
   const { customTheme } = useThemeState();

   console.log("QA", qa);

   useEffect(() => {
      setQa(interviewQA.filter((item) => item.slug === language));
   }, [language]);

   return (
      <Fragment>
         <Head>
            <title>InterviewQA | ItsIndianguy</title>
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
               minHeight: "100vh",
               padding: "20px",
            }}
         >
            {qa.map((item) => (
               <div key={item.id}>
                  <Typography
                     color={customTheme === "dark" ? "#ddd" : "#222"}
                     variant='h4'
                     component='h1'
                  >
                     {item.slug.toUpperCase() + " Interview Questions"}
                  </Typography>
                  <Stack p={4}>
                     {item.data.map((subItem: any, index: any) => (
                        <Stack gap={2}>
                           <Typography
                              color={customTheme === "dark" ? "#ddd" : "#222"}
                              variant='h5'
                              component={"h2"}
                           >
                              <small>{index + 1 + ": "}</small> {subItem.que}
                           </Typography>
                           <Typography
                              color={customTheme === "dark" ? "#ddd" : "#222"}
                              variant='body1'
                              component='h3'
                              marginBottom={"50px"}
                           >
                              <small>{"Ans" + ": "}</small> {subItem.ans}
                           </Typography>
                        </Stack>
                     ))}
                  </Stack>
               </div>
            ))}
         </main>
      </Fragment>
   );
};

export default page;
