'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useThemeState } from "@/context/ThemeContext";
import Search from '../ui/Search';
import ThemeSwitcher from '../ui/ThemeSwitcher';

export default function Navbar() {
  const { customTheme, toggleTheme } = useThemeState();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to check if link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-200">
              YourLogo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Search />
            <ThemeSwitcher />
            <Link 
              href="/blog" 
              className={`transition-colors font-medium ${
                isActive('/blog')
                  ? 'text-primary-200 dark:text-primary-200 border-b-2 border-primary-200'
                  : 'text-neutral-600 hover:text-primary-200 dark:text-neutral-300 dark:hover:text-primary-200'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/tutorials" 
              className={`transition-colors font-medium ${
                isActive('/tutorials')
                  ? 'text-primary-200 dark:text-primary-200 border-b-2 border-primary-200'
                  : 'text-neutral-600 hover:text-primary-200 dark:text-neutral-300 dark:hover:text-primary-200'
              }`}
            >
              Tutorials
            </Link>
            <Link 
              href="/resources" 
              className={`transition-colors font-medium ${
                isActive('/resources')
                  ? 'text-primary-200 dark:text-primary-200 border-b-2 border-primary-200'
                  : 'text-neutral-600 hover:text-primary-200 dark:text-neutral-300 dark:hover:text-primary-200'
              }`}
            >
              Resources
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors font-medium ${
                isActive('/about')
                  ? 'text-primary-200 dark:text-primary-200 border-b-2 border-primary-200'
                  : 'text-neutral-600 hover:text-primary-200 dark:text-neutral-300 dark:hover:text-primary-200'
              }`}
            >
              About
            </Link>
            <Link 
              href="/hire-me" 
              className={`transition-colors font-medium ${
                isActive('/hire-me')
                  ? 'text-primary-200 dark:text-primary-200 border-b-2 border-primary-200'
                  : 'text-neutral-600 hover:text-primary-200 dark:text-neutral-300 dark:hover:text-primary-200'
              }`}
            >
              Hire Me
            </Link>
            
            <Link href="/newsletter" className="px-4 py-2 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors">
              Subscribe
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-primary-200 dark:text-neutral-300 dark:hover:text-primary-200"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-900 shadow-lg">
          <Link 
            href="/blog" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/blog')
                ? 'bg-primary-200/10 text-primary-200 dark:text-primary-200'
                : 'text-neutral-600 hover:text-primary-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-primary-200 dark:hover:bg-neutral-800'
            }`}
          >
            Blog
          </Link>
          <Link 
            href="/tutorials" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/tutorials')
                ? 'bg-primary-200/10 text-primary-200 dark:text-primary-200'
                : 'text-neutral-600 hover:text-primary-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-primary-200 dark:hover:bg-neutral-800'
            }`}
          >
            Tutorials
          </Link>
          <Link 
            href="/resources" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/resources')
                ? 'bg-primary-200/10 text-primary-200 dark:text-primary-200'
                : 'text-neutral-600 hover:text-primary-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-primary-200 dark:hover:bg-neutral-800'
            }`}
          >
            Resources
          </Link>
          <Link 
            href="/about" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/about')
                ? 'bg-primary-200/10 text-primary-200 dark:text-primary-200'
                : 'text-neutral-600 hover:text-primary-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-primary-200 dark:hover:bg-neutral-800'
            }`}
          >
            About
          </Link>
          <Link 
            href="/hire-me" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/hire-me')
                ? 'bg-primary-200/10 text-primary-200 dark:text-primary-200'
                : 'text-neutral-600 hover:text-primary-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-primary-200 dark:hover:bg-neutral-800'
            }`}
          >
            Hire Me
          </Link>
          <div className="flex items-center justify-between px-3 py-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
            >
              {customTheme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Link href="/newsletter" className="px-4 py-2 bg-primary-200 hover:bg-primary-300 text-white rounded-lg">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 