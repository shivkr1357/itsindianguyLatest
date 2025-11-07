const NextJS14Content = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-slate-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Next.js 14 introduces groundbreaking features including Turbopack, Server Actions, and improved caching strategies. Discover what&apos;s new and how these features can supercharge your development workflow.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-slate-500">
          Major New Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Turbopack (Beta)
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              700x faster than Webpack, built in Rust for blazing-fast local development. Incremental bundling for instant updates.
            </p>
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>• 5x faster initial startup</li>
              <li>• 10x faster updates with Fast Refresh</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎭</span>
              Server Actions
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Call server-side functions directly from your components without creating API routes. Simplifies data mutations dramatically.
            </p>
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>• No API routes needed</li>
              <li>• Built-in form handling</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">💾</span>
              Partial Prerendering
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Combine static and dynamic rendering in the same route. Get the benefits of both strategies seamlessly.
            </p>
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>• Instant static shell</li>
              <li>• Stream dynamic content</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">📦</span>
              Enhanced Caching
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Improved caching strategies with granular control. Better performance with smarter cache invalidation.
            </p>
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>• Request memoization</li>
              <li>• Full Route Cache</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-slate-500">
          Migration Guide
        </h2>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
          <h3 className="font-bold text-lg mb-4">Upgrading to Next.js 14</h3>
          <div className="bg-neutral-900 rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm font-mono">
              npm install next@latest react@latest react-dom@latest
            </code>
          </div>
          <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">1.</span>
              <span>Update your dependencies to the latest versions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">2.</span>
              <span>Review breaking changes in the migration guide</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">3.</span>
              <span>Test thoroughly before deploying to production</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-500 to-gray-600 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎊</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Upgrade Today</h2>
            <p className="text-lg leading-relaxed text-slate-50">
              Next.js 14 brings significant performance improvements and developer experience enhancements. Upgrade today to take advantage of these powerful new features!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextJS14Content;

