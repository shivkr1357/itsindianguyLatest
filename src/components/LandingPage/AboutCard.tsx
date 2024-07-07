"use client";

import React from "react";
import styles from "@/styles/Home.module.css";
import { Box, Stack, styled, Typography } from "@mui/material";
import { useThemeState } from "@/context/ThemeContext";
import { Caveat } from "next/font/google";

const caveat = Caveat({
   subsets: ["latin"],
   weight: "400",
});

const AboutCard = () => {
   const { customTheme } = useThemeState();

   const CustomStack = styled(Stack)(({ theme }) => ({
      [theme.breakpoints.up("xs")]: {
         width: "100%",
         height: "100%",
      },
      [theme.breakpoints.up("sm")]: {},
      [theme.breakpoints.up("md")]: {},
   }));

   return (
      <Stack
         className={styles.aboutCard}
         sx={{
            backgroundColor: customTheme === "dark" ? "#222" : "#ddd",
            color: customTheme === "dark" ? "#ddd" : "#222",
         }}
      >
         <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography
               variant='body1'
               component={"h3"}
               sx={{ fontWeight: "bold", fontSize: "30px" }}
            >
               A Little About Us
            </Typography>
            <Typography
               className={caveat.className}
               variant='body1'
               sx={{ fontSize: "25px" }}
               component={"h4"}
            >
               Hey&#44; Welcome to our website - We make videos about tech&#44;
               tutorials&#44; some interesting attempts of building new
               Projects. Make sure you&apos;re following us on all of the social
               networks so we can stay in touch. We gained some expertise in Web
               development and Mobile Development. Thanks for visiting our
               website
            </Typography>
         </Stack>
      </Stack>
   );
};

export default AboutCard;
