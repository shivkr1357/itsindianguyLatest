import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar/Topbar";
import AppMainProvider from "@/context/ThemeContext";
import { Suspense } from "react";
import Progress from "@/components/Progress/Progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: ` ItsIndianGuy`,
   description:
      "ItsIndianGuy provides tutorials, tech videos, and project-building guides, focusing on web development, mobile development, and machine learning. The site also offers resources for interview preparation and features a blog with various tech-related topics. Stay connected through social networks to enhance your learning and stay updated with the latest in tech.",
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
