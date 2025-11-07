const DockerContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-sky-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          Docker has revolutionized application deployment through containerization, making it easier than ever to build, ship, and run applications consistently across different environments. This comprehensive guide will take you from Docker basics to production-ready containerization strategies.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          Before Docker, deploying applications was a nightmare of dependency conflicts, environment inconsistencies, and the dreaded &quot;it works on my machine&quot; syndrome. Docker solves these problems by packaging your application with all its dependencies into a standardized, portable container. These containers are lightweight, start instantly, and run identically on any system that supports Docker - from your laptop to production servers in the cloud.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Containerization has become the industry standard for modern application deployment. Major cloud providers like AWS, Google Cloud, and Azure offer first-class Docker support, and container orchestration platforms like Kubernetes build on Docker to manage applications at massive scale. Understanding Docker is no longer optional for developers - it&apos;s an essential skill that will make you more productive and your applications more reliable.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-sky-500">
          Why Docker? Understanding Containerization
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Docker solves the classic &quot;it works on my machine&quot; problem by packaging your application with all its dependencies into a standardized unit called a container. Containers are lightweight, portable, and consistent across different environments.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 rounded-xl border border-sky-200 dark:border-sky-800">
            <h3 className="font-bold text-lg mb-2">📦 Containers vs VMs</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Containers are much lighter than virtual machines as they share the host OS kernel.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Start in milliseconds</li>
              <li>• Use minimal resources</li>
              <li>• Higher density per host</li>
            </ul>
          </div>
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-2">🐳 Docker Images</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Images are read-only templates used to create containers. Build once, run anywhere.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Layered file system</li>
              <li>• Cacheable layers</li>
              <li>• Shareable via registries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-sky-500">
          Your First Dockerfile
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl mb-4">Creating a Dockerfile for Node.js App</h3>
            <div className="bg-neutral-900 rounded-xl p-6">
              <code className="text-green-400 text-sm font-mono">
{`# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "server.js"]`}
              </code>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
              <h4 className="font-bold mb-2">🚀 Build Image</h4>
              <div className="bg-neutral-900 rounded p-3 text-xs text-green-400 font-mono mb-2">
                docker build -t my-app:1.0 .
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Creates a Docker image with tag &quot;my-app:1.0&quot;
              </p>
            </div>

            <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl">
              <h4 className="font-bold mb-2">▶️ Run Container</h4>
              <div className="bg-neutral-900 rounded p-3 text-xs text-green-400 font-mono mb-2">
                docker run -p 3000:3000 my-app:1.0
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Runs container and maps port 3000
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-sky-500">
          Docker Compose for Multi-Container Apps
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Docker Compose lets you define and run multi-container applications. Perfect for development environments with databases, caches, and multiple services.
        </p>
        
        <div className="bg-neutral-900 rounded-xl p-6">
          <code className="text-green-400 text-sm font-mono">
{`version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=mongodb://db:27017/myapp
    depends_on:
      - db
  
  db:
    image: mongo:6
    volumes:
      - mongo-data:/data/db
    ports:
      - "27017:27017"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  mongo-data:`}
          </code>
        </div>

        <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            <strong>Run with:</strong> <code className="px-2 py-1 bg-neutral-900 text-green-400 rounded text-xs font-mono">docker-compose up</code> - Starts all services together!
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-sky-500">
          Best Practices
        </h2>
        
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">✅ Use .dockerignore</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Exclude node_modules, .git, and other unnecessary files from build context.
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">✅ Multi-stage Builds</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Reduce image size by using multi-stage builds to exclude build dependencies.
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">✅ Use Alpine Images</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Alpine-based images are much smaller (5MB vs 900MB) and more secure.
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">✅ Layer Caching</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Order Dockerfile commands from least to most frequently changing for better caching.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🚢</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Deploy with Confidence</h2>
            <p className="text-lg leading-relaxed text-sky-50 mb-4">
              Docker transforms how we build and deploy applications. Master containerization to streamline your development workflow, ensure consistency across environments, and deploy with confidence.
            </p>
            <p className="text-sky-100">
              Start simple with a basic Dockerfile, then progress to multi-container applications with Docker Compose, and eventually orchestrate at scale with Kubernetes!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DockerContent;
