import { useThemeState } from "@/context/ThemeContext";
import {
   Box,
   Stack,
   Typography,
   styled,
   useMediaQuery,
   useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const CardWithImage = () => {
   const { customTheme } = useThemeState();
   const theme = useTheme();
   const isXs = useMediaQuery(theme.breakpoints.down("xs"));
   const isSm = useMediaQuery(theme.breakpoints.down("sm"));
   const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

   const CustomBox = styled(Box)(({ theme }) => ({
      width: "220px",
      height: "300px",
      boxShadow: theme.shadows[5],
      display: "flex",
      flexDirection: "column",
      paddingTop: "10px",
      alignItems: "center",
      borderRadius: "5px",
      cursor: "pointer",
   }));

   const CustomTypography = styled(Typography)(({ theme }) => ({
      fontSize: "18px",
      fontWeight: 500,
      color: customTheme === "dark" ? "#ddd" : "#333",
   }));

   const images = [
      { src: "/interview/javascript.png", label: "JavaScript" },
      { src: "/interview/react.png", label: "React" },
      { src: "/interview/next.png", label: "Next.js" },
      { src: "/interview/node.png", label: "Node.js" },
      { src: "/interview/nest.png", label: "NestJS" },
      { src: "/interview/python.png", label: "Python" },
   ];

   return (
      <Stack
         sx={{ marginTop: "50px" }}
         direction={"row"}
         gap={2}
         flexWrap='wrap'
         justifyContent='center'
      >
         {images.map((image, index) => (
            <CustomBox key={index}>
               <Image
                  src={image.src}
                  alt={image.label}
                  width={200}
                  height={200}
                  objectFit='cover'
               />
               <CustomTypography variant='body1'>
                  {image.label}
               </CustomTypography>
            </CustomBox>
         ))}
      </Stack>
   );
};

export default CardWithImage;
