"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: "all",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setMessage({
        type: "success",
        text: "Successfully subscribed! Check your email for confirmation.",
      });
      setFormData({ name: "", email: "", interests: "all" });
    } catch (error: any) {
      setMessage({
        type: "error",
        text: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200"
              : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          value={formData.interests}
          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
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
        disabled={loading}
        className="w-full px-6 py-3 bg-primary-200 hover:bg-primary-300 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg 
                 transition-colors font-medium flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Subscribing...
          </>
        ) : (
          <>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2530/2530914.png"
              alt="Subscribe"
              width={24}
              height={24}
            />
            Subscribe Now
          </>
        )}
      </button>
    </form>
  );
}

