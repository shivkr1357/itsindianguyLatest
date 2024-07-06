import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar/Topbar";
import AppMainProvider from "@/context/ThemeContext";
import { Suspense } from "react";
import Progress from "@/components/Progress/Progress";

const roboto = Roboto({
   subsets: ["latin"],
   weight: "400",
});

export const metadata: Metadata = {
   title: `ItsIndianGuy: Your Go-To Resource for Web Development, Tech Guides, and Tutorials`,
   description:
      "ItsIndianGuy offers tutorials, tech videos, and project guides on web and mobile development, and machine learning. Enhance your skills with our comprehensive resources and stay updated with the latest in tech.",
   alternates: {
      canonical: "https://itsindianguy.in",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={roboto.className}>
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
