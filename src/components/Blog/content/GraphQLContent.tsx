const GraphQLContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-pink-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Choosing between GraphQL and REST is one of the most important architectural decisions for your API. This comprehensive guide will help you understand both approaches and make the right choice for your project.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-pink-500">
          GraphQL vs REST: The Key Differences
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-2xl">
                🎯
              </div>
              <div>
                <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-2">GraphQL</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Single endpoint, flexible queries</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Request exactly what you need</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>No over-fetching or under-fetching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Strongly typed schema</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Real-time subscriptions built-in</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-2xl">
                📡
              </div>
              <div>
                <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-2">REST</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Multiple endpoints, standardized</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Well-established and widely understood</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Built-in HTTP caching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Simpler to get started</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Better for simple CRUD operations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-pink-500">
          When to Choose GraphQL
        </h2>
        <div className="grid gap-4">
          <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>📱</span> Mobile Applications
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Perfect for mobile apps where bandwidth is limited and you need precise data fetching
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>🔄</span> Complex Data Requirements
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Ideal when frontend needs vary greatly and you want to avoid multiple API calls
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>⚡</span> Real-time Features
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Built-in subscription support makes real-time features easier to implement
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-pink-500">
          When to Choose REST
        </h2>
        <div className="grid gap-4">
          <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>🚀</span> Simple CRUD APIs
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              REST is simpler and faster to implement for straightforward CRUD operations
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>💾</span> Caching Requirements
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              HTTP caching works out-of-the-box with REST, making it great for cacheable data
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>👥</span> Team Familiarity
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Most developers are familiar with REST, reducing the learning curve
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Make the Right Choice</h2>
            <p className="text-lg leading-relaxed text-purple-50">
              Both GraphQL and REST have their place in modern application development. Choose based on your specific requirements, team expertise, and project constraints. Sometimes, a hybrid approach using both can be the best solution!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GraphQLContent;

