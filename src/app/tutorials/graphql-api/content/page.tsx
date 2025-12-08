import type { Metadata } from "next";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const metadata: Metadata = {
  title: "GraphQL API Development Tutorial - Complete Guide | ItsIndianGuy",
  description: "Build powerful GraphQL APIs with Apollo Server. Complete tutorial by ItsIndianGuy.",
};

export default function GraphQLAPIContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/tutorials/graphql-api"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorial Overview
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            GraphQL API Development - Complete Guide
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Build powerful GraphQL APIs with Apollo Server and Node.js
          </p>
        </header>

        {/* Section 1: Setup */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 1: Project Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Initialize GraphQL Project
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="graphql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Create project
mkdir graphql-api
cd graphql-api
npm init -y

# Install dependencies
npm install @apollo/server graphql
npm install express cors
npm install mongoose dotenv
npm install --save-dev typescript @types/node

# Initialize TypeScript
npx tsc --init`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Schema Definition */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 2: Defining GraphQL Schema
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Type Definitions
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="graphql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`// src/schema/typeDefs.ts
import { gql } from 'apollo-server-express';

export const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
    createdAt: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    author: User!
    createdAt: String!
    updatedAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    # Users
    users: [User!]!
    user(id: ID!): User
    me: User

    # Posts
    posts: [Post!]!
    post(id: ID!): Post
    postsByUser(userId: ID!): [Post!]!
  }

  type Mutation {
    # Auth
    signup(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!

    # Users
    updateUser(id: ID!, name: String, email: String): User!
    deleteUser(id: ID!): Boolean!

    # Posts
    createPost(title: String!, content: String!, published: Boolean): Post!
    updatePost(id: ID!, title: String, content: String, published: Boolean): Post!
    deletePost(id: ID!): Boolean!
  }

  type Subscription {
    postCreated: Post!
    postUpdated: Post!
  }
\`;`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Resolvers */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 3: Implementing Resolvers
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Query Resolvers
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="graphql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`// src/resolvers/resolvers.ts
import User from '../models/User';
import Post from '../models/Post';
import jwt from 'jsonwebtoken';

export const resolvers = {
  Query: {
    // Get all users
    users: async () => {
      return await User.find();
    },

    // Get single user
    user: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },

    // Get current user
    me: async (_: any, __: any, context: any) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }
      return await User.findById(context.user.id);
    },

    // Get all posts
    posts: async () => {
      return await Post.find().populate('author');
    },

    // Get single post
    post: async (_: any, { id }: { id: string }) => {
      return await Post.findById(id).populate('author');
    },

    // Get posts by user
    postsByUser: async (_: any, { userId }: { userId: string }) => {
      return await Post.find({ author: userId }).populate('author');
    },
  },

  Mutation: {
    // Signup
    signup: async (_: any, { name, email, password }: any) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const user = await User.create({ name, email, password });
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
      );

      return { token, user };
    },

    // Login
    login: async (_: any, { email, password }: any) => {
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        throw new Error('Invalid credentials');
      }

      const isValid = await user.comparePassword(password);
      if (!isValid) {
        throw new Error('Invalid credentials');
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
      );

      return { token, user };
    },

    // Create post
    createPost: async (
      _: any,
      { title, content, published = false }: any,
      context: any
    ) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }

      const post = await Post.create({
        title,
        content,
        published,
        author: context.user.id
      });

      return await post.populate('author');
    },

    // Update post
    updatePost: async (
      _: any,
      { id, title, content, published }: any,
      context: any
    ) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }

      const post = await Post.findById(id);
      if (!post) {
        throw new Error('Post not found');
      }

      if (post.author.toString() !== context.user.id) {
        throw new Error('Not authorized');
      }

      return await Post.findByIdAndUpdate(
        id,
        { title, content, published },
        { new: true }
      ).populate('author');
    },

    // Delete post
    deletePost: async (_: any, { id }: { id: string }, context: any) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }

      const post = await Post.findById(id);
      if (!post) {
        throw new Error('Post not found');
      }

      if (post.author.toString() !== context.user.id) {
        throw new Error('Not authorized');
      }

      await Post.findByIdAndDelete(id);
      return true;
    },
  },

  // Field resolvers
  User: {
    posts: async (parent: any) => {
      return await Post.find({ author: parent.id });
    },
  },

  Post: {
    author: async (parent: any) => {
      return await User.findById(parent.author);
    },
  },
};`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Apollo Server Setup */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 4: Setting Up Apollo Server
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Server Configuration with Authentication
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="graphql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`// src/server.ts
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './resolvers/resolvers';
import connectDB from './config/database';

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to database
connectDB();

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start server
async function startServer() {
  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        // Get token from header
        const token = req.headers.authorization?.replace('Bearer ', '');
        
        if (token) {
          try {
            const user = jwt.verify(token, process.env.JWT_SECRET!);
            return { user };
          } catch (err) {
            return {};
          }
        }
        
        return {};
      },
    })
  );

  app.listen(PORT, () => {
    console.log(\`🚀 Server ready at http://localhost:\${PORT}/graphql\`);
  });
}

startServer();`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Testing Queries */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 5: GraphQL Queries & Mutations
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Example Queries
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="graphql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Get all users
query GetUsers {
  users {
    id
    name
    email
    posts {
      id
      title
    }
  }
}

# Get single user with posts
query GetUser {
  user(id: "USER_ID") {
    id
    name
    email
    posts {
      id
      title
      content
      published
      createdAt
    }
  }
}

# Get all posts with authors
query GetPosts {
  posts {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
    createdAt
  }
}

# Get current user
query Me {
  me {
    id
    name
    email
    posts {
      id
      title
    }
  }
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Example Mutations
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="graphql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`# Signup
mutation Signup {
  signup(
    name: "John Doe"
    email: "john@example.com"
    password: "password123"
  ) {
    token
    user {
      id
      name
      email
    }
  }
}

# Login
mutation Login {
  login(
    email: "john@example.com"
    password: "password123"
  ) {
    token
    user {
      id
      name
      email
    }
  }
}

# Create post (requires authentication)
mutation CreatePost {
  createPost(
    title: "My First Post"
    content: "This is my first GraphQL post!"
    published: true
  ) {
    id
    title
    content
    author {
      name
    }
    createdAt
  }
}

# Update post
mutation UpdatePost {
  updatePost(
    id: "POST_ID"
    title: "Updated Title"
    published: true
  ) {
    id
    title
    content
    updatedAt
  }
}

# Delete post
mutation DeletePost {
  deletePost(id: "POST_ID")
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Advanced Features */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 6: Advanced GraphQL Features
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Pagination with Cursor-Based Approach
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="graphql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`// Add to typeDefs
type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
}

type PostEdge {
  cursor: String!
  node: Post!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

extend type Query {
  postsPaginated(first: Int, after: String): PostConnection!
}

// Resolver
postsPaginated: async (_: any, { first = 10, after }: any) => {
  const query = after ? { _id: { $gt: after } } : {};
  
  const posts = await Post.find(query)
    .limit(first + 1)
    .sort({ _id: 1 })
    .populate('author');

  const hasNextPage = posts.length > first;
  const edges = posts.slice(0, first).map(post => ({
    cursor: post._id.toString(),
    node: post
  }));

  return {
    edges,
    pageInfo: {
      hasNextPage,
      hasPreviousPage: !!after,
      startCursor: edges[0]?.cursor,
      endCursor: edges[edges.length - 1]?.cursor
    }
  };
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                DataLoader for N+1 Problem
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="graphql"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    fontSize: "0.875rem",
                    background: "transparent",
                  }}
                >
                  {`import DataLoader from 'dataloader';

// Create DataLoader for batching
const userLoader = new DataLoader(async (userIds: string[]) => {
  const users = await User.find({ _id: { $in: userIds } });
  
  const userMap = new Map();
  users.forEach(user => userMap.set(user._id.toString(), user));
  
  return userIds.map(id => userMap.get(id));
});

// Use in resolver
Post: {
  author: async (parent: any, _: any, context: any) => {
    return context.loaders.userLoader.load(parent.author);
  }
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Testing */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 7: Testing Your GraphQL API
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Using Apollo Studio / GraphQL Playground
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">1. Access GraphQL Playground</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Navigate to <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">http://localhost:4000/graphql</code>
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">2. Add Authentication</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Add header: <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">Authorization: Bearer YOUR_TOKEN</code>
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">3. Run Queries</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Test all your queries and mutations with the interactive explorer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">You&apos;re Now a GraphQL Expert! 🚀</h3>
          <p className="mb-6">
            You&apos;ve learned schemas, resolvers, mutations, pagination, DataLoader, and best practices for scalable GraphQL APIs!
          </p>
          <Link
            href="/tutorials/graphql-api"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition"
          >
            Back to Tutorial Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

