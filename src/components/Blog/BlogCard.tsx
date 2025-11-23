"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const BlogCard = ({
  title,
  description,
  image,
  author,
  date,
  readTime,
  slug,
}: BlogCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href={`/blog/${slug}`}
      onClick={() => setIsLoading(true)}
      className={`group block h-full flex flex-col bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-neutral-200 dark:border-neutral-700 relative ${
        isLoading ? "scale-95 opacity-75" : ""
      }`}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <svg
              className="animate-spin h-10 w-10 text-green-500"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Loading article...
            </span>
          </div>
        </div>
      )}

      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read More →
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700 mt-auto">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <FontAwesomeIcon
              icon={faUser}
              className="w-3.5 h-3.5 text-green-500"
            />
            <span>{author}</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCalendar} className="w-3.5 h-3.5" />
              <span>
                {new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
