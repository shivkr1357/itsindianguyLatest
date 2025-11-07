import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscribe to Our Newsletter - ItsIndianGuy",
  description: "Subscribe to ItsIndianGuy newsletter and get the latest programming tutorials, tech news, and developer tips delivered to your inbox every week.",
  keywords: "newsletter subscription, programming newsletter, tech updates, developer tips, weekly tutorials",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2530/2530914.png"
              alt="Newsletter"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Get the latest tutorials, tips, and tech insights delivered to your inbox
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What You&apos;ll Get
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Weekly Tutorials</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Step-by-step programming guides and tutorials</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Tech News</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Latest updates in web development and technology</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Pro Tips</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Expert advice and best practices</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Exclusive Content</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Access to subscriber-only resources</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Interview Prep</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Curated interview questions and answers</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">No Spam</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Quality content, unsubscribe anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 text-center">
            Join 10,000+ Developers
          </h2>
          <form className="max-w-md mx-auto space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                    alt="Name"
                    width={20}
                    height={20}
                  />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                           bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100
                           focus:ring-2 focus:ring-primary-200 focus:border-transparent
                           placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/542/542638.png"
                    alt="Email"
                    width={20}
                    height={20}
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                           bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100
                           focus:ring-2 focus:ring-primary-200 focus:border-transparent
                           placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                I&apos;m interested in
              </label>
              <select
                id="interests"
                name="interests"
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                         bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100
                         focus:ring-2 focus:ring-primary-200 focus:border-transparent"
              >
                <option value="all">All Topics</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="backend">Backend Development</option>
                <option value="devops">DevOps & Cloud</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="interview">Interview Preparation</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-200 hover:bg-primary-300 text-white rounded-lg 
                       transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2530/2530914.png"
                alt="Subscribe"
                width={24}
                height={24}
              />
              Subscribe Now
            </button>
          </form>
          <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 mt-6">
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
            . You can unsubscribe at any time.
          </p>
        </div>

        {/* Features */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Why Subscribe?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="Weekly"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                  Weekly Updates
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Fresh content every week covering the latest in programming and technology
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991110.png"
                  alt="Tips"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                  Pro Tips & Tricks
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Expert advice to improve your development workflow and productivity
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991112.png"
                  alt="News"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                  Tech Industry News
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Stay updated with the latest trends and technologies in software development
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3074/3074767.png"
                  alt="Exclusive"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                  Exclusive Resources
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Access to subscriber-only tutorials, code snippets, and downloadable resources
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/7656/7656139.png"
                  alt="Interview"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                  Interview Preparation
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Curated interview questions and career advice to help you land your dream job
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png"
                  alt="Community"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                  Community Access
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Join our community of developers and get your questions answered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What Subscribers Say
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-neutral-600 dark:text-neutral-300 italic mb-2">
                &quot;Best programming newsletter I&apos;ve subscribed to. The tutorials are practical and easy to follow.&quot;
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                - Priya Sharma, Full-Stack Developer
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-neutral-600 dark:text-neutral-300 italic mb-2">
                &quot;The weekly tips have significantly improved my coding practices. Highly recommended!&quot;
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                - Rajesh Kumar, Software Engineer
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-neutral-600 dark:text-neutral-300 italic mb-2">
                &quot;Great content for both beginners and experienced developers. The interview prep section helped me ace my interviews!&quot;
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                - Ananya Patel, Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

