import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React Performance Optimization - Advanced Tutorial | ItsIndianGuy",
  description: "Master React performance optimization techniques including memoization, code splitting, lazy loading, and profiling to build lightning-fast applications.",
  keywords: "React performance, React optimization, useMemo, useCallback, React.memo, code splitting, lazy loading, React profiler",
};

export default function ReactPerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
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
              src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
              alt="React Performance"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full text-sm font-medium">
              Advanced
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
              40 min
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
              React
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            React Performance Optimization
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Build lightning-fast React applications with advanced optimization techniques
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Introduction
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Performance is crucial for delivering excellent user experiences. Slow applications frustrate users and hurt engagement. In this advanced tutorial, you'll learn proven techniques to optimize React applications for maximum performance.
            </p>
            <p>
              We'll cover everything from identifying performance bottlenecks to implementing sophisticated optimization strategies. You'll learn about memoization, code splitting, virtualization, and profiling tools that professional developers use to build fast, responsive applications.
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Identifying performance bottlenecks",
              "React.memo for component memoization",
              "useMemo and useCallback hooks",
              "Code splitting with React.lazy",
              "Dynamic imports and lazy loading",
              "List virtualization techniques",
              "Debouncing and throttling",
              "React Profiler and DevTools",
              "Optimizing re-renders",
              "Bundle size optimization",
              "Image optimization strategies",
              "Web Vitals and metrics"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-neutral-600 dark:text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Prerequisites
          </h2>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Strong understanding of React fundamentals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Experience with React Hooks (useState, useEffect, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Familiarity with JavaScript ES6+ features</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>React DevTools extension installed</span>
            </li>
          </ul>
        </div>

        {/* Tutorial Sections */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Tutorial Outline
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">1. Understanding React Rendering</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Learn how React's rendering process works and what triggers re-renders</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">2. Profiling Your Application</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Use React DevTools Profiler to identify performance issues</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">3. Memoization Techniques</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Master React.memo, useMemo, and useCallback for optimal performance</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">4. Code Splitting</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Reduce initial bundle size with dynamic imports and lazy loading</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">5. List Optimization</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Implement windowing and virtualization for long lists</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">6. State Management</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Optimize state updates and avoid unnecessary re-renders</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">7. Asset Optimization</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Optimize images, fonts, and other static assets</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">8. Measuring Impact</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Use performance metrics to validate optimizations</p>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Key Optimization Techniques
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                React.memo
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Higher-order component that prevents unnecessary re-renders by memoizing the component. It only re-renders when props change, which is especially useful for expensive components.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                useMemo Hook
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Memoizes expensive calculations so they're only recomputed when dependencies change. Perfect for complex computations or transformations that don't need to run on every render.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                useCallback Hook
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Returns a memoized callback function, preventing child components from re-rendering when the function reference doesn't actually change. Essential for optimizing child components.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                Code Splitting
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Splits your bundle into smaller chunks that are loaded on demand. React.lazy and Suspense make this easy, dramatically improving initial load times for large applications.
              </p>
            </div>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Common Performance Pitfalls
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">⚠️ Creating Functions in Render</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">Creating new function instances on every render breaks memoization</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">⚠️ Inline Object Props</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">Passing inline objects as props causes unnecessary re-renders</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">⚠️ Over-Optimization</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">Premature optimization can make code complex without real benefits</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">⚠️ Large Bundle Sizes</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">Not implementing code splitting for large applications</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Additional Resources
          </h2>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>React Official Performance Documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>Web.dev - React Performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>React DevTools Profiler Guide</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>Lighthouse Performance Auditing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>React-Window for Virtualization</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

