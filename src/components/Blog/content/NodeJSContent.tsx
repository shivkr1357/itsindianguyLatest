import CodeBlock from "../CodeBlock";

const NodeJSContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-emerald-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          Building REST APIs with Node.js, Express, and MongoDB is a powerful combination for creating scalable, performant backend services. This comprehensive guide covers everything from project setup to production deployment, including best practices, security, and optimization techniques.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          REST (Representational State Transfer) APIs have become the standard for web services, providing a simple, scalable way for applications to communicate. Node.js, with its non-blocking I/O model and event-driven architecture, is perfectly suited for building high-performance APIs that can handle thousands of concurrent connections. When combined with Express&apos;s minimalist framework and MongoDB&apos;s flexible document model, you have a stack that can adapt to any requirements.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          This stack, often referred to as the MERN stack (minus React), powers millions of applications worldwide, from startups to Fortune 500 companies. Its popularity stems from JavaScript being used across the entire stack, enabling developers to work seamlessly between frontend and backend. The thriving ecosystem provides libraries and tools for every need, from authentication to real-time communication, making it possible to build complex applications quickly and efficiently.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-emerald-500">
          Why Node.js for REST APIs?
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Node.js has become the go-to choice for building REST APIs due to its event-driven, non-blocking I/O model. Combined with Express and MongoDB, you get a powerful, flexible stack that scales beautifully.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-bold text-lg mb-2">🌐 Express Framework</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Fast, unopinionated web framework with robust routing, middleware support, and extensive ecosystem.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Minimal and flexible</li>
              <li>• Rich middleware ecosystem</li>
              <li>• Easy to learn and use</li>
            </ul>
          </div>
          <div className="p-5 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-2">🗄️ MongoDB Integration</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Flexible NoSQL database with JSON-like documents, perfect for modern applications.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Schema flexibility</li>
              <li>• Horizontal scaling</li>
              <li>• Rich query language</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-emerald-500">
          Project Setup & Structure
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl mb-4">🚀 Initial Setup</h3>
            <CodeBlock
              title="Terminal"
              code={`# Initialize project
mkdir my-api && cd my-api
npm init -y

# Install dependencies
npm install express mongoose dotenv cors helmet
npm install -D nodemon

# Install TypeScript (optional but recommended)
npm install -D typescript @types/express @types/node`}
            />
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <h3 className="font-bold text-xl mb-3">📁 Recommended Project Structure</h3>
            <CodeBlock
              title="Project Structure"
              code={`src/
├── config/          # Configuration files
│   └── database.js
├── controllers/     # Request handlers
│   └── userController.js
├── models/          # Database models
│   └── User.js
├── routes/          # API routes
│   └── userRoutes.js
├── middleware/      # Custom middleware
│   └── auth.js
├── utils/           # Utility functions
│   └── validation.js
└── server.js        # Entry point`}
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-emerald-500">
          Building Your First API
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-bold text-xl mb-4">1. Setup Express Server</h3>
            <CodeBlock
              title="server.js"
              code={`const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: { message: err.message }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server on port \${PORT}\`));`}
            />
          </div>

          <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-xl mb-4">2. Create Mongoose Model</h3>
            <CodeBlock
              title="models/User.js"
              code={`const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Invalid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);`}
            />
          </div>

          <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
            <h3 className="font-bold text-xl mb-4">3. Implement Controllers</h3>
            <CodeBlock
              title="controllers/userController.js"
              code={`const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};`}
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-emerald-500">
          Essential Middleware & Security
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🔒 Authentication</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              Implement JWT-based authentication for secure API access.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Use bcrypt for password hashing</li>
              <li>• Store JWT in httpOnly cookies</li>
              <li>• Implement refresh tokens</li>
            </ul>
          </div>

          <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🛡️ Request Validation</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              Validate all incoming data with libraries like Joi or express-validator.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Validate request body</li>
              <li>• Sanitize user input</li>
              <li>• Return clear error messages</li>
            </ul>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">⚡ Rate Limiting</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              Protect your API from abuse with rate limiting.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Use express-rate-limit</li>
              <li>• Set appropriate limits</li>
              <li>• Return 429 status code</li>
            </ul>
          </div>

          <div className="p-5 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">📝 Logging</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              Implement comprehensive logging with Winston or Morgan.
            </p>
            <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>• Log all requests</li>
              <li>• Track errors and exceptions</li>
              <li>• Use log levels appropriately</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-emerald-500">
          Best Practices & Tips
        </h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">✅ Use Environment Variables</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Store sensitive data like API keys, database URLs in .env files. Never commit secrets to version control.
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">✅ Implement Proper Error Handling</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use try-catch blocks, async error handlers, and centralized error handling middleware for consistent error responses.
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">✅ Version Your API</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use URL versioning (e.g., /api/v1/users) to maintain backward compatibility when making breaking changes.
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">✅ Document Your API</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use Swagger/OpenAPI for interactive API documentation. Makes integration easier for frontend teams and external developers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚙️</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Build Production-Ready APIs</h2>
            <p className="text-lg leading-relaxed text-emerald-50 mb-4">
              With Node.js, Express, and MongoDB, you have all the tools needed to build scalable, secure REST APIs. Follow these best practices and patterns to create APIs that perform well and are easy to maintain.
            </p>
            <p className="text-emerald-100">
              Remember: Always validate input, handle errors gracefully, secure your endpoints, and document your API thoroughly. Happy coding!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NodeJSContent;
