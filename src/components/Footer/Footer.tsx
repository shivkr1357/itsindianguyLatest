import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "@/config/config";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-200 via-blue-500 to-purple-500" />
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-primary-200 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">I</span>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-200 to-blue-500 bg-clip-text text-transparent">
                ItsIndianGuy
              </span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Empowering developers with comprehensive tutorials, cutting-edge insights, and interview preparation resources.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Active & Growing Community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-neutral-800 dark:text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-200 to-blue-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/interview-qa"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Interview Q&A
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-neutral-800 dark:text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/documentation"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/memes"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Memes
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-all hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-neutral-800 dark:text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Stay Connected
            </h3>
            
            {/* Newsletter signup */}
            <div className="mb-6">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
                Subscribe for weekly updates
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-200 to-blue-500 hover:from-primary-300 hover:to-blue-600 text-white rounded-lg transition-all hover:scale-105 shadow-md hover:shadow-lg text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Subscribe Now
              </Link>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Follow us on social media</p>
              <div className="flex flex-wrap gap-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-200 transition-all hover:scale-110 hover:shadow-lg"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-5 h-5"
                      style={{ color: social.color }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © {new Date().getFullYear()} ItsIndianGuy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">Made with</span>
            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
