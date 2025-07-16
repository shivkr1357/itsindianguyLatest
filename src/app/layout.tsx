import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/context/ThemeContext";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ItsIndianGuy",
  description:
    "Your one-stop destination for programming tutorials and interview preparation",
  alternates: {
    canonical: "https://www.itsindianguy.in",
  },
  openGraph: {
    title: "ItsIndianGuy - Programming Tutorials & Interview Preparation",
    description:
      "Your one-stop destination for programming tutorials and interview preparation",
    url: "https://www.itsindianguy.in",
    siteName: "ItsIndianGuy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ItsIndianGuy - Programming Tutorials & Interview Preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ItsIndianGuy - Programming Tutorials & Interview Preparation",
    description:
      "Your one-stop destination for programming tutorials and interview preparation",
    images: ["https://www.itsindianguy.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900`}
      >
        <ThemeProvider>
          <Topbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
