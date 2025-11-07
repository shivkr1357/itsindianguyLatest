const MongoDBContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-green-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          MongoDB is a powerful NoSQL database that scales with your application. Master MongoDB from fundamentals to advanced topics including aggregation pipelines, indexing strategies, and sharding for distributed systems.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          MongoDB Fundamentals
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">📄</span>
              Documents & Collections
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              MongoDB stores data in flexible JSON-like documents. Collections are groups of documents, similar to tables in SQL.
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              &#123; name: &quot;John&quot;, age: 30 &#125;
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              Querying Data
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Powerful query language with support for complex queries, filtering, sorting, and pagination.
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              find(&#123; age: &#123; $gt: 25 &#125; &#125;)
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              Relationships
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Model relationships using embedded documents or references. Choose based on your access patterns.
            </p>
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>• Embedding for one-to-few</li>
              <li>• References for one-to-many</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Indexing
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Create indexes to dramatically improve query performance. Essential for production applications.
            </p>
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>• Single field indexes</li>
              <li>• Compound indexes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-green-500">
          Advanced Topics
        </h2>
        <div className="grid gap-4">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              Aggregation Pipeline
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Process data through a pipeline of stages to perform complex transformations and analysis.
            </p>
            <div className="grid md:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-white dark:bg-neutral-900 rounded">$match - Filter</div>
              <div className="p-2 bg-white dark:bg-neutral-900 rounded">$group - Aggregate</div>
              <div className="p-2 bg-white dark:bg-neutral-900 rounded">$sort - Order</div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🌐</span>
              Sharding & Replication
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Scale horizontally with sharding and ensure high availability with replica sets. Essential for large-scale applications.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              Performance Optimization
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use explain() to analyze queries, create appropriate indexes, and monitor with MongoDB Atlas or Ops Manager.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🗄️</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Master MongoDB</h2>
            <p className="text-lg leading-relaxed text-green-50">
              MongoDB&apos;s flexibility and scalability make it ideal for modern applications. Master these concepts to build robust, high-performance database solutions that scale with your needs!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MongoDBContent;

