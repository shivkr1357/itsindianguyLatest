"use client";
import React from "react";
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

   return (
      <AppBar
         position='fixed'
         sx={{
            backgroundColor:
               customTheme === "dark" ? "rgb(28,27,34)" : "#f1f1f1",
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
                     <Link href={"/memes"} style={{ textDecoration: "none" }}>
                        <Typography
                           color={customTheme === "dark" ? "#fff" : "#000"}
                        >
                           Memes
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
                     <Link href={"/"} style={{ textDecoration: "none" }}>
                        <Typography
                           color={customTheme === "dark" ? "#fff" : "#000"}
                        >
                           ItsIndianGuy
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
