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
   const { theme, toggleTheme } = useThemeState();

   return (
      <AppBar
         position='fixed'
         sx={{
            backgroundColor: theme === "dark" ? "rgb(28,27,34)" : "#f1f1f1",
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
                  <Stack direction={"row"} gap={2}>
                     <Typography color={theme === "dark" ? "#fff" : "#000"}>
                        ItsIndianGuy
                     </Typography>
                     <Typography color={theme === "dark" ? "#fff" : "#000"}>
                        Memes
                     </Typography>
                     <Typography color={theme === "dark" ? "#fff" : "#000"}>
                        Blog
                     </Typography>
                     <Typography color={theme === "dark" ? "#fff" : "#000"}>
                        Interview QA
                     </Typography>
                  </Stack>
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
                        selected={theme === "light"}
                        onChange={() => {
                           toggleTheme();
                        }}
                     >
                        {theme === "light" ? (
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
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Topbar;
