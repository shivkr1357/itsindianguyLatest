import ContactUsComponent from "@/components/Contact/ContactUsComponent";
import InterviewCard from "@/components/InterviewCards/InterviewCard";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `Contact Us | ItsIndianGuy`,
  description:
    "Get in touch with ItsIndianGuy for inquiries, support, or collaborations. We're here to help you with any questions or information you need.",
  alternates: {
    canonical: "https://www.itsindianguy.in/contact-us",
  },
  openGraph: {
    title: "Contact Us | ItsIndianGuy",
    description:
      "Get in touch with ItsIndianGuy for inquiries, support, or collaborations. We're here to help you with any questions or information you need.",
    url: "https://www.itsindianguy.in/contact-us",
    siteName: "ItsIndianGuy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us - ItsIndianGuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ItsIndianGuy",
    description:
      "Get in touch with ItsIndianGuy for inquiries, support, or collaborations.",
    images: ["https://www.itsindianguy.in/og-contact.jpg"],
  },
};

const ContactUS = () => {
  return (
    <Fragment>
      <ContactUsComponent />
    </Fragment>
  );
};

export default ContactUS;
