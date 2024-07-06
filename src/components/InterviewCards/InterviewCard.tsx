"use client";
import { useThemeState } from "@/context/ThemeContext";
import React from "react";
import CardWithImage from "./CardWithImage";

const InterviewCard = () => {
   const { customTheme } = useThemeState();

   return (
      <main
         style={{
            marginTop: "100px",
            minHeight: "100vh",
            // padding: "80px",
         }}
      >
         <CardWithImage />
      </main>
   );
};

export default InterviewCard;
