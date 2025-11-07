const ReactPerformanceContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-cyan-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          Performance optimization is crucial for creating smooth, responsive React applications that delight users. Learn essential techniques, tools, and strategies to make your React apps blazing fast, from basic optimizations to advanced patterns used by top tech companies.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          In today&apos;s web landscape, users expect instant interactions and smooth animations. Even a delay of 100 milliseconds can significantly impact user satisfaction and conversion rates. Studies show that a one-second delay in page load time can reduce conversions by 7%. For React applications, this means every unnecessary re-render, every unoptimized image, and every blocking operation directly affects your bottom line.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          The good news is that React provides powerful tools and patterns for optimization. By understanding how React&apos;s rendering works and applying the right techniques at the right time, you can dramatically improve your application&apos;s performance. This guide will walk you through everything from identifying performance bottlenecks to implementing advanced optimization strategies that scale with your application. Remember, premature optimization is the root of all evil, so always measure first, then optimize based on real data.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-cyan-500">
          React Performance Fundamentals
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
          Before diving into optimization techniques, it&apos;s essential to understand how React rendering works. React uses a virtual DOM to efficiently update the actual DOM, but unnecessary re-renders can still cause performance issues. The virtual DOM is an in-memory representation of the real DOM, and React uses a diffing algorithm to compare the current virtual DOM with the new one after a state change.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          When a component updates, React recursively renders all child components by default. This means even if a child component&apos;s props haven&apos;t changed, it will still re-render if its parent renders. For small applications, this isn&apos;t noticeable, but as your component tree grows, these unnecessary re-renders accumulate and can cause significant performance degradation. Understanding this behavior is the first step toward optimization.
        </p>
        <div className="grid gap-4">
          <div className="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">⚡ Understanding Re-renders</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              A component re-renders when its props change, state changes, parent re-renders, or context values change. Each unnecessary re-render costs performance.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🎯 The Rendering Process</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              React goes through: Render phase (computing changes), Reconciliation (diffing), and Commit phase (updating DOM). Optimize each phase for best results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-cyan-500">
          Essential Optimization Techniques
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">🎭</span>
              React.memo() - Prevent Unnecessary Re-renders
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Wrap functional components with React.memo() to skip rendering when props haven&apos;t changed. This is especially useful for expensive components.
            </p>
            <div className="bg-neutral-900 rounded-xl p-4">
              <code className="text-green-400 text-xs font-mono">
{`const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
  return <div>{/* ... */}</div>;
});

// With custom comparison
const MemoizedComponent = React.memo(
  ({ user }) => <div>{user.name}</div>,
  (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
);`}
              </code>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">🪝</span>
              useMemo() - Memoize Expensive Calculations
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Cache the result of expensive computations and only recalculate when dependencies change. Perfect for complex filtering, sorting, or transformations.
            </p>
            <div className="bg-neutral-900 rounded-xl p-4">
              <code className="text-green-400 text-xs font-mono">
{`function DataTable({ data, filters }) {
  // Only recalculate when data or filters change
  const filteredData = useMemo(() => {
    return data.filter(item => 
      filters.every(filter => filter.test(item))
    );
  }, [data, filters]);

  return <Table data={filteredData} />;
}`}
              </code>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              useCallback() - Stabilize Function References
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Prevent child components from re-rendering by maintaining stable callback references. Essential when passing callbacks to memoized children.
            </p>
            <div className="bg-neutral-900 rounded-xl p-4">
              <code className="text-green-400 text-xs font-mono">
{`function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Stable reference

  return <MemoizedChild onClick={handleClick} />;
}`}
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-cyan-500">
          Advanced Optimization Patterns
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-3">🌊 Virtualization</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Render only visible items in long lists using libraries like react-window or react-virtualized.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Dramatically reduces DOM nodes</li>
              <li>• Smooth scrolling for huge lists</li>
              <li>• 10x+ performance improvement</li>
            </ul>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-bold text-lg mb-3">⏳ Code Splitting</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Split your bundle and lazy load components with React.lazy() and Suspense.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Smaller initial bundle size</li>
              <li>• Faster first paint</li>
              <li>• Load on demand</li>
            </ul>
          </div>

          <div className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
            <h3 className="font-bold text-lg mb-3">🎯 State Optimization</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Keep state as local as possible and lift up only when needed.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Minimize re-render scope</li>
              <li>• Use atomic state updates</li>
              <li>• Consider state management tools</li>
            </ul>
          </div>

          <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h3 className="font-bold text-lg mb-3">🔄 Debouncing & Throttling</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Control expensive operations triggered by user input or events.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Reduce API calls</li>
              <li>• Smooth UI interactions</li>
              <li>• Better UX</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-cyan-500">
          Performance Measurement & Tools
        </h2>
        
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🔬</span>
              React DevTools Profiler
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              The Profiler tab in React DevTools helps identify performance bottlenecks by recording and analyzing component renders.
            </p>
            <div className="grid md:grid-cols-3 gap-2">
              <div className="p-3 bg-white dark:bg-neutral-900 rounded text-xs">
                <strong>Flame Graph:</strong> Visualize render times
              </div>
              <div className="p-3 bg-white dark:bg-neutral-900 rounded text-xs">
                <strong>Ranked:</strong> See slowest components
              </div>
              <div className="p-3 bg-white dark:bg-neutral-900 rounded text-xs">
                <strong>Interactions:</strong> Track user interactions
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Chrome DevTools Performance
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use Chrome&apos;s Performance tab to analyze runtime performance, identify long tasks, and measure FPS. Look for yellow/red indicators showing performance issues.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Lighthouse Audits
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Run Lighthouse audits to get performance scores and actionable recommendations. Aim for 90+ performance score in production.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-cyan-500">
          Common Performance Anti-Patterns
        </h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold mb-2 text-red-800 dark:text-red-300">❌ Creating Functions in Render</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Avoid creating new function instances on every render. Use useCallback or move functions outside component.
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold mb-2 text-red-800 dark:text-red-300">❌ Inline Object/Array Props</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Passing inline objects/arrays as props creates new references, causing unnecessary re-renders in memoized children.
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold mb-2 text-red-800 dark:text-red-300">❌ Massive Component Trees</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Break down large components into smaller, focused ones. This improves reusability and makes optimization easier.
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold mb-2 text-red-800 dark:text-red-300">❌ Unnecessary Context Usage</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Context causes all consumers to re-render. Split contexts or use composition to minimize impact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🚀</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Optimize for Real Users</h2>
            <p className="text-lg leading-relaxed text-cyan-50 mb-4">
              By applying these optimization techniques strategically, you can significantly improve your React application&apos;s performance and user experience. Remember: measure first, optimize second!
            </p>
            <p className="text-cyan-100">
              Performance optimization is an ongoing process. Profile regularly, address bottlenecks as they appear, and always consider the user experience impact of your optimizations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactPerformanceContent;
