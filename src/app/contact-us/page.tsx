import ContactUsComponent from "@/components/Contact/ContactUsComponent";
import InterviewCard from "@/components/InterviewCards/InterviewCard";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `Contact Us | ItsIndianGuy - Programming Tutorials Support & Developer Community`,
  description:
    "Get in touch with ItsIndianGuy for programming tutorial support, technical questions, collaboration opportunities, or feedback on our web development guides. We're here to help developers succeed.",
  keywords:
    "ItsIndianGuy contact, programming tutorials support, developer community, web development help, coding tutorials support, ItsIndianGuy support, programming courses help, ItsIndianGuy contact us",
  alternates: {
    canonical: "https://www.itsindianguy.in/contact-us",
  },
  openGraph: {
    title:
      "Contact Us | ItsIndianGuy - Programming Tutorials Support & Developer Community",
    description:
      "Get in touch with ItsIndianGuy for programming tutorial support, technical questions, collaboration opportunities, or feedback on our web development guides and learning resources. We're here to help developers succeed.",
    url: "https://www.itsindianguy.in/contact-us",
    siteName: "ItsIndianGuy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us - Programming Tutorials Support & Developer Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Us | ItsIndianGuy - Programming Tutorials Support & Developer Community",
    description:
      "Get in touch with ItsIndianGuy for programming tutorial support, technical questions, collaboration opportunities, or feedback on our web development guides.",
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
