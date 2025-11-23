import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GraphQL vs REST API - Complete Comparison Guide | ItsIndianGuy",
  description: "Comparing GraphQL and REST for modern APIs. Learn the differences, advantages, and when to use each approach for your API development.",
  keywords: "GraphQL, REST API, API design, GraphQL vs REST, API development, modern APIs",
};

export default function GraphQLvsRESTBlogPost() {
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
              src="https://cdn-icons-png.flaticon.com/512/8297/8297437.png"
              alt="GraphQL vs REST"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            GraphQL vs REST API
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2024-11-28">Nov 28, 2024</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Choosing between GraphQL and REST is one of the most important architectural decisions when building modern APIs. Both have their strengths and ideal use cases. This comprehensive guide will help you understand the differences and make an informed decision for your next project.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              What is REST?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              REST (Representational State Transfer) is an architectural style that uses HTTP methods and multiple endpoints to access and manipulate resources. It&apos;s been the standard for web APIs for over two decades.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`GET    /api/users          // Get all users
GET    /api/users/123       // Get user by ID
POST   /api/users           // Create user
PUT    /api/users/123       // Update user
DELETE /api/users/123       // Delete user`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              What is GraphQL?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              GraphQL is a query language for APIs developed by Facebook. It provides a single endpoint where clients can request exactly the data they need using a flexible query language.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`query {
  user(id: "123") {
    name
    email
    posts {
      title
      content
    }
  }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Key Differences
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-neutral-600 dark:text-neutral-300 text-sm">
                <thead className="bg-neutral-100 dark:bg-neutral-700">
                  <tr>
                    <th className="p-3 font-semibold">Aspect</th>
                    <th className="p-3 font-semibold">REST</th>
                    <th className="p-3 font-semibold">GraphQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3 font-medium">Endpoints</td>
                    <td className="p-3">Multiple endpoints</td>
                    <td className="p-3">Single endpoint</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3 font-medium">Data Fetching</td>
                    <td className="p-3">Fixed response structure</td>
                    <td className="p-3">Client specifies exact needs</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3 font-medium">Over/Under Fetching</td>
                    <td className="p-3">Common problem</td>
                    <td className="p-3">Eliminated</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3 font-medium">Versioning</td>
                    <td className="p-3">Requires API versions</td>
                    <td className="p-3">Evolves without versions</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3 font-medium">Learning Curve</td>
                    <td className="p-3">Lower</td>
                    <td className="p-3">Higher</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="p-3 font-medium">Caching</td>
                    <td className="p-3">HTTP caching (built-in)</td>
                    <td className="p-3">Requires custom solution</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              GraphQL Advantages
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  1. No Over-fetching or Under-fetching
                </h3>
                <p>
                  Clients request exactly what they need. REST often returns too much data (over-fetching) or requires multiple requests (under-fetching).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  2. Single Request for Complex Data
                </h3>
                <p>
                  Fetch related resources in one query instead of making multiple REST calls. This reduces network overhead significantly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  3. Strong Type System
                </h3>
                <p>
                  GraphQL schemas provide clear contracts between client and server, with built-in validation and introspection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  4. Rapid Product Development
                </h3>
                <p>
                  Frontend teams can iterate quickly without waiting for backend changes. The flexible query language adapts to UI requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              REST Advantages
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  1. Simplicity
                </h3>
                <p>
                  REST is straightforward and widely understood. It leverages standard HTTP methods and status codes, making it intuitive for developers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  2. Built-in HTTP Caching
                </h3>
                <p>
                  REST can leverage standard HTTP caching mechanisms with ETags, Cache-Control headers, and CDNs without additional complexity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  3. Better for Simple CRUD
                </h3>
                <p>
                  For simple create, read, update, delete operations, REST is often more straightforward than GraphQL.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  4. Mature Ecosystem
                </h3>
                <p>
                  REST has been around longer with extensive tooling, documentation, and community support.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              When to Use GraphQL
            </h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Multiple client applications with different data needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Complex, interconnected data relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Need to minimize network requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Rapid frontend development and iteration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>Mobile applications with bandwidth constraints</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              When to Use REST
            </h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Simple, resource-based APIs with clear CRUD operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Need for extensive HTTP caching</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>File uploads and downloads</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Team is more familiar with REST</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Public APIs requiring simple, predictable interfaces</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Can You Use Both?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Absolutely! Many organizations use a hybrid approach:
            </p>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">→</span>
                <span>REST for simple, cacheable operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">→</span>
                <span>GraphQL for complex data fetching and real-time features</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">→</span>
                <span>REST for public APIs, GraphQL for internal services</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Conclusion
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              There&apos;s no universal winner between GraphQL and REST. The choice depends on your specific requirements, team expertise, and use case. REST excels in simplicity and caching, while GraphQL shines in flexibility and efficiency. Evaluate your project needs carefully and choose the approach that best serves your users and development team.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

