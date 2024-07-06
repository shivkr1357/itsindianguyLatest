import { useThemeState } from "@/context/ThemeContext";
import {
   Box,
   Grid,
   Typography,
   styled,
   useTheme,
   useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { imageLinksInterview } from "@/config/config";
import animations from "@/styles/animations.module.css";
import { useInView } from "react-intersection-observer";

const CardWithImage = () => {
   const { customTheme } = useThemeState();
   const router = useRouter();
   const pathname = usePathname();
   const theme = useTheme();
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   // Define breakpoints
   const isXs = useMediaQuery(theme.breakpoints.only("xs"));
   const isSm = useMediaQuery(theme.breakpoints.only("sm"));
   const isMd = useMediaQuery(theme.breakpoints.only("md"));

   console.log("isXS", isXs, isSm, isMd);

   const CustomBox = styled(Box)(({ theme }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      cursor: "pointer",
      [theme.breakpoints.up("xs")]: {
         width: pathname === "/" ? "100%" : "220px",
         height: pathname === "/" ? "70px" : "300px",
         boxShadow: theme.shadows[5],
         flexDirection: "row",
      },
      [theme.breakpoints.up("sm")]: {
         width: pathname === "/" ? "100%" : "220px",
         height: pathname === "/" ? "170px" : "300px",
         flexDirection: "row",
      },
      [theme.breakpoints.up("md")]: {
         width: pathname === "/" ? "100%" : "100%",
         height: pathname === "/" ? "250px" : "300px",
         boxShadow: theme.shadows[5],
         flexDirection: "column",

         marginTop: "20px",
      },
   }));

   const CustomTypography = styled(Typography)(({ theme }) => ({
      fontSize: "18px",
      fontWeight: 500,
      color: customTheme === "dark" ? "#ddd" : "#333",
   }));

   const handleClick = (link: string) => {
      router.push(link);
   };

   const getImageSize = () => {
      if (isMd) {
         return { width: 250, height: 250 };
      } else if (isSm) {
         return { width: 150, height: 150 };
      } else if (isXs) {
         return { width: 100, height: 50 };
      } else {
         return { width: 200, height: 200 };
      }
   };

   const imageSize = getImageSize();

   return (
      <Fragment>
         <Grid
            container
            justifyContent='center'
            alignContent={"center"}
            spacing={2}
         >
            {imageLinksInterview
               .slice(
                  0,
                  pathname === "/"
                     ? isXs
                        ? 5
                        : isSm
                        ? 6
                        : imageLinksInterview.length
                     : imageLinksInterview.length
               )
               .map((image, index) => {
                  return (
                     <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        justifyContent='center'
                        key={index}
                        ref={ref}
                        className={`${animations.fadeInDown} ${
                           inView ? animations.fadeInDownVisible : ""
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                     >
                        <CustomBox
                           onClick={() => {
                              handleClick(image?.link);
                           }}
                        >
                           <Image
                              src={image.src}
                              alt={image.label}
                              width={imageSize.width}
                              height={imageSize.height}
                              objectFit='contain'
                           />
                        </CustomBox>
                     </Grid>
                  );
               })}
         </Grid>
      </Fragment>
   );
};

export default CardWithImage;
