import React, { Fragment } from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service | ItsIndianGuy`,
  description:
    "Read our terms of service to understand the rules and guidelines for using ItsIndianGuy&apos;s platform and services.",
  alternates: {
    canonical: "https://www.itsindianguy.in/terms",
  },
  openGraph: {
    title: "Terms of Service | ItsIndianGuy",
    description:
      "Read our terms of service to understand the rules and guidelines for using ItsIndianGuy's platform and services.",
    url: "https://www.itsindianguy.in/terms",
    siteName: "ItsIndianGuy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - ItsIndianGuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | ItsIndianGuy",
    description:
      "Read our terms of service to understand the rules and guidelines for using ItsIndianGuy's platform and services.",
    images: ["https://www.itsindianguy.in/og-terms.jpg"],
  },
};

const Terms = () => {
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
                Terms of Service
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using ItsIndianGuy (&ldquo;the Service&rdquo;),
                you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                ItsIndianGuy provides educational content, tutorials, blog
                posts, and interview preparation materials for developers. The
                Service includes but is not limited to:
              </p>
              <ul>
                <li>Blog articles and tutorials</li>
                <li>Interview question and answer content</li>
                <li>Educational resources and tools</li>
                <li>Community features and discussions</li>
              </ul>

              <h2>3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. You are
                responsible for safeguarding the password and for all activities
                that occur under your account.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the Service</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                ItsIndianGuy and its licensors. The Service is protected by
                copyright, trademark, and other laws.
              </p>

              <h2>6. User Content</h2>
              <p>
                You retain ownership of any content you submit to the Service.
                By submitting content, you grant us a worldwide, non-exclusive,
                royalty-free license to use, reproduce, modify, and distribute
                your content in connection with the Service.
              </p>

              <h2>7. Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of the Service, to
                understand our practices.
              </p>

              <h2>8. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall ItsIndianGuy, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses.
              </p>

              <h2>10. Disclaimers</h2>
              <p>
                The information on this website is provided on an &ldquo;as
                is&rdquo; basis. We make no warranties, expressed or implied,
                and hereby disclaim and negate all other warranties including
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of
                India, without regard to its conflict of law provisions.
              </p>

              <h2>12. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>

              <h2>13. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p>
                Email: legal@itsindianguy.in
                <br />
                Address: [Your Address]
                <br />
                Phone: [Your Phone Number]
              </p>

              <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
                <Link
                  href="/contact-us"
                  className="text-primary-200 hover:text-primary-300 font-medium"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Terms;
