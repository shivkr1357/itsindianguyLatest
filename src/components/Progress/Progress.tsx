"use client";
import { Box, CircularProgress, styled } from "@mui/material";
import React from "react";

// Define a styled component for the blurred background
const BlurredBackground = styled(Box)({
   position: "fixed",
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   backdropFilter: "blur(100px)", // Adjust the blur intensity as needed
   backgroundColor: "rgba(192, 192, 192, 0.7)", // Adjust the background color and opacity
   zIndex: 999,
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
});

const Progress = () => {
   return (
      <BlurredBackground>
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <CircularProgress color='secondary' />
         </Box>
      </BlurredBackground>
   );
};

export default Progress;
