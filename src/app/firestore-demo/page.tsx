import { Metadata } from "next";
import FirestoreExample from "@/components/FirestoreExample";

export const metadata: Metadata = {
  title: "Firestore Demo - ItsIndianGuy",
  description:
    "Demo page showcasing Firebase Firestore integration with user profiles, blog posts, and real-time data synchronization.",
  keywords:
    "Firebase, Firestore, database, real-time, user profiles, blog posts, ItsIndianGuy, programming tutorials",
  openGraph: {
    title: "Firestore Demo - ItsIndianGuy",
    description:
      "Demo page showcasing Firebase Firestore integration with user profiles, blog posts, and real-time data synchronization.",
    url: "https://www.itsindianguy.com/firestore-demo",
    siteName: "ItsIndianGuy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firestore Demo - ItsIndianGuy",
    description:
      "Demo page showcasing Firebase Firestore integration with user profiles, blog posts, and real-time data synchronization.",
  },
  alternates: {
    canonical: "https://www.itsindianguy.com/firestore-demo",
  },
};

export default function FirestoreDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <FirestoreExample />
      </div>
    </div>
  );
}
