"use client";
import { useThemeState } from "@/context/ThemeContext";
import React from "react";
import CardWithImage from "./CardWithImage";
import { Typography } from "@mui/material";

const InterviewCard = () => {
   const { customTheme } = useThemeState();

   return (
      <main
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "80px",
         }}
      >
         <Typography
            variant='h4'
            component='h5'
            sx={{
               padding: "10px",
               paddingBottom: "20px",
               color: customTheme === "dark" ? "#ddd" : "#222",
            }}
         >
            Interview Topics
         </Typography>
         <CardWithImage />
      </main>
   );
};

export default InterviewCard;
