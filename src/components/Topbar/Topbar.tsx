"use client";
import React, { useState, useEffect } from "react";
import {
   AppBar,
   Box,
   Toolbar,
   Container,
   styled,
   Typography,
   ToggleButton,
   Stack,
} from "@mui/material";
import { useThemeState } from "@/context/ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const CustomButton = styled("button")({
   color: "white",
   backgroundColor: "green",
   padding: 15,
   borderRadius: 4,
   border: "none",
   "&:hover": {
      backgroundColor: "#41a317",
      cursor: "pointer",
   },
});

const Topbar = () => {
   const { customTheme, toggleTheme } = useThemeState();
   const [showTopbar, setShowTopbar] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         console.log("Current Scroll Y:", currentScrollY);
         console.log("Last Scroll Y:", lastScrollY);

         if (currentScrollY > lastScrollY) {
            // Scrolling down
            setShowTopbar(false);
         } else {
            // Scrolling up
            setShowTopbar(true);
         }
         setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [lastScrollY]);

   return (
      <AppBar
         position='fixed'
         className={styles.topbarLinearGradient}
         style={{
            transform: showTopbar ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.3s ease-in-out",
         }}
      >
         <Container maxWidth='xl'>
            <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     width: "100%",
                  }}
               >
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                     gap={2}
                  >
                     <ToggleButton
                        value='check'
                        selected={customTheme === "light"}
                        onChange={() => {
                           toggleTheme();
                        }}
                     >
                        {customTheme === "light" ? (
                           <>
                              <DarkModeIcon sx={{ color: "#000" }} />
                           </>
                        ) : (
                           <>
                              <WbSunnyIcon sx={{ color: "white" }} />
                           </>
                        )}
                     </ToggleButton>
                  </Box>
                  <Stack direction={"row"} gap={2}>
                     <Link href={"/"} style={{ textDecoration: "none" }}>
                        <Typography
                           color={customTheme === "dark" ? "#fff" : "#000"}
                        >
                           ItsIndianGuy
                        </Typography>
                     </Link>
                     <Link
                        href={"/interview-qa"}
                        style={{ textDecoration: "none" }}
                     >
                        <Typography
                           color={customTheme === "dark" ? "#fff" : "#000"}
                        >
                           Interview QA
                        </Typography>
                     </Link>
                     <Link
                        href={"https://blog.itsindianguy.in"}
                        target='blank'
                        style={{ textDecoration: "none" }}
                     >
                        <Typography
                           color={customTheme === "dark" ? "#fff" : "#000"}
                        >
                           Blog
                        </Typography>
                     </Link>
                     <Link href={"/memes"} style={{ textDecoration: "none" }}>
                        <Typography
                           color={customTheme === "dark" ? "#fff" : "#000"}
                        >
                           Memes
                        </Typography>
                     </Link>
                  </Stack>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Topbar;
