import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "@/config/config";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary-200">
              ItsIndianGuy
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400">
              Empowering developers with knowledge and insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documentation"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-200 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="w-6 h-6"
                    style={{ color: social.color }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-center text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} ItsIndianGuy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
