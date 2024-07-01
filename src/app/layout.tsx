import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar/Topbar";
import AppMainProvider from "@/context/ThemeContext";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import Progress from "@/components/Progress/Progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <Suspense fallback={<Progress />}>
               <AppMainProvider>
                  <Topbar />

                  {children}
               </AppMainProvider>
            </Suspense>
         </body>
      </html>
   );
}
