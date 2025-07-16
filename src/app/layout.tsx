import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import Script from "next/script";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "ItsIndianGuy - Programming Tutorials, Web Development Guides & Interview Preparation",
  description:
    "Master programming with comprehensive tutorials, web development guides, and interview preparation resources. Learn JavaScript, React, Node.js, Python, and more with step-by-step guides.",
  keywords:
    "programming tutorials, web development, JavaScript tutorials, React tutorials, Node.js tutorials, Python tutorials, interview preparation, coding tutorials, software development, programming courses, ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in",
  },
  openGraph: {
    title:
      "ItsIndianGuy - Programming Tutorials, Web Development Guides & Interview Preparation",
    description:
      "Master programming with comprehensive tutorials, web development guides, and interview preparation resources. Learn JavaScript, React, Node.js, Python, and more with step-by-step guides for beginners and advanced developers.",
    url: "https://www.itsindianguy.in",
    siteName: "ItsIndianGuy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ItsIndianGuy - Programming Tutorials, Web Development Guides & Interview Preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ItsIndianGuy - Programming Tutorials, Web Development Guides & Interview Preparation",
    description:
      "Master programming with comprehensive tutorials, web development guides, and interview preparation resources. Learn JavaScript, React, Node.js, Python, and more.",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KH5X88P4');
          `}
        </Script>
      </head>
      <body
        className={`${roboto.className} min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KH5X88P4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider>
          <AuthProvider>
            <Topbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
