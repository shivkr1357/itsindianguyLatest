import { Metadata } from "next";
import React, { Fragment } from "react";
import Link from "next/link";
import FAQClient from "@/components/FAQ/FAQClient";

export const metadata: Metadata = {
  title: `FAQ | ItsIndianGuy - Frequently Asked Questions`,
  description:
    "Find answers to common questions about our platform and services.",
  alternates: {
    canonical: "https://itsindianguy.in/faq",
  },
};

const faqs = [
  {
    question: "What is ItsIndianGuy?",
    answer:
      "ItsIndianGuy is a comprehensive platform for developers to learn, practice, and grow. We provide tutorials, blog posts, interview preparation materials, and resources for web development, mobile development, and other programming topics.",
  },
  {
    question: "Is the content free?",
    answer:
      "Yes, most of our content is completely free. We offer tutorials, blog posts, and interview questions at no cost. Some premium features may be available for subscribers.",
  },
  {
    question: "How can I contribute?",
    answer:
      "We welcome contributions from the community! You can submit blog posts, suggest tutorial topics, or help improve our interview questions. Contact us through our contact form to get started.",
  },
  {
    question: "Do you offer certificates?",
    answer:
      "Currently, we focus on providing quality educational content. While we don&apos;t offer formal certificates, our tutorials and resources are designed to help you build real-world skills.",
  },
  {
    question: "How often do you publish new content?",
    answer:
      "We publish new content regularly, including weekly blog posts, monthly tutorials, and updated interview questions. Subscribe to our newsletter to stay updated.",
  },
  {
    question: "Can I request specific topics?",
    answer:
      "Absolutely! We love hearing from our community about topics they&apos;d like to learn. Send us your suggestions through our contact form or social media channels.",
  },
  {
    question: "Do you offer one-on-one mentoring?",
    answer:
      "We currently focus on self-paced learning through our platform. However, we&apos;re exploring options for community mentoring and group sessions.",
  },
  {
    question: "How can I stay updated?",
    answer:
      "Follow us on social media, subscribe to our newsletter, or check our blog regularly. We also send notifications for new tutorials and important updates.",
  },
];

export default function FAQPage() {
  return (
    <Fragment>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="bg-white dark:bg-neutral-800 shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <Link
                  href="/"
                  className="text-primary-200 hover:text-primary-300 transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>

              <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Find answers to common questions about our platform and
                services.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8">
              <FAQClient faqs={faqs} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
