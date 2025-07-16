"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto px-4">
      <div className="relative w-full max-w-[300px] mx-auto md:max-w-none aspect-square rounded-lg overflow-hidden">
        <Image
          src="/profile/profile.jpg"
          alt="Profile"
          fill
          sizes="(max-width: 768px) 300px, 400px"
          className="object-cover object-center hover:scale-105 transition-transform duration-300"
          priority
          objectFit="contain"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
          About Me
        </h2>
        <p className="text-base text-neutral-600 dark:text-neutral-300">
          Hi&lsquo; I&apos;m Shiv Shankar Prasad&lsquo; a passionate software
          developer with expertise in web and mobile development. I love
          creating content that helps developers learn and grow in their
          careers.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center px-4 py-2 bg-primary-200 text-white rounded-lg hover:bg-primary-300 transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-4 py-2 border border-primary-200 text-primary-200 rounded-lg hover:bg-primary-200/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
