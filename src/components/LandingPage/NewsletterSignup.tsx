import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewsletterSignup = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-8 h-8">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2530/2530914.png"
            alt="Newsletter"
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
          Subscribe to Newsletter
        </h3>
      </div>
      <div className="mb-6 space-y-2">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Get the latest tutorials and updates delivered to your inbox.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 bg-primary-200/10 text-primary-200 rounded flex items-center gap-1">
            <span className="w-3 h-3 relative">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Weekly"
                fill
                className="object-contain"
              />
            </span>
            Weekly Updates
          </span>
          <span className="text-xs px-2 py-1 bg-primary-200/10 text-primary-200 rounded flex items-center gap-1">
            <span className="w-3 h-3 relative">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2991/2991110.png"
                alt="Tips"
                fill
                className="object-contain"
              />
            </span>
            Pro Tips
          </span>
          <span className="text-xs px-2 py-1 bg-primary-200/10 text-primary-200 rounded flex items-center gap-1">
            <span className="w-3 h-3 relative">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2991/2991112.png"
                alt="News"
                fill
                className="object-contain"
              />
            </span>
            Tech News
          </span>
        </div>
      </div>
      <form className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/542/542638.png"
              alt="Email"
              width={16}
              height={16}
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                     bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100
                     focus:ring-2 focus:ring-primary-200 focus:border-transparent
                     placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary-200 hover:bg-primary-300 text-white rounded-lg 
                  transition-colors flex items-center justify-center gap-2"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2530/2530914.png"
            alt="Subscribe"
            width={20}
            height={20}
          />
          Subscribe
        </button>
      </form>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
        By subscribing, you agree to our{" "}
        <Link
          href="/privacy-policy"
          className="text-primary-200 hover:text-primary-300 underline"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/terms"
          className="text-primary-200 hover:text-primary-300 underline"
        >
          Terms of Service
        </Link>
        .
      </p>
    </div>
  );
};

export default NewsletterSignup;
