"use client";
import { useThemeState } from "@/context/ThemeContext";
import React from "react";
import CardWithImage from "./CardWithImage";

const InterviewCard = () => {
   const { customTheme } = useThemeState();

   return (
      <main>
         <CardWithImage />
      </main>
   );
};

export default InterviewCard;
