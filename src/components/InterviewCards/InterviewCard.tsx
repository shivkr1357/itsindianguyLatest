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
            marginTop: "40px",
            minHeight: "100vh",
         }}
      >
         {/* <Typography variant='h2' component={"h2"}>
            Top Interview Subjects
         </Typography> */}
         <CardWithImage />
      </main>
   );
};

export default InterviewCard;
