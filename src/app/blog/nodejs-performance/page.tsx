import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Node.js Performance Tips - Optimization Guide | ItsIndianGuy",
  description:
    "Optimize your Node.js applications for better performance. Learn caching, clustering, profiling, and best practices for high-performance Node.js apps.",
  keywords:
    "Node.js performance, Node.js optimization, Node.js clustering, caching, profiling, performance tuning, ItsIndianGuy blog",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/nodejs-performance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Node.js Performance Tips - Optimization Guide | ItsIndianGuy",
    description:
      "Optimize your Node.js applications for better performance. Learn caching, clustering, profiling, and best practices for high-performance Node.js apps.",
    url: "https://www.itsindianguy.in/blog/nodejs-performance",
    siteName: "ItsIndianGuy - Programming Tutorials India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.itsindianguy.in/og-nodejs-performance.jpg",
        width: 1200,
        height: 630,
        alt: "Node.js Performance Tips - Optimization Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Node.js Performance Tips - Optimization Guide | ItsIndianGuy",
    description:
      "Optimize your Node.js applications for better performance. Learn caching, clustering, profiling, and best practices.",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-nodejs-performance.jpg"],
  },
};

export default function NodeJSPerformanceBlogPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              alt="Node.js Performance"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Node.js Performance Tips
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2024-12-01">Dec 1, 2024</time>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Node.js is renowned for its high performance, but poorly optimized applications can suffer from slow response times and high resource consumption. This comprehensive guide covers essential techniques to optimize your Node.js applications for production environments.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              1. Use the Cluster Module
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Node.js runs on a single thread by default. Use the cluster module to spawn multiple worker processes that share the same port, utilizing all CPU cores.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.id} died\`);
    cluster.fork(); // Restart worker
  });
} else {
  // Start your server here
  require('./app');
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              2. Implement Caching Strategies
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Caching dramatically reduces database queries and API calls. Use Redis for distributed caching.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`const redis = require('redis');
const client = redis.createClient();

async function getUser(id) {
  const cacheKey = \`user:\${id}\`;
  
  // Try cache first
  const cached = await client.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Fetch from database
  const user = await db.users.findById(id);
  
  // Cache for 1 hour
  await client.setEx(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              3. Use Streaming for Large Data
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Streams process data in chunks, reducing memory consumption for large files or datasets.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`const fs = require('fs');

// Bad: Loads entire file into memory
fs.readFile('large-file.txt', (err, data) => {
  res.send(data);
});

// Good: Streams data in chunks
const readStream = fs.createReadStream('large-file.txt');
readStream.pipe(res);`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              4. Optimize Database Queries
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Database queries are often the bottleneck. Use indexes, connection pooling, and query optimization.
            </p>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Use Connection Pooling
                </h3>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});`}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Select Only Required Fields
                </h3>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`// Bad: Fetches all columns
const users = await User.find();

// Good: Selects specific fields
const users = await User.find().select('name email');`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              5. Use Compression
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Enable gzip/brotli compression to reduce response sizes significantly.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`const compression = require('compression');
const express = require('express');

const app = express();

// Enable compression for all responses
app.use(compression());`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              6. Profile Your Application
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Use profiling tools to identify bottlenecks and memory leaks.
            </p>
            <div className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <div>
                <strong>Built-in Profiler:</strong>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto mt-2">
                  <pre className="text-sm text-neutral-300">
{`node --prof app.js
node --prof-process isolate-*.log > processed.txt`}
                  </pre>
                </div>
              </div>
              <div>
                <strong>Clinic.js:</strong> Comprehensive performance diagnosis tool
              </div>
              <div>
                <strong>PM2:</strong> Production process manager with monitoring
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              7. Avoid Blocking the Event Loop
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Keep the event loop free for I/O operations. Move CPU-intensive tasks to worker threads.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`const { Worker } = require('worker_threads');

function runCPUIntensiveTask(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./cpu-task.js', {
      workerData: data
    });
    
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              8. Use Proper Logging
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Excessive logging can impact performance. Use structured logging with appropriate log levels.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: { colorize: true }
  }
});

logger.info({ userId: 123 }, 'User logged in');`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              9. Implement Rate Limiting
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Protect your API from abuse and ensure fair resource distribution.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              10. Monitor Memory Usage
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Monitor and fix memory leaks to prevent application crashes.
            </p>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`// Monitor memory usage
setInterval(() => {
  const usage = process.memoryUsage();
  console.log({
    rss: \`\${Math.round(usage.rss / 1024 / 1024)}MB\`,
    heapTotal: \`\${Math.round(usage.heapTotal / 1024 / 1024)}MB\`,
    heapUsed: \`\${Math.round(usage.heapUsed / 1024 / 1024)}MB\`
  });
}, 60000);`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Performance Checklist
            </h2>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Use clustering to utilize all CPU cores</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Implement caching with Redis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Use streams for large data processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Enable compression (gzip/brotli)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Optimize database queries and indexes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Profile application regularly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Implement rate limiting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Monitor memory usage and fix leaks</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Conclusion
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Optimizing Node.js applications requires a multi-faceted approach covering clustering, caching, database optimization, and careful monitoring. By implementing these techniques, you can build high-performance applications that scale effectively under load. Remember to profile regularly and optimize based on real-world data.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

