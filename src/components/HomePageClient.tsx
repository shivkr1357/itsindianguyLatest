"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCards/InterviewCard";
import AboutCard from "@/components/LandingPage/AboutCard";
import DevCards from "@/components/LandingPage/DevCards";
import Layout from "@/components/Layout/Layout";
import FeaturedBlogs from "@/components/LandingPage/FeaturedBlogs";
import ProjectShowcase from "@/components/LandingPage/ProjectShowcase";
import Testimonials from "@/components/LandingPage/Testimonials";
import ContactSection from "@/components/LandingPage/ContactSection";
import NewsletterSignup from "@/components/LandingPage/NewsletterSignup";
import LatestTutorials from "@/components/LandingPage/LatestTutorials";
import GithubActivity from "@/components/LandingPage/GithubActivity";
import SocialFeed from "@/components/LandingPage/SocialFeed";
import AdUnit from "@/components/AdSense/AdUnit";

export default function HomePageClient() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-blue-950/20 dark:to-purple-950/10">
        {/* Hero Section */}
        <section className="relative container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32 pt-0 pb-2 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-full border border-primary-200/20 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-200"></span>
                </span>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  New tutorials added weekly
                </span>
              </div>

              {/* Heading with gradient */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-neutral-800 dark:text-neutral-50">
                  Your Gateway to
                </span>
                <span className="block mt-2 bg-gradient-to-r from-primary-200 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Tech Excellence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Discover comprehensive programming tutorials, engaging tech
                blogs, and cutting-edge interview preparation resources all in
                one place.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="text-3xl font-bold text-primary-200">50+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    Tutorials
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="text-3xl font-bold text-blue-500">1000+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    Questions
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="text-3xl font-bold text-purple-500">10k+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    Learners
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/tutorials"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-200 to-blue-500 hover:from-primary-300 hover:to-blue-600 text-white rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 text-center font-semibold"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="/about"
                  className="group px-8 py-4 bg-white dark:bg-neutral-800 border-2 border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white dark:hover:bg-primary-200 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 text-center font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-200/30 to-blue-500/30 rounded-full blur-2xl animate-pulse" />
              <div
                className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "2s" }}
              />

              {/* Image container */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-purple-500/20 rounded-3xl transform rotate-6" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 aspect-square">
                  <Image
                    src="/hero-image.jpg"
                    alt="Professional Woman Developer"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                    quality={90}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-200/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Unit - After Hero */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32 pb-12">
          <AdUnit adSlot="1234567892" adFormat="auto" />
        </section>

        {/* Featured Blogs Section */}
        <section className="relative bg-white dark:bg-neutral-800 py-2 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary-200/10 text-primary-200 rounded-full text-sm font-medium mb-4">
                Latest Content
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                Featured <span className="text-primary-200">Blog Posts</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Deep dives into modern web development, best practices, and
                cutting-edge technologies
              </p>
            </div>
            <FeaturedBlogs />
          </div>
        </section>

        {/* Dev Cards Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium mb-4">
                Explore Topics
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                Development{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                From frontend to backend, cloud to AI - master every aspect of
                modern development
              </p>
            </div>
            <DevCards />
          </div>
        </section>

        {/* Project Showcase */}
        <section className="relative bg-gradient-to-b from-white to-blue-50/30 dark:from-neutral-800 dark:to-blue-950/10 py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium mb-4">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                Featured <span className="text-purple-500">Projects</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Real-world applications built with modern technologies and best
                practices
              </p>
            </div>
            <ProjectShowcase />
          </div>
        </section>

        {/* Latest Tutorials */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-4">
                Learn & Grow
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                Latest <span className="text-green-500">Tutorials</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Step-by-step guides to help you master new technologies and
                advance your career
              </p>
            </div>
            <LatestTutorials />
          </div>
        </section>

        {/* Interview Section */}
        <section className="relative bg-gradient-to-b from-white to-orange-50/20 dark:from-neutral-800 dark:to-orange-950/10 py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium mb-4">
                Career Prep
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                Interview <span className="text-orange-500">Preparation</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Ace your technical interviews with comprehensive Q&A for all
                major technologies
              </p>
            </div>
            <InterviewCard />
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary-200/10 text-primary-200 rounded-full text-sm font-medium mb-4">
                Meet the Creator
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                About <span className="text-primary-200">Me</span>
              </h2>
            </div>
            <AboutCard />
          </div>
        </section>

        {/* GitHub Activity */}
        <section className="relative bg-white dark:bg-neutral-800 py-2">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-neutral-700/10 dark:bg-neutral-500/10 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium mb-4">
                Open Source
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                GitHub{" "}
                <span className="text-neutral-600 dark:text-neutral-400">
                  Activity
                </span>
              </h2>
            </div>
            <GithubActivity />
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-20 bg-gradient-to-b from-neutral-50 to-purple-50/20 dark:from-neutral-900 dark:to-purple-950/10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32 py-2">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium mb-4">
                Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                What <span className="text-purple-500">Developers Say</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Join thousands of developers who have leveled up their skills
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Social Feed */}
        <section className="relative bg-white dark:bg-neutral-800 py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32 py-12">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium mb-4">
                Stay Connected
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                Social <span className="text-blue-500">Updates</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Follow our journey and get real-time updates from our community
              </p>
            </div>
            <SocialFeed />
          </div>
        </section>

        {/* Newsletter & Contact */}
        <section className="relative py-20 bg-gradient-to-b from-neutral-50 via-blue-50/20 to-purple-50/20 dark:from-neutral-900 dark:via-blue-950/10 dark:to-purple-950/10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-20 xl:px-32 py-2">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-primary-200 to-purple-500 bg-clip-text text-transparent">
                  Connect
                </span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Subscribe to our newsletter or reach out with any questions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <NewsletterSignup />
              <ContactSection />
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary-200 to-blue-500 hover:from-primary-300 hover:to-blue-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-50"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </main>
    </Layout>
  );
}
