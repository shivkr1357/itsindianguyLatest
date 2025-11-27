import BackendApiDemo from "@/components/Demo/BackendApiDemo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Demo - Backend API Testing & Demonstration | ItsIndianGuy",
  description:
    "Test and demonstrate backend API functionality with our interactive demo. Explore REST API endpoints, request/response handling, and API integration examples.",
  keywords:
    "API demo, backend API, REST API testing, API demonstration, ItsIndianGuy API demo, backend development demo, API integration, API endpoints",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/demo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "API Demo - Backend API Testing & Demonstration | ItsIndianGuy",
    description:
      "Interactive backend API demo. Test REST API endpoints, explore request/response handling, and learn API integration with real examples.",
    url: "https://www.itsindianguy.in/demo",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-demo.jpg",
        width: 1200,
        height: 630,
        alt: "API Demo - Backend API Testing & Demonstration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Demo - Backend API Testing | ItsIndianGuy",
    description:
      "Interactive backend API demo. Test REST API endpoints and learn API integration with real examples.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-demo.jpg"],
  },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BackendApiDemo />
    </div>
  );
}
