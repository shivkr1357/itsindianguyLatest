import React, { Fragment } from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
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
                Privacy Policy
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
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, subscribe to our newsletter, or contact
                us for support. This may include:
              </p>
              <ul>
                <li>Name and email address</li>
                <li>Profile information</li>
                <li>Communication preferences</li>
                <li>Feedback and comments</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Send you updates and newsletters</li>
                <li>Respond to your questions and support requests</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy or as required by law.
              </p>

              <h2>4. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your
                experience on our website. You can control cookie settings
                through your browser preferences.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>

              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please
                contact us at:
              </p>
              <p>
                Email: privacy@itsindianguy.in
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

export default PrivacyPolicy;
