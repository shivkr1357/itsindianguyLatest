import React, { Fragment } from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Support | ItsIndianGuy`,
  description:
    "Get help and support for ItsIndianGuy. Find answers to your questions, report issues, and get assistance with our platform.",
  alternates: {
    canonical: "https://www.itsindianguy.in/support",
  },
  openGraph: {
    title: "Support | ItsIndianGuy",
    description:
      "Get help and support for ItsIndianGuy. Find answers to your questions, report issues, and get assistance with our platform.",
    url: "https://www.itsindianguy.in/support",
    siteName: "ItsIndianGuy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-support.jpg",
        width: 1200,
        height: 630,
        alt: "Support Center - ItsIndianGuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support | ItsIndianGuy",
    description:
      "Get help and support for ItsIndianGuy. Find answers to your questions and get assistance.",
    images: ["https://www.itsindianguy.in/og-support.jpg"],
  },
};

const supportChannels = [
  {
    title: "Email Support",
    description:
      "Get help via email for technical issues and general inquiries",
    contact: "support@itsindianguy.in",
    response: "Within 24 hours",
    icon: "📧",
  },
  {
    title: "Community Forum",
    description:
      "Connect with other developers and get help from the community",
    contact: "Join our Discord server",
    response: "Real-time support",
    icon: "💬",
  },
  {
    title: "Documentation",
    description: "Browse our comprehensive documentation and guides",
    contact: "Visit our docs",
    response: "Self-service",
    icon: "📚",
  },
  {
    title: "FAQ",
    description: "Find answers to frequently asked questions",
    contact: "Browse FAQ",
    response: "Instant answers",
    icon: "❓",
  },
];

const commonIssues = [
  {
    title: "Can&apos;t access tutorials",
    solution:
      "Make sure you&apos;re logged in and try refreshing the page. If the issue persists, clear your browser cache.",
    link: "/tutorials",
  },
  {
    title: "Interview questions not loading",
    solution:
      "Check your internet connection and try again. If problems continue, contact our support team.",
    link: "/interview-qa",
  },
  {
    title: "Account login issues",
    solution:
      "Try resetting your password or contact support if you can&apos;t access your account.",
    link: "/login",
  },
  {
    title: "Content suggestions",
    solution:
      "We welcome suggestions! Use our contact form to share your ideas for new tutorials or blog posts.",
    link: "/contact-us",
  },
];

const Support = () => {
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
                Support Center
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                We&apos;re here to help! Find the support you need to make the
                most of our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center">
              How Can We Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6 text-center"
                >
                  <div className="text-4xl mb-4">{channel.icon}</div>
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {channel.description}
                  </p>
                  <div className="text-sm">
                    <p className="font-medium text-neutral-800 dark:text-neutral-100">
                      {channel.contact}
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      {channel.response}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Issues */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8 mb-16">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Common Issues & Solutions
              </h2>
              <div className="space-y-6">
                {commonIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6"
                  >
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                      {issue.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                      {issue.solution}
                    </p>
                    <Link
                      href={issue.link}
                      className="text-primary-200 hover:text-primary-300 text-sm font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Still Need Help?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Can&apos;t find what you&apos;re looking for? Our support team
                is ready to assist you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/faq"
                  className="px-6 py-3 border border-primary-200 text-primary-200 hover:bg-primary-200/10 rounded-lg transition-colors"
                >
                  Browse FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Support;
