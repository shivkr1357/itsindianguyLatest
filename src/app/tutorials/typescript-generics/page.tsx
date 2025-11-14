import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Master TypeScript Generics - Advanced Tutorial | ItsIndianGuy",
  description: "Deep dive into TypeScript generics with practical examples. Learn how to write reusable, type-safe code with generic functions, classes, and interfaces.",
  keywords: "TypeScript generics, TypeScript tutorial, type parameters, generic functions, generic classes, TypeScript advanced",
};

export default function TypeScriptGenericsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/tutorials"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
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
            Back to Tutorials
          </Link>
          
          <Link
            href="/tutorials/typescript-generics/content"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Tutorial
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
              alt="TypeScript Generics"
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
              30 min
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
              TypeScript
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Master TypeScript Generics
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Write flexible, reusable, and type-safe code with TypeScript generics
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Introduction
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Generics are one of TypeScript&apos;s most powerful features, allowing you to create reusable components that work with multiple types while maintaining type safety. They enable you to write flexible code without sacrificing the benefits of static typing.
            </p>
            <p>
              In this advanced tutorial, you&apos;ll learn how to leverage generics to create robust, maintainable code. We&apos;ll explore generic functions, classes, interfaces, and advanced patterns that will elevate your TypeScript skills to the next level.
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Understanding generic type parameters",
              "Generic functions and methods",
              "Generic interfaces and type aliases",
              "Generic classes and inheritance",
              "Constraints on generics",
              "Multiple type parameters",
              "Default generic types",
              "Generic utility types",
              "Conditional types with generics",
              "Real-world use cases and patterns"
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
              <span>Solid understanding of TypeScript basics</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Familiarity with TypeScript types and interfaces</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>Experience with JavaScript functions and classes</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>TypeScript development environment set up</span>
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
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">1. Introduction to Generics</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Understand why generics exist and the problems they solve</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">2. Generic Functions</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Create flexible functions that work with multiple types</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">3. Generic Interfaces & Types</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Define reusable type structures with generics</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">4. Generic Classes</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Build type-safe classes with generic parameters</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">5. Generic Constraints</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Restrict generic types with extends keyword</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">6. Advanced Patterns</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Explore conditional types, mapped types, and utility types</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">7. Real-World Examples</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Apply generics to practical scenarios and use cases</p>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Key Concepts
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                Type Parameters
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Generic type parameters (like &lt;T&gt;) act as placeholders for types that will be specified when the generic is used. They provide flexibility while maintaining type safety.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                Type Inference
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                TypeScript can often infer generic types from usage, making your code cleaner while still providing full type checking. Understanding when inference works is crucial.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                Generic Constraints
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Constraints allow you to restrict what types can be used with generics, ensuring that generic types have certain properties or methods available.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                Utility Types
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                TypeScript provides built-in generic utility types like Partial&lt;T&gt;, Pick&lt;T, K&gt;, and Omit&lt;T, K&gt; that showcase the power of generics in creating reusable type transformations.
              </p>
            </div>
          </div>
        </div>

        {/* Common Patterns */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Common Generic Patterns
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Identity Function</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">A function that returns the same type it receives, preserving type information</p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Generic Data Structures</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">Arrays, maps, and custom collections that work with any type</p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">API Response Handlers</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">Type-safe functions for handling different API response types</p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Factory Functions</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">Functions that create instances of different types based on parameters</p>
            </div>
          </div>
        </div>

        {/* Start Tutorial */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Master Generics?
            </h2>
            <p className="text-xl text-blue-50 mb-6">
              Follow our step-by-step guide with complete code examples
            </p>
            <Link
              href="/tutorials/typescript-generics/content"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Tutorial
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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
              <span>TypeScript Handbook - Generics</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>Advanced TypeScript Patterns</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>TypeScript Deep Dive - Generics</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span>Type Challenges for Practice</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

