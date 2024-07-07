"use client";
import { Caveat } from "next/font/google";
import { useInView } from "react-intersection-observer";
import InterviewCard from "@/components/InterviewCards/InterviewCard";
import AboutCard from "@/components/LandingPage/AboutCard";
import DevCards from "@/components/LandingPage/DevCards";
import { useThemeState } from "@/context/ThemeContext";
import { Stack, Typography } from "@mui/material";
import styles from "@/styles/Main.module.css";
import animations from "@/styles/animations.module.css";

const caveat = Caveat({
   subsets: ["latin"],
   weight: "400",
});

export default function Home() {
   const { customTheme } = useThemeState();

   const { ref: refWelcome, inView: inViewWelcome } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });
   const { ref: refAbout, inView: inViewAbout } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });
   const { ref: refDev, inView: inViewDev } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });
   const { ref: refInterview, inView: inViewInterview } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   return (
      <main
         className={styles.container}
         style={{
            marginTop: "100px",
         }}
      >
         <section
            className={`${styles.child} ${animations.fadeIn} ${
               inViewWelcome ? animations.fadeInVisible : ""
            }`}
            ref={refWelcome}
         >
            <Stack>
               <Typography
                  variant='h3'
                  component={"h1"}
                  className={
                     customTheme === "dark"
                        ? styles.welcomeTypographyLight
                        : styles.welcomeTypographyDark
                  }
               >
                  Welcome to itsindianguy.in!
               </Typography>
               <Typography
                  variant='h4'
                  component={"h2"}
                  padding={"30px"}
                  className={caveat.className}
                  sx={{
                     fontSize: { xs: "20px", sm: "30px", md: "50px" },
                     fontWeight: 500,
                  }}
               >
                  Your ultimate destination for tech insights&#44; engaging
                  blogs&#44; hilarious memes&#44; and in&#45;depth
                  tutorials&#46; Whether you&apos;re here to stay updated on the
                  latest tech trends&#44; read thought&#45;provoking
                  articles&#44; enjoy a good laugh&#44; or learn something
                  new&#44; you&apos;ve come to the right place&#46; Join our
                  community of enthusiasts and let&apos;s explore the dynamic
                  world of technology together&#33;
               </Typography>
            </Stack>
         </section>

         <section
            className={`${styles.child} ${animations.fadeIn} ${
               inViewAbout ? animations.fadeInVisible : ""
            }`}
            ref={refAbout}
         >
            <Stack direction={"row"}>
               <AboutCard />
            </Stack>
         </section>
         <section
            className={`${styles.child} ${animations.fadeIn} ${
               inViewInterview ? animations.fadeInVisible : ""
            }`}
            ref={refInterview}
         >
            <InterviewCard />
         </section>

         <section
            className={`${styles.child} ${animations.fadeIn} ${
               inViewDev ? animations.fadeInVisible : ""
            }`}
            ref={refDev}
         >
            <Typography
               variant='h4'
               component='h6'
               sx={{
                  padding: "10px",
                  paddingBottom: "20px",
                  color: customTheme === "dark" ? "#ddd" : "#222",
               }}
            >
               Latest Technologies
            </Typography>
            <DevCards />
         </section>
      </main>
   );
}
