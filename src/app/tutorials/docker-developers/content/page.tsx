import type { Metadata } from "next";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
  title: "Docker for Developers Tutorial - Complete Guide | ItsIndianGuy",
  description: "Master Docker containerization from scratch. Complete tutorial by ItsIndianGuy with practical examples.",
};

export default function DockerContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/tutorials/docker-developers"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorial Overview
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Docker for Developers - Complete Guide
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Master containerization with Docker from basics to production deployment
          </p>
        </header>

        {/* Section 1: Docker Basics */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 1: Docker Installation & Basics
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Install Docker
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Install Docker Desktop for your operating system:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Windows/Mac: Download Docker Desktop from docker.com

# Linux (Ubuntu):
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Verify installation
docker --version
docker run hello-world`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Essential Docker Commands
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Images
docker images                    # List all images
docker pull nginx:latest         # Pull image from Docker Hub
docker build -t myapp:1.0 .     # Build image from Dockerfile
docker rmi image_id             # Remove image

# Containers
docker ps                       # List running containers
docker ps -a                    # List all containers
docker run -d -p 80:80 nginx   # Run container
docker stop container_id        # Stop container
docker rm container_id          # Remove container
docker logs container_id        # View logs
docker exec -it container_id sh # Enter container`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Creating Dockerfiles */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 2: Creating Dockerfiles
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Node.js Application Dockerfile
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Dockerfile
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

# Set environment to production
ENV NODE_ENV=production

# Start application
CMD ["node", "server.js"]`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Next.js Application Dockerfile
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Python Application Dockerfile
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Multi-stage Builds */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 3: Multi-stage Builds for Optimization
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Optimized React Build
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Multi-stage builds reduce final image size significantly:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Multi-stage Dockerfile for React
# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                .dockerignore File
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# .dockerignore
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.env.local
.next
dist
build
coverage
*.md`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Docker Compose */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 4: Docker Compose for Multi-Container Apps
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Full-Stack Application with Docker Compose
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# docker-compose.yml
version: '3.8'

services:
  # Frontend
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://backend:5000
    depends_on:
      - backend
    networks:
      - app-network

  # Backend API
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/myapp
      - JWT_SECRET=your_secret_key
    depends_on:
      - mongo
      - redis
    networks:
      - app-network
    volumes:
      - ./backend:/app
      - /app/node_modules

  # MongoDB Database
  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
    volumes:
      - mongo-data:/data/db
    networks:
      - app-network

  # Redis Cache
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    networks:
      - app-network

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - frontend
      - backend
    networks:
      - app-network

volumes:
  mongo-data:

networks:
  app-network:
    driver: bridge`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Docker Compose Commands
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild and start
docker-compose up -d --build

# Scale a service
docker-compose up -d --scale backend=3

# Remove volumes
docker-compose down -v`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Networking */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 5: Docker Networking
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Network Types and Commands
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Create custom network
docker network create my-network

# List networks
docker network ls

# Run containers on same network
docker run -d --name db --network my-network mongo
docker run -d --name api --network my-network myapi

# Inspect network
docker network inspect my-network

# Connect running container to network
docker network connect my-network container_name

# Disconnect
docker network disconnect my-network container_name`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Volumes & Data Persistence */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 6: Volumes & Data Persistence
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Working with Volumes
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Create volume
docker volume create my-data

# List volumes
docker volume ls

# Run container with volume
docker run -d \\
  --name postgres \\
  -v my-data:/var/lib/postgresql/data \\
  postgres:15

# Bind mount (development)
docker run -d \\
  -v \$(pwd):/app \\
  -v /app/node_modules \\
  myapp

# Inspect volume
docker volume inspect my-data

# Remove volume
docker volume rm my-data

# Remove all unused volumes
docker volume prune`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Production Best Practices */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 7: Production Best Practices
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Security Best Practices
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">1. Use Official Base Images</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Always use official images from Docker Hub and specify exact versions
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">2. Run as Non-Root User</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Create and use a non-root user in your Dockerfile
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">3. Use .dockerignore</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Exclude unnecessary files to reduce image size and improve security
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">4. Scan for Vulnerabilities</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Use docker scan to check for security issues
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Optimized Production Dockerfile
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="dockerfile"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Production-ready Dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Switch to non-root user
USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">You&apos;re Now a Docker Expert! 🐳</h3>
          <p className="mb-6">
            You&apos;ve learned containerization, multi-stage builds, Docker Compose, networking, volumes, and production best practices!
          </p>
          <Link
            href="/tutorials/docker-developers"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition"
          >
            Back to Tutorial Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

