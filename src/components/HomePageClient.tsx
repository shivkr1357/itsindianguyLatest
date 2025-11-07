"use client";
import { useEffect, useState } from "react";
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
      <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-50 mb-6">
                Your Gateway to
                <span className="text-primary-200 block">Tech Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8">
                Discover comprehensive programming tutorials, engaging tech
                blogs, and cutting-edge interview preparation resources all in
                one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/tutorials"
                  className="px-6 py-3 bg-primary-200 hover:bg-primary-300 text-white rounded-lg transition-colors text-center"
                >
                  Get Started
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 border border-primary-200 text-primary-200 hover:bg-primary-200/10 rounded-lg transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 to-transparent rounded-2xl -z-10" />
              {/* Add your hero image here */}
            </div>
          </div>
        </section>

        {/* Featured Blogs Section */}
        <section className="bg-white dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
              Featured Programming Blog Posts
            </h2>
            <FeaturedBlogs />
          </div>
        </section>

        {/* Dev Cards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
              Latest Programming Technologies
            </h2>
            <DevCards />
          </div>
        </section>

        {/* Project Showcase */}
        <section className="bg-white dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
              Featured Programming Projects
            </h2>
            <ProjectShowcase />
          </div>
        </section>

        {/* Latest Tutorials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
              Latest Programming Tutorials
            </h2>
            <LatestTutorials />
          </div>
        </section>

        {/* Interview Section */}
        <section className="bg-white dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
              Programming Interview Prep
            </h2>
            <InterviewCard />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AboutCard />
          </div>
        </section>

        {/* GitHub Activity */}
        <section className="bg-white dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
              GitHub Contributions
            </h2>
            <GithubActivity />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
              What Developers Say
            </h2>
            <Testimonials />
          </div>
        </section>

        {/* Social Feed */}
        <section className="bg-white dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-50 mb-12">
              Social Updates
            </h2>
            <SocialFeed />
          </div>
        </section>

        {/* Newsletter & Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
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
            className="fixed bottom-8 right-8 p-3 bg-primary-200 hover:bg-primary-300 text-white rounded-full shadow-lg transition-colors"
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
