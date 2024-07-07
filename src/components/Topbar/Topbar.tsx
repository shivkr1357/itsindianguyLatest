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
   IconButton,
   Drawer,
   List,
   ListItem,
   ListItemText,
   useMediaQuery,
   useTheme,
   Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
   const [drawerOpen, setDrawerOpen] = useState(false);
   const theme = useTheme();
   const isXs = useMediaQuery(theme.breakpoints.only("xs"));

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;

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

   const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen);
   };

   const getDrawerBackground = () => {
      return customTheme === "dark" ? "#333" : "#fff";
   };

   const menuItems = (
      <Stack
         className={styles.linkContainer}
         gap={3}
         flexDirection={{ sm: "row", md: "row" }}
      >
         <Link href={"/"} className={styles.customLink}>
            <Typography color={customTheme === "dark" ? "#fff" : "#000"}>
               ItsIndianGuy
            </Typography>
         </Link>
         <Link href={"/interview-qa"} className={styles.customLink}>
            <Typography color={customTheme === "dark" ? "#fff" : "#000"}>
               InterviewQA
            </Typography>
         </Link>
         <Link
            href={"https://blog.itsindianguy.in"}
            target='blank'
            className={styles.customLink}
         >
            <Typography color={customTheme === "dark" ? "#fff" : "#000"}>
               Blog
            </Typography>
         </Link>
         <Link
            href={"https://portfolio.itsindianguy.in"}
            target='blank'
            className={styles.customLink}
         >
            <Typography color={customTheme === "dark" ? "#fff" : "#000"}>
               Portfolio
            </Typography>
         </Link>
         <Link href={"/memes"} className={styles.customLink}>
            <Typography color={customTheme === "dark" ? "#fff" : "#000"}>
               Memes
            </Typography>
         </Link>
         <Link href={"/about"} className={styles.customLink}>
            <Typography color={customTheme === "dark" ? "#fff" : "#000"}>
               AboutUs
            </Typography>
         </Link>
         <Link href={"/contact-us"} className={styles.customLink}>
            <Typography color={customTheme === "dark" ? "#fff" : "#000"}>
               ContactUs
            </Typography>
         </Link>
         {isXs && (
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
         )}
      </Stack>
   );

   return (
      <>
         <AppBar
            position='fixed'
            className={styles.topbarLinearGradient}
            style={{
               transform: showTopbar ? "translateY(0)" : "translateY(-100%)",
               transition: "transform 0.3s ease-in-out",
            }}
         >
            <Container maxWidth='xl'>
               <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
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
                  {isXs ? (
                     <>
                        <IconButton
                           edge='start'
                           color='inherit'
                           aria-label='menu'
                           onClick={handleDrawerToggle}
                        >
                           <MenuIcon />
                        </IconButton>
                        <Drawer
                           anchor='right'
                           open={drawerOpen}
                           onClose={handleDrawerToggle}
                           PaperProps={{
                              sx: {
                                 backgroundColor: getDrawerBackground(),
                                 width: "80%",
                              },
                           }}
                        >
                           <Button
                              className={styles.closeIconButton}
                              onClick={handleDrawerToggle}
                           >
                              <CloseIcon className={styles.closeIcon} />
                           </Button>
                           <List>
                              {React.Children.map(menuItems, (child, index) => (
                                 <ListItem key={index}>
                                    <ListItemText primary={child} />
                                 </ListItem>
                              ))}
                           </List>
                        </Drawer>
                     </>
                  ) : (
                     <Stack direction={"row"} gap={2}>
                        {menuItems}
                     </Stack>
                  )}
               </Toolbar>
            </Container>
         </AppBar>
      </>
   );
};

export default Topbar;
