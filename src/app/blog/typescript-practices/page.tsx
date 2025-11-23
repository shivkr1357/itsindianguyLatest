import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TypeScript Best Practices - Essential Patterns | ItsIndianGuy",
  description: "Essential TypeScript patterns and practices for better code. Learn advanced TypeScript techniques to write safer, more maintainable applications.",
  keywords: "TypeScript best practices, TypeScript patterns, TypeScript tips, type safety, TypeScript advanced",
};

export default function TypeScriptPracticesBlogPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <header className="mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
              alt="TypeScript Best Practices"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            TypeScript Best Practices
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2024-12-08">Dec 8, 2024</time>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              TypeScript has become the de facto standard for building large-scale JavaScript applications. However, to truly leverage its power, you need to follow best practices that ensure type safety, maintainability, and developer productivity. This guide covers essential patterns that will elevate your TypeScript code.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              1. Enable Strict Mode
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Always enable strict mode in your <code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">tsconfig.json</code>. This enables all strict type-checking options and catches potential bugs early.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "strictFunctionTypes": true
  }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              2. Avoid Using &apos;any&apos;
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              The <code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">any</code> type defeats the purpose of TypeScript. Use <code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">unknown</code> when the type is truly unknown, or define proper types.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-red-600 dark:text-red-400 font-semibold mb-2">❌ Bad:</p>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4">
                  <code className="text-sm text-neutral-300">
{`function process(data: any) {
  return data.value;
}`}
                  </code>
                </div>
              </div>
              <div>
                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">✅ Good:</p>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4">
                  <code className="text-sm text-neutral-300">
{`function process(data: unknown) {
  if (isValidData(data)) {
    return data.value;
  }
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              3. Use Type Inference
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Let TypeScript infer types when possible. Explicit types should be used for function parameters and complex return types, but let the compiler infer simple cases.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-2">⚠️ Over-specified:</p>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4">
                  <code className="text-sm text-neutral-300">
{`const count: number = 5;
const name: string = "John";`}
                  </code>
                </div>
              </div>
              <div>
                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">✅ Better:</p>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4">
                  <code className="text-sm text-neutral-300">
{`const count = 5;
const name = "John";`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              4. Leverage Union Types
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Union types allow a value to be one of several types. They&apos;re powerful for modeling different states and preventing invalid combinations.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4">
              <pre className="text-sm text-neutral-300">
{`type Status = 'idle' | 'loading' | 'success' | 'error';

interface ApiState {
  status: Status;
  data?: any;
  error?: Error;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              5. Create Reusable Generic Types
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Generics make your code flexible and reusable while maintaining type safety.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4">
              <pre className="text-sm text-neutral-300">
{`type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

async function fetchUser(): Promise<ApiResponse<User>> {
  // Implementation
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              6. Use Utility Types
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              TypeScript provides built-in utility types that help transform types. Learn and use them effectively.
            </p>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li><code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">Partial&lt;T&gt;</code> - Makes all properties optional</li>
              <li><code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">Required&lt;T&gt;</code> - Makes all properties required</li>
              <li><code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">Pick&lt;T, K&gt;</code> - Creates a type by picking specific properties</li>
              <li><code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">Omit&lt;T, K&gt;</code> - Creates a type by omitting specific properties</li>
              <li><code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">Record&lt;K, T&gt;</code> - Creates an object type with specific keys</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              7. Type Guards for Runtime Checks
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Use type guards to narrow types at runtime and provide type safety for dynamic data.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4">
              <pre className="text-sm text-neutral-300">
{`function isUser(obj: any): obj is User {
  return 'id' in obj && 'name' in obj && 'email' in obj;
}

if (isUser(data)) {
  // TypeScript knows data is User here
  console.log(data.email);
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              8. Prefer Interfaces for Object Shapes
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Use interfaces for defining object shapes as they can be extended and merged. Use type aliases for unions, intersections, and complex types.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4">
              <pre className="text-sm text-neutral-300">
{`interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  permissions: string[];
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Conclusion
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Following these TypeScript best practices will help you write more maintainable, type-safe code. Remember that TypeScript is a tool to help you catch bugs early and improve developer experience. Embrace its features, and your codebase will thank you.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

