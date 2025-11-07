import CodeBlock from "../CodeBlock";

const NextJSContent = () => {
  return (
    <>
      {/* Introduction */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-green-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          Next.js 14 brings exciting new features that make building React applications even more powerful and efficient. In this comprehensive guide, we&apos;ll explore the key improvements and how to leverage them in your projects.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Whether you&apos;re building a small personal project or a large-scale enterprise application, Next.js 14 provides the tools and optimizations you need to create fast, scalable web applications. From the revolutionary App Router to built-in Server Components support, this release represents a major leap forward in React development. The framework continues to push the boundaries of what&apos;s possible with React while maintaining an excellent developer experience.
        </p>
      </div>

      {/* What's New Section */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          What&apos;s New in Next.js 14
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          The latest version introduces several groundbreaking features:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="group p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                📁
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                  App Router
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  The new app directory provides a more intuitive way to organize your application with nested layouts and loading states.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                ⚛️
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                  Server Components
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Built-in support for React Server Components enables zero-bundle-size React components that run on the server.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                ⚡
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                  Improved Performance
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Faster builds with Turbopack (alpha) and optimized runtime performance for production deployments.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-800 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                🛠️
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                  Enhanced Developer Experience
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Better error messages, improved debugging tools, and streamlined development workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          Getting Started
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Setting up a new Next.js 14 project is incredibly simple. Use the create-next-app CLI to scaffold your project with all the latest features:
        </p>
        
        <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 border border-neutral-800 dark:border-neutral-700 shadow-inner mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-neutral-500">Terminal</span>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code className="text-green-400 font-mono">
              <span className="text-neutral-500">$</span> npx create-next-app@latest my-app{'\n'}
              <span className="text-neutral-500">$</span> cd my-app{'\n'}
              <span className="text-neutral-500">$</span> npm run dev
            </code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <div className="flex gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-bold text-neutral-800 dark:text-neutral-100 mb-1">Pro Tip</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Use the --typescript flag to set up TypeScript automatically during project creation.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-bold text-neutral-800 dark:text-neutral-100 mb-1">Default Setup</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  The CLI includes all latest features like App Router, Tailwind CSS, and ESLint by default.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          Key Features Deep Dive
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">📁</span>
              App Router Architecture
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              The App Router is built on React Server Components and introduces powerful features like nested layouts, streaming, and Suspense integration. It provides a more intuitive file-based routing system.
            </p>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Nested routes and layouts with shared UI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Loading states and error boundaries out of the box</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Streaming and progressive rendering support</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Performance Optimizations
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Next.js 14 includes significant performance improvements including Turbopack for faster local development and optimized production builds.
            </p>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>5x faster local server startup with Turbopack</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Optimized bundling and code splitting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Improved caching strategies for better performance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* App Router Deep Dive */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          Understanding the App Router
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          The App Router represents a fundamental shift in how we structure Next.js applications. Unlike the traditional Pages Router, the App Router is built on React Server Components and introduces a new file-system convention that makes it easier to build complex applications with nested layouts, loading states, and error boundaries. This new routing paradigm allows for better code organization and more granular control over your application&apos;s behavior.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          With the App Router, each folder in your app directory represents a route segment. Special files like page.tsx, layout.tsx, loading.tsx, and error.tsx give you fine-grained control over the UI and behavior of each route. Layouts can be nested, allowing you to share UI between routes while maintaining their own state and behavior. This makes it incredibly easy to build complex navigation hierarchies without prop drilling or context overuse.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">📂 File Convention</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              page.tsx defines the UI, layout.tsx wraps pages, loading.tsx shows loading states, and error.tsx handles errors gracefully.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🎯 Nested Layouts</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Create layouts that persist across route changes, perfect for sidebars, headers, and shared components.
            </p>
          </div>
        </div>
      </section>

      {/* Server Components Benefits */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          Server Components: Game Changer
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          React Server Components are a revolutionary feature that allows React components to render on the server. This means you can fetch data, access databases, and perform server-side operations directly in your components without needing separate API routes. The server-rendered components send only the resulting HTML to the client, dramatically reducing the JavaScript bundle size and improving performance.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          One of the most powerful aspects of Server Components is that they can fetch data in parallel, eliminating request waterfalls. Instead of waiting for a page to load, then fetching data, then rendering, Server Components can fetch all necessary data concurrently before sending the page to the client. This results in faster page loads and better user experience. Additionally, Server Components can use any backend library without increasing your client bundle size, opening up new possibilities for data fetching and processing.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl text-center">
            <div className="text-3xl mb-2">📦</div>
            <h4 className="font-bold mb-2">Smaller Bundles</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">Reduce client JS by 50-80%</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-bold mb-2">Faster Loads</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">Improved Time to Interactive</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="font-bold mb-2">Better Security</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">Keep secrets on server</p>
          </div>
        </div>
      </section>

      {/* Data Fetching */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          Modern Data Fetching
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Next.js 14 revolutionizes data fetching with native async/await support in Server Components. You can fetch data directly in your components without useEffect or useState. The framework automatically handles request deduplication, caching, and revalidation, making data fetching simpler and more efficient than ever before.
        </p>
        <CodeBlock
          title="Server Component"
          code={`// Server Component with async data fetching
async function BlogPost({ params }) {
  const post = await fetchPost(params.id);
  const comments = await fetchComments(params.id);
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Comments data={comments} />
    </div>
  );
}`}
          className="mb-4"
        />
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          This approach eliminates the complexity of managing loading states, error handling, and data synchronization that was previously required with client-side data fetching. Next.js handles all of this for you, allowing you to focus on building features rather than managing infrastructure.
        </p>
      </section>

      {/* Best Practices */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          Best Practices for Production
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Building production-ready applications requires following best practices that ensure performance, security, and maintainability. Here are the essential practices you should implement in every Next.js 14 project to ensure your application is ready for real-world use.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
              Use Server Components
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Default to Server Components for better performance and smaller bundle sizes. Only use Client Components when you need interactivity, hooks, or browser APIs.
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-xl">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
              Optimize Images
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use the built-in Image component for automatic optimization, lazy loading, and proper sizing. This can improve Largest Contentful Paint by 40%.
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
              Leverage Caching
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Utilize Next.js caching strategies for faster page loads. Implement ISR (Incremental Static Regeneration) for dynamic content that doesn&apos;t change frequently.
            </p>
          </div>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Additionally, always use environment variables for sensitive data, implement proper error handling with error boundaries, and optimize your fonts using next/font for zero layout shift. Run Lighthouse audits regularly to maintain high performance scores, and consider implementing analytics to monitor real-world performance metrics from your users.
        </p>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎉</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Build</h2>
            <p className="text-lg leading-relaxed text-green-50 mb-4">
              Next.js 14 represents a significant step forward in the React ecosystem. With its improved performance, better developer experience, and powerful new features, it&apos;s the perfect choice for building modern web applications.
            </p>
            <p className="text-green-100">
              Start building your next project with Next.js 14 today and experience the future of React development!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextJSContent;
