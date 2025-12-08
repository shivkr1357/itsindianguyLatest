import type { Metadata } from "next";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
  title: "React Performance Optimization - Complete Tutorial | ItsIndianGuy",
  description: "Master React performance optimization with practical examples and techniques.",
};

export default function ReactPerformanceContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/tutorials/react-performance"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorial Overview
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            React Performance Optimization
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Build lightning-fast React applications with proven optimization techniques
          </p>
        </header>

        {/* Section 1: React.memo */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 1: Component Memoization with React.memo
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                The Problem: Unnecessary Re-renders
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Without memoization, child components re-render whenever parent re-renders, even if props haven&apos;t changed:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`// ❌ Bad: Child re-renders on every parent update
function ExpensiveChild({ data }) {
  console.log('ExpensiveChild rendered');
  // Expensive calculations here
  return <div>{data.value}</div>;
}

function Parent() {
  const [count, setCount] = useState(0);
  const data = { value: 'constant' };
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <ExpensiveChild data={data} />
      {/* Child re-renders even though data hasn't changed! */}
    </div>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                The Solution: React.memo
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`// ✅ Good: Child only re-renders when props change
const ExpensiveChild = React.memo(function ExpensiveChild({ data }) {
  console.log('ExpensiveChild rendered');
  return <div>{data.value}</div>;
});

// With custom comparison function
const ExpensiveChild = React.memo(
  function ExpensiveChild({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.user.id === nextProps.user.id;
  }
);`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: useMemo */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 2: Memoizing Values with useMemo
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                When to Use useMemo
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Use useMemo for expensive calculations that don&apos;t need to run on every render:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { useMemo } from 'react';

function ProductList({ products, filterText }) {
  // ❌ Bad: Expensive filter runs on every render
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );
  
  // ✅ Good: Filter only runs when dependencies change
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(p => 
      p.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [products, filterText]);
  
  return (
    <div>
      {filteredProducts.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Real-World Examples
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`// Example 1: Expensive computation
function DataAnalysis({ data }) {
  const analysis = useMemo(() => {
    const sum = data.reduce((a, b) => a + b, 0);
    const avg = sum / data.length;
    const max = Math.max(...data);
    const min = Math.min(...data);
    return { sum, avg, max, min };
  }, [data]);
  
  return <AnalysisDisplay {...analysis} />;
}

// Example 2: Stabilizing object references
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  // ✅ Good: Options object stays stable
  const fetchOptions = useMemo(() => ({
    headers: { 'Authorization': \`Bearer \${token}\` },
    method: 'GET'
  }), [token]);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`, fetchOptions)
      .then(res => res.json())
      .then(setUser);
  }, [userId, fetchOptions]);
  
  return <div>{user?.name}</div>;
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: useCallback */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 3: Memoizing Functions with useCallback
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Why useCallback Matters
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { useCallback } from 'react';

const SearchableList = React.memo(function SearchableList({ onSearch }) {
  return <input onChange={(e) => onSearch(e.target.value)} />;
});

function Parent() {
  const [count, setCount] = useState(0);
  
  // ❌ Bad: New function on every render breaks memoization
  const handleSearch = (query) => {
    console.log('Searching:', query);
  };
  
  // ✅ Good: Stable function reference
  const handleSearch = useCallback((query) => {
    console.log('Searching:', query);
  }, []); // Empty deps = function never changes
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <SearchableList onSearch={handleSearch} />
      {/* SearchableList doesn't re-render when count changes */}
    </div>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Practical Examples
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Memoize handlers passed to child components
  const handleAddTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
  }, []);
  
  const handleToggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }, []);
  
  const handleDeleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);
  
  return (
    <div>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList 
        todos={todos} 
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Code Splitting */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 4: Code Splitting with React.lazy
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Lazy Loading Components
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { lazy, Suspense } from 'react';

// ❌ Bad: Load everything upfront
import HeavyChart from './HeavyChart';
import HeavyDataTable from './HeavyDataTable';
import HeavyEditor from './HeavyEditor';

// ✅ Good: Load on demand
const HeavyChart = lazy(() => import('./HeavyChart'));
const HeavyDataTable = lazy(() => import('./HeavyDataTable'));
const HeavyEditor = lazy(() => import('./HeavyEditor'));

function Dashboard() {
  const [activeTab, setActiveTab] = useState('chart');
  
  return (
    <div>
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tab value="chart">Chart</Tab>
        <Tab value="table">Table</Tab>
        <Tab value="editor">Editor</Tab>
      </Tabs>
      
      <Suspense fallback={<LoadingSpinner />}>
        {activeTab === 'chart' && <HeavyChart />}
        {activeTab === 'table' && <HeavyDataTable />}
        {activeTab === 'editor' && <HeavyEditor />}
      </Suspense>
    </div>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Route-Based Code Splitting
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load routes
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="loading">
          <Spinner />
          <p>Loading page...</p>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: List Virtualization */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 5: Optimizing Long Lists
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Using react-window for Virtualization
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Install react-window: <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">npm install react-window</code>
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { FixedSizeList } from 'react-window';

// ❌ Bad: Rendering 10,000 items
function LargeList({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id} style={{ height: 50 }}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

// ✅ Good: Only render visible items
function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// Variable size rows
import { VariableSizeList } from 'react-window';

function DynamicList({ items }) {
  const getItemSize = (index) => items[index].height || 50;
  
  return (
    <VariableSizeList
      height={600}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {Row}
    </VariableSizeList>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Profiling */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 6: Using React DevTools Profiler
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Identifying Performance Issues
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">1. Open React DevTools</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Install the React DevTools extension and open the Profiler tab
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">2. Record a Session</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Click record, interact with your app, then stop recording
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">3. Analyze Results</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Look for components with long render times or frequent re-renders
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Programmatic Profiling
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { Profiler } from 'react';

function onRenderCallback(
  id,              // the "id" prop of the Profiler tree
  phase,           // "mount" or "update"
  actualDuration,  // time spent rendering
  baseDuration,    // estimated time without memoization
  startTime,       // when React began rendering
  commitTime,      // when React committed the update
  interactions     // Set of interactions
) {
  console.log(\`\${id} took \${actualDuration}ms to render\`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
    </Profiler>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Keep Optimizing!</h3>
          <p className="mb-6">
            Performance optimization is an ongoing process. Always measure before optimizing!
          </p>
          <Link
            href="/tutorials/react-performance"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition"
          >
            Back to Tutorial Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

