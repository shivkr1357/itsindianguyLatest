"use client";
import { useThemeState } from "@/context/ThemeContext";
import React from "react";
import CardWithImage from "./CardWithImage";

const InterviewCard = () => {
   const { customTheme } = useThemeState();

   return (
      <main
         style={{
            marginTop: "60px",
            backgroundColor: customTheme === "dark" ? "#222" : "#ddd",
            minHeight: "100vh",
            padding: "20px",
         }}
      >
         <CardWithImage />
      </main>
   );
};

export default InterviewCard;
