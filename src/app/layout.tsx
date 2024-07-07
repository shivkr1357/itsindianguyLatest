import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar/Topbar";
import AppMainProvider from "@/context/ThemeContext";
import { Suspense } from "react";
import Progress from "@/components/Progress/Progress";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `ItsIndianGuy | Your Ultimate Resource for Tech Guides and Tutorials`,
  description:
    "Explore tech guides, tutorials, and updates in web and mobile development at ItsIndianGuy. Learn from our comprehensive resources and stay updated with the latest in tech.",
  alternates: {
    canonical: "https://itsindianguy.in",
  },
  openGraph: {
    title:
      "ItsIndianGuy | Your Ultimate Resource for Tech Guides and Tutorials",
    description:
      "Explore tech guides, tutorials, and updates in web and mobile development at ItsIndianGuy. Learn from our comprehensive resources and stay updated with the latest in tech.",
    url: "https://itsindianguy.in",
    siteName: "ItsIndianGuy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://itsindianguy.in/profile/profile.jpg",
        width: 1200,
        height: 630,
        alt: "ItsIndianGuy",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Suspense fallback={<Progress />}>
          <AppMainProvider>
            <Topbar />

            {children}
            <Footer />
          </AppMainProvider>
        </Suspense>
      </body>
    </html>
  );
}
