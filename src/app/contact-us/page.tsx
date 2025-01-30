import ContactUsComponent from "@/components/Contact/ContactUsComponent";
import InterviewCard from "@/components/InterviewCards/InterviewCard";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: `Contact Us | ItsIndianGuy`,
  description:
    "Get in touch with ItsIndianGuy for inquiries, support, or collaborations. We're here to help you with any questions or information you need.",
  alternates: {
    canonical: "https://itsindianguy.in/contact-us",
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
