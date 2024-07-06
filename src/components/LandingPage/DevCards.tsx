"use client";
import React, { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/Home.module.css";
import animations from "@/styles/animations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeState } from "@/context/ThemeContext";
import {
   faGlobe,
   faMobile,
   faQuestion,
   faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Typography, styled, Box, Grid } from "@mui/material";

const DevCards = () => {
   const { customTheme } = useThemeState();

   const CustomTypography = styled(Typography)({
      color: customTheme === "dark" ? "#ddd" : "#222",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   });

   const CustomBox = styled(Box)(({ theme }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      width: "100%",
      height: "300px",
      cursor: "pointer",
      [theme.breakpoints.up("xs")]: {
         height: "65px",
      },
      [theme.breakpoints.up("sm")]: {
         height: "170px",
      },
      [theme.breakpoints.up("md")]: {
         height: "300px",
      },
   }));

   const items = [
      { icon: faGlobe, text: "Web Development" },
      { icon: faMobile, text: "Mobile Development" },
      { icon: faDesktop, text: "Machine Learning" },
      { icon: faQuestion, text: "Interview Preparation" },
      { icon: faFacebookF, text: "Facebook Follow" },
      { icon: faYoutube, text: "YouTube Subscribe" },
   ];

   return (
      <Fragment>
         <Grid container justifyContent='center' spacing={1}>
            {items.map((item, index) => {
               const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
               });

               return (
                  <Grid
                     item
                     xs={11}
                     sm={5.5}
                     md={2}
                     key={index}
                     ref={ref}
                     className={`${animations.fadeInDown} ${
                        inView ? animations.fadeInDownVisible : ""
                     }`}
                     style={{ transitionDelay: `${index * 100}ms` }} // Stagger the animation
                  >
                     <CustomBox className={styles.DevCardsColumnsCard}>
                        <CustomTypography>
                           <FontAwesomeIcon
                              icon={item.icon}
                              style={{ marginRight: "8px" }}
                           />
                           {item.text}
                        </CustomTypography>
                     </CustomBox>
                  </Grid>
               );
            })}
         </Grid>
      </Fragment>
   );
};

export default DevCards;
