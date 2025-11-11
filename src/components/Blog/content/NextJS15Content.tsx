import CodeBlock from "../CodeBlock";

const NextJS15Content = () => {
  return (
    <>
      {/* Introduction */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-indigo-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          Next.js 15 has arrived with groundbreaking features that push the boundaries of React development. Built on React 19, this release introduces async request APIs, enhanced caching strategies, and significant performance improvements that make building modern web applications faster and more intuitive than ever.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          The Next.js team has focused on developer experience, performance, and stability in this release. From the stable App Router to improved TypeScript support and new experimental features, Next.js 15 represents a major milestone in the framework&apos;s evolution. Whether you&apos;re migrating from Next.js 14 or starting fresh, this release brings powerful tools to build faster, more efficient applications.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          In this comprehensive guide, we&apos;ll explore all the major features, breaking changes, and migration strategies. You&apos;ll learn how to leverage React 19&apos;s new capabilities, optimize your caching strategy, and take advantage of the latest improvements to build production-ready applications with confidence.
        </p>
      </div>

      {/* React 19 Integration */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-indigo-500">
          React 19 Support - The Foundation
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Next.js 15 is built on React 19, bringing all the latest React features to your Next.js applications. React 19 introduces the React Compiler, Actions, improved hydration, and better error handling. These features work seamlessly with Next.js to provide an unparalleled development experience.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">⚛️</span>
              React Compiler
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Automatic optimization of React components without manual memoization. The compiler analyzes your code and applies optimizations automatically.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Reduces need for useMemo/useCallback</li>
              <li>• Better runtime performance</li>
              <li>• Smaller bundle sizes</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎬</span>
              React Actions
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              First-class support for async operations in forms and UI. Actions provide built-in loading states, error handling, and optimistic updates.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Simplified form handling</li>
              <li>• Built-in pending states</li>
              <li>• Better UX with less code</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl border border-pink-200 dark:border-pink-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">💧</span>
              Improved Hydration
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Faster hydration with better error recovery. React 19 handles hydration mismatches more gracefully, reducing client-server inconsistencies.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Faster time to interactive</li>
              <li>• Better error messages</li>
              <li>• Smoother user experience</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20 rounded-xl border border-rose-200 dark:border-rose-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Document Metadata
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Native support for managing title, meta tags, and Open Graph directly in components without useEffect or additional libraries.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Cleaner metadata management</li>
              <li>• Better SEO control</li>
              <li>• Type-safe metadata</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Async Request APIs */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-indigo-500">
          Async Request APIs - Game Changer
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          One of the most significant changes in Next.js 15 is the introduction of async request APIs. Headers, cookies, and params are now accessed asynchronously, aligning with React&apos;s async model and enabling better streaming and performance. While this requires some migration work, it unlocks powerful new capabilities.
        </p>
        <CodeBlock
          title="Async Headers & Cookies"
          code={`import { headers, cookies } from 'next/headers';

export default async function Page() {
  // Access headers asynchronously
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');
  
  // Access cookies asynchronously  
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  
  return <div>User Agent: {userAgent}</div>;
}`}
          className="mb-6"
        />
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          This async approach enables Next.js to optimize data fetching and rendering, reducing time to first byte and improving overall performance. The framework can now stream responses more efficiently, providing a better user experience especially on slower connections.
        </p>
      </section>

      {/* Enhanced Caching */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-indigo-500">
          Smarter Caching Strategy
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Next.js 15 introduces a more intuitive caching system. By default, fetch requests are no longer cached automatically - giving you explicit control over when and how data is cached. This prevents unexpected stale data issues and makes the caching behavior more predictable.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">💾</span>
              Explicit Caching
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use cache: &apos;force-cache&apos; to opt-in to caching. This makes it clear which requests are cached and prevents surprises.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">🔄</span>
              Revalidation
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Fine-grained control over data revalidation with revalidate options and on-demand revalidation for dynamic content.
            </p>
          </div>
        </div>

        <CodeBlock
          title="Fetch with Caching"
          code={`// Cached fetch request
const data = await fetch('https://api.example.com/data', {
  cache: 'force-cache', // Explicit caching
  next: { revalidate: 3600 } // Revalidate every hour
});

// No cache (default in Next.js 15)
const liveData = await fetch('https://api.example.com/live', {
  cache: 'no-store' // Always fresh
});`}
        />
      </section>

      {/* Turbopack Stable */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-indigo-500">
          Turbopack Dev - Production Ready
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Turbopack, the Rust-powered successor to Webpack, is now stable for development in Next.js 15. It delivers dramatically faster builds and hot module replacement (HMR), making your development experience significantly smoother. Early benchmarks show 10x faster updates compared to Webpack in large applications.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-bold text-lg mb-2">10x Faster</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              HMR updates in milliseconds
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl text-center">
            <div className="text-4xl mb-2">🦀</div>
            <h3 className="font-bold text-lg mb-2">Rust Powered</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Built for maximum performance
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-br from-yellow-50 to-lime-50 dark:from-yellow-950/20 dark:to-lime-950/20 rounded-xl text-center">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="font-bold text-lg mb-2">Dev Stable</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Ready for production use
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            <strong>💡 Enable Turbopack:</strong> Add <code className="px-2 py-1 bg-neutral-900 text-green-400 rounded text-xs font-mono">--turbo</code> flag: <code className="px-2 py-1 bg-neutral-900 text-green-400 rounded text-xs font-mono">next dev --turbo</code>
          </p>
        </div>
      </section>

      {/* New Features */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-indigo-500">
          Major New Features
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">🔐</span>
              Enhanced Security Headers
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Improved security with better default headers and easier configuration. Next.js now includes stronger CSP (Content Security Policy) defaults and simplified security header management.
            </p>
            <CodeBlock
              title="next.config.js"
              code={`module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};`}
            />
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Improved Image Component
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              The next/image component gets better with faster loading, improved placeholder support, and better optimization for modern image formats like AVIF.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• AVIF format support out of the box</li>
              <li>• Better placeholder blur generation</li>
              <li>• Improved loading performance</li>
              <li>• Automatic format detection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Breaking Changes */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-indigo-500">
          Breaking Changes & Migration
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Next.js 15 includes some breaking changes, primarily around the async request APIs. Here&apos;s what you need to know to migrate your existing applications smoothly.
        </p>
        
        <div className="space-y-4">
          <div className="p-5 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border-l-4 border-orange-500">
            <h3 className="font-bold text-lg mb-2 text-orange-800 dark:text-orange-300">
              ⚠️ Async Headers & Cookies
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              The headers() and cookies() functions now return Promises. You&apos;ll need to add await when using them in Server Components.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-300">
              ⚠️ Fetch Caching Default
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Fetch requests are no longer cached by default. Add cache: &apos;force-cache&apos; explicitly if you want caching behavior.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-xl border-l-4 border-yellow-500">
            <h3 className="font-bold text-lg mb-2 text-yellow-800 dark:text-yellow-300">
              ⚠️ Route Segment Config
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Some route segment config options have been renamed or deprecated. Check the migration guide for specifics.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Improvements */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-indigo-500">
          Performance Enhancements
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Beyond the headline features, Next.js 15 includes numerous performance improvements across the board. From faster builds to optimized runtime performance, every aspect of the framework has been refined for production use at scale.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🚀 Faster Builds</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Improved build performance with better tree shaking, code splitting, and bundle optimization. Production builds are 20-30% faster.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">⚡ Runtime Optimizations</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Reduced overhead in the Next.js runtime, resulting in faster page loads and better Time to Interactive (TTI) metrics.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">📦 Smaller Bundles</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Better tree shaking and dead code elimination result in smaller JavaScript bundles sent to clients.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🎯 Memory Usage</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Optimized memory consumption during builds and runtime, allowing larger applications to build more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Upgrade Guide */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-indigo-500">
          How to Upgrade
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Upgrading to Next.js 15 is straightforward, but requires attention to the breaking changes. Follow this step-by-step guide to ensure a smooth migration from Next.js 14 to 15.
        </p>
        
        <div className="space-y-4">
          <div className="bg-neutral-900 rounded-xl p-6">
            <h3 className="text-green-400 font-bold mb-3">Step 1: Update Dependencies</h3>
            <CodeBlock
              title="Terminal"
              code={`npm install next@latest react@latest react-dom@latest
# or
yarn add next@latest react@latest react-dom@latest
# or  
pnpm add next@latest react@latest react-dom@latest`}
            />
          </div>

          <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Step 2: Update Async APIs</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Add await to headers(), cookies(), and params usage throughout your codebase. Use codemod for automated migration.
            </p>
          </div>

          <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Step 3: Review Caching</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Explicitly add cache: &apos;force-cache&apos; to fetch requests that should be cached. Review your data fetching strategy.
            </p>
          </div>

          <div className="p-5 bg-purple-50 dark:bg-purple-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Step 4: Test Thoroughly</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Run your application locally with Turbopack (next dev --turbo), test all features, and run your test suite before deploying.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🚀</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Embrace the Future</h2>
            <p className="text-lg leading-relaxed text-indigo-50 mb-4">
              Next.js 15 represents a major leap forward with React 19 integration, async request APIs, and Turbopack stability. While the breaking changes require some migration effort, the performance and developer experience improvements make it well worth the upgrade.
            </p>
            <p className="text-indigo-100">
              Start experimenting with Next.js 15 today in a new project, then plan your migration strategy for existing applications. The future of React development is here, and it&apos;s faster, more powerful, and more intuitive than ever!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextJS15Content;

