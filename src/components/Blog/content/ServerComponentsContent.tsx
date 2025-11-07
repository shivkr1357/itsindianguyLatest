const ServerComponentsContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-cyan-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          React Server Components represent a paradigm shift in how we build React applications. Learn how to leverage this powerful feature to create faster, more efficient applications with improved user experience.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-cyan-500">
          What Are Server Components?
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Server Components are React components that render on the server and send only the HTML to the client, eliminating the need for JavaScript on the client side for that component.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              Benefits
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Zero bundle size for server components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Direct database access without API layer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Automatic code splitting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Improved initial page load</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Use Cases
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Data fetching and rendering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Static content rendering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Large dependency tree components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Accessing backend resources</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-cyan-500">
          Server vs Client Components
        </h2>
        <div className="grid gap-4">
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🖥️</span>
              Server Components (Default)
            </h3>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <p>• Can fetch data directly from databases</p>
              <p>• Can use backend-only libraries</p>
              <p>• Reduce client-side JavaScript</p>
              <p>• Cannot use hooks or browser APIs</p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">💻</span>
              Client Components (&quot;use client&quot;)
            </h3>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <p>• Use React hooks and state</p>
              <p>• Add interactivity and event listeners</p>
              <p>• Access browser APIs</p>
              <p>• Use React context</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-cyan-500">
          Best Practices
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Default to Server</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Start with Server Components and only use Client Components when needed
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <div className="text-3xl mb-3">🌳</div>
            <h3 className="font-bold text-lg mb-2">Component Composition</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Pass Server Components as children to Client Components
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2">Optimize Data Fetching</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Fetch data at the component level for better parallelization
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🚀</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Embrace the Future</h2>
            <p className="text-lg leading-relaxed text-cyan-50">
              React Server Components represent the future of React development. By understanding when and how to use them, you can build faster, more efficient applications that provide a better user experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServerComponentsContent;

