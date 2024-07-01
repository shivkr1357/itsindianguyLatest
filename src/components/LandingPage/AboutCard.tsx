"use client";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Box, Stack, Typography } from "@mui/material";
import { useThemeState } from "@/context/ThemeContext";

const AboutCard = () => {
   const { customTheme } = useThemeState();
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
               component={"h2"}
               sx={{ fontWeight: "bold" }}
            >
               A Little About Us
            </Typography>
            <Typography variant='body1' component={"h2"}>
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
