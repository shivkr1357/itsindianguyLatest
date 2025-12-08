import type { Metadata } from "next";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyCodeButton from "@/components/Tutorials/CopyCodeButton";

export const metadata: Metadata = {
  title: "Full-Stack Next.js Tutorial - Complete Guide | ItsIndianGuy",
  description: "Step-by-step tutorial for building a complete full-stack application with Next.js 14, including authentication, database, and deployment.",
};

export default function FullStackNextJSContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/tutorials/fullstack-nextjs"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorial Overview
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Build a Full-Stack Application with Next.js 14
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            A comprehensive, step-by-step guide to building a production-ready full-stack app
          </p>
        </header>

        {/* Step 1: Project Setup */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Step 1: Project Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Initialize Your Next.js Project
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                First, let&apos;s create a new Next.js project with TypeScript and the App Router:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`npx create-next-app@latest my-fullstack-app
cd my-fullstack-app

# When prompted, select:
# ✓ TypeScript: Yes
# ✓ ESLint: Yes
# ✓ Tailwind CSS: Yes
# ✓ src/ directory: Yes
# ✓ App Router: Yes
# ✓ Import alias: @/*`} />
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`npx create-next-app@latest my-fullstack-app
cd my-fullstack-app

# When prompted, select:
# ✓ TypeScript: Yes
# ✓ ESLint: Yes
# ✓ Tailwind CSS: Yes
# ✓ src/ directory: Yes
# ✓ App Router: Yes
# ✓ Import alias: @/*`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Install Required Dependencies
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Install the packages we&apos;ll need for our full-stack application:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`# Database and ORM
npm install prisma @prisma/client

# Authentication
npm install next-auth@beta bcryptjs
npm install -D @types/bcryptjs

# Form validation
npm install zod react-hook-form @hookform/resolvers

# UI Components
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu

# Initialize Prisma
npx prisma init`} />
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Database and ORM
npm install prisma @prisma/client

# Authentication
npm install next-auth@beta bcryptjs
npm install -D @types/bcryptjs

# Form validation
npm install zod react-hook-form @hookform/resolvers

# UI Components
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu

# Initialize Prisma
npx prisma init`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Project Structure
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Your project structure should look like this:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`my-fullstack-app/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── auth.ts
│   └── types/
├── .env
└── package.json`} />
                <SyntaxHighlighter
                  language="text"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`my-fullstack-app/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── auth.ts
│   └── types/
├── .env
└── package.json`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Database Setup */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Step 2: Database Configuration with Prisma
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Configure Environment Variables
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Create a <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">.env</code> file:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`# PostgreSQL (recommended for production)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Or SQLite for development
# DATABASE_URL="file:./dev.db"

# NextAuth Secret
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"`} />
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# PostgreSQL (recommended for production)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Or SQLite for development
# DATABASE_URL="file:./dev.db"

# NextAuth Secret
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Define Your Schema
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Update <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">prisma/schema.prisma</code>:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}`} />
                <SyntaxHighlighter
                  language="prisma"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Create Prisma Client
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Create <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">src/lib/prisma.ts</code>:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}`} />
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Run Migrations
              </h3>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`# Create and apply migration
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate`} />
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Create and apply migration
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Authentication */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Step 3: Implement Authentication
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                NextAuth Configuration
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Create <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">src/app/api/auth/[...nextauth]/route.ts</code>:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
  }
});

export { handler as GET, handler as POST };`} />
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
  }
});

export { handler as GET, handler as POST };`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Registration API Route
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Create <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">src/app/api/register/route.ts</code>:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = registerSchema.parse(body);

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });

    return NextResponse.json(
      { message: 'User created successfully', userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`} />
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = registerSchema.parse(body);

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });

    return NextResponse.json(
      { message: 'User created successfully', userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Creating API Routes */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Step 4: Create CRUD API Routes
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Posts API - GET All Posts
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Create <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">src/app/api/posts/route.ts</code>:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { title, content } = await req.json();

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: session.user.id
      }
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}`} />
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { title, content } = await req.json();

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: session.user.id
      }
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Individual Post Route
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Create <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">src/app/api/posts/[id]/route.ts</code>:
              </p>
              <div className="relative bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <CopyCodeButton code={`import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: {
        author: {
          select: { name: true, email: true }
        }
      }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, content, published } = await req.json();

    const post = await prisma.post.update({
      where: { id: params.id },
      data: { title, content, published }
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.post.delete({
      where: { id: params.id }
    });

    return NextResponse.json(
      { message: 'Post deleted successfully' }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}`} />
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: {
        author: {
          select: { name: true, email: true }
        }
      }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, content, published } = await req.json();

    const post = await prisma.post.update({
      where: { id: params.id },
      data: { title, content, published }
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.post.delete({
      where: { id: params.id }
    });

    return NextResponse.json(
      { message: 'Post deleted successfully' }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Reading */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Continue?</h3>
          <p className="mb-6">
            This tutorial continues with building the frontend, implementing forms, and deploying to production.
          </p>
          <Link
            href="/tutorials/fullstack-nextjs"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition"
          >
            Back to Tutorial Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

