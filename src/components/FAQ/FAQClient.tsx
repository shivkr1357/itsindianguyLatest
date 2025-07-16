"use client";
import { useFAQ } from "@/hooks/useFAQ";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQClientProps {
  faqs: FAQItem[];
}

const FAQClient = ({ faqs }: FAQClientProps) => {
  const { toggleFAQ, isOpen } = useFAQ();

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-neutral-200 dark:border-neutral-700 rounded-lg"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">
              {faq.question}
            </h3>
            <svg
              className={`w-5 h-5 text-neutral-500 transition-transform ${
                isOpen(index) ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isOpen(index) && (
            <div className="px-6 pb-4">
              <p className="text-neutral-600 dark:text-neutral-400">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Contact Section */}
      <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Still have questions?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Can't find what you're looking for? We're here to help!
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-primary-200 text-primary-200 hover:bg-primary-200/10 rounded-lg transition-colors"
          >
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQClient;
