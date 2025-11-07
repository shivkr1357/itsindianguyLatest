const NodeJSPerformanceContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-emerald-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Performance optimization is crucial for Node.js applications serving millions of requests. Learn advanced techniques to maximize your application&apos;s throughput, reduce latency, and scale efficiently.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-emerald-500">
          Performance Optimization Strategies
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Event Loop Optimization
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Avoid blocking operations</li>
              <li>• Use async/await properly</li>
              <li>• Implement worker threads for CPU-intensive tasks</li>
            </ul>
          </div>
          <div className="p-5 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">💾</span>
              Memory Management
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Monitor memory leaks</li>
              <li>• Optimize garbage collection</li>
              <li>• Use streaming for large data</li>
            </ul>
          </div>
          <div className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">🗄️</span>
              Database Optimization
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Implement connection pooling</li>
              <li>• Use query optimization</li>
              <li>• Add proper indexing</li>
            </ul>
          </div>
          <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">📦</span>
              Caching Strategies
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Implement Redis caching</li>
              <li>• Use CDN for static assets</li>
              <li>• Enable HTTP caching headers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-emerald-500">
          Monitoring & Profiling
        </h2>
        <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl">
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Effective monitoring is essential for identifying bottlenecks and ensuring optimal performance. Use these tools:
          </p>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-neutral-900 rounded-lg">
              <span className="text-xl">📊</span>
              <span className="font-semibold">New Relic / Datadog - Application monitoring</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-neutral-900 rounded-lg">
              <span className="text-xl">🔍</span>
              <span className="font-semibold">Node.js Profiler - Performance profiling</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-neutral-900 rounded-lg">
              <span className="text-xl">📈</span>
              <span className="font-semibold">PM2 - Process management & monitoring</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🚀</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Optimize for Scale</h2>
            <p className="text-lg leading-relaxed text-emerald-50">
              By implementing these performance optimization techniques, you can significantly improve your Node.js application&apos;s throughput and response times, ensuring it scales efficiently under load.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NodeJSPerformanceContent;

