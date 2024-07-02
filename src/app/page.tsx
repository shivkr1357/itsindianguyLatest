"use client";
import InterviewCard from "@/components/InterviewCards/InterviewCard";
import AboutCard from "@/components/LandingPage/AboutCard";
import DevCards from "@/components/LandingPage/DevCards";
import { useThemeState } from "@/context/ThemeContext";
import { Stack } from "@mui/material";

export default function Home() {
   const { customTheme } = useThemeState();

   return (
      <main
         style={{
            marginTop: "60px",
            backgroundColor: customTheme === "dark" ? "#222" : "#ddd",
            minHeight: "100vh",
            height: "100%",
         }}
      >
         <section style={{ margin: 5, paddingTop: 2 }}>
            <Stack direction={"row"}>
               <AboutCard />
            </Stack>
         </section>

         <section style={{ margin: 5, paddingTop: 2 }}>
            <DevCards />
         </section>
         <section style={{ margin: 5, paddingTop: 2 }}>
            <InterviewCard />
         </section>
      </main>
   );
}
