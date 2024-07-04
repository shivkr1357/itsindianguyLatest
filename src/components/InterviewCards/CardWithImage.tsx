import { useThemeState } from "@/context/ThemeContext";
import { Box, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { imageLinksInterview } from "@/config/config";

const CardWithImage = () => {
   const { customTheme } = useThemeState();
   const router = useRouter();
   const pathname = usePathname();

   const CustomBox = styled(Box)(({ theme }) => ({
      width: pathname === "/" ? "250px" : "220px",
      height: pathname === "/" ? "310" : "300px",
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

   const handleClick = (link: string) => {
      router.push(link);
   };

   return (
      <Stack
         sx={{ marginTop: "50px" }}
         direction={"row"}
         gap={2}
         flexWrap='wrap'
         justifyContent='center'
      >
         {imageLinksInterview
            .slice(0, pathname === "/" ? 5 : imageLinksInterview.length)
            .map((image, index) => (
               <CustomBox
                  key={index}
                  onClick={() => {
                     handleClick(image?.link);
                  }}
               >
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
