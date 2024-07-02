"use client";
import React, { Fragment } from "react";
import styles from "@/styles/Home.module.css";
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
      cursor: "pointer",
   }));

   return (
      <Fragment>
         <Grid container justifyContent='center' spacing={1}>
            <Grid item xs={11} sm={5.5} md={2}>
               <CustomBox className={styles.DevCardsColumnsCard}>
                  <CustomTypography>
                     <FontAwesomeIcon
                        icon={faGlobe}
                        style={{ marginRight: "10px" }}
                     />
                     Web Development
                  </CustomTypography>
               </CustomBox>
            </Grid>
            <Grid item xs={11} sm={5.5} md={2}>
               <CustomBox className={styles.DevCardsColumnsCard}>
                  <CustomTypography>
                     <FontAwesomeIcon
                        icon={faMobile}
                        style={{ marginRight: "10px" }}
                     />
                     Mobile Development
                  </CustomTypography>
               </CustomBox>
            </Grid>
            <Grid item xs={11} sm={5.5} md={1.8}>
               <CustomBox className={styles.DevCardsColumnsCard}>
                  <CustomTypography>
                     <FontAwesomeIcon
                        icon={faDesktop}
                        style={{ marginRight: "10px" }}
                     />
                     Machine Learning
                  </CustomTypography>
               </CustomBox>
            </Grid>
            <Grid item xs={11} sm={5.5} md={2.2}>
               <CustomBox className={styles.DevCardsColumnsCard}>
                  <CustomTypography>
                     <FontAwesomeIcon
                        icon={faQuestion}
                        style={{ marginRight: "10px" }}
                     />
                     Interview Preparation
                  </CustomTypography>
               </CustomBox>
            </Grid>
            <Grid item xs={11} sm={5.5} md={2}>
               <CustomBox className={styles.DevCardsColumnsCard}>
                  <CustomTypography>
                     <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ marginRight: "10px" }}
                     />
                     Facebook Follow
                  </CustomTypography>
               </CustomBox>
            </Grid>
            <Grid item xs={11} sm={5.5} md={2}>
               <CustomBox className={styles.DevCardsColumnsCard}>
                  <CustomTypography>
                     <FontAwesomeIcon
                        icon={faYoutube}
                        style={{
                           marginRight: "10px",
                        }}
                     />
                     Youtube Subscribe
                  </CustomTypography>
               </CustomBox>
            </Grid>
         </Grid>
      </Fragment>
   );
};

export default DevCards;
