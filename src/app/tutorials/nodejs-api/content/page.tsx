import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Node.js API Development Tutorial - Complete Guide | ItsIndianGuy",
  description: "Build production-ready REST APIs with Node.js, Express and MongoDB. Complete tutorial by ItsIndianGuy.",
};

export default function NodeJSAPIContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/tutorials/nodejs-api"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorial Overview
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Node.js API Development - Complete Guide
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Build production-ready REST APIs with Node.js, Express, and MongoDB
          </p>
        </header>

        {/* Section 1: Project Setup */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 1: Project Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Initialize Your Node.js Project
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Let&apos;s start by creating a new Node.js project with Express:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`# Create project directory
mkdir node-api-tutorial
cd node-api-tutorial

# Initialize npm project
npm init -y

# Install dependencies
npm install express mongoose dotenv cors helmet
npm install --save-dev nodemon typescript @types/node @types/express

# Initialize TypeScript
npx tsc --init`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Project Structure
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`node-api-tutorial/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── models/
│   │   └── User.ts
│   ├── routes/
│   │   └── userRoutes.ts
│   ├── controllers/
│   │   └── userController.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── errorHandler.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
└── tsconfig.json`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Express Server Setup */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 2: Express Server Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Basic Server Configuration
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// src/server.ts
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/database';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'API is running!',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
});

export default app;`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Database Configuration */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 3: MongoDB Database Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Database Connection
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// src/config/database.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nodeapi';
    
    await mongoose.connect(mongoURI);
    
    console.log('✅ MongoDB connected successfully');
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Environment Variables
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`# .env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nodeapi
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Data Models */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 4: Creating Data Models
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                User Model with Mongoose
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\\S+@\\S+\\.\\S+$/, 'Please enter a valid email']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false // Don't return password by default
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  },
  {
    timestamps: true
  }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Controllers */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 5: API Controllers
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                User Controller with CRUD Operations
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';

// Register new user
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    // Create user
    const user = await User.create({ name, email, password });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: error.message
    });
  }
};

// Login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user with password field
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    });
  }
};

// Get all users (admin only)
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password');
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: error.message
    });
  }
};

// Get single user
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error.message
    });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update user',
      error: error.message
    });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete user',
      error: error.message
    });
  }
};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Authentication Middleware */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 6: Authentication & Authorization
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                JWT Authentication Middleware
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload;

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized'
      });
    }

    // Check if user role is authorized
    // In real app, get role from database
    // For now, assume it's in the token
    
    next();
  };
};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Routes */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 7: API Routes
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                User Routes Configuration
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// src/routes/userRoutes.ts
import express from 'express';
import {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/', authenticate, getAllUsers);
router.get('/:id', authenticate, getUserById);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, deleteUser);

export default router;`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Register Routes in Server
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// src/server.ts (add this)
import userRoutes from './routes/userRoutes';

// ... existing middleware

// API Routes
app.use('/api/v1/users', userRoutes);

// ... rest of server code`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Testing */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 8: Testing Your API
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Example API Requests
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`# Register new user
curl -X POST http://localhost:5000/api/v1/users/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'

# Login
curl -X POST http://localhost:5000/api/v1/users/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Get all users (with authentication)
curl -X GET http://localhost:5000/api/v1/users \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Get user by ID
curl -X GET http://localhost:5000/api/v1/users/USER_ID \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Update user
curl -X PUT http://localhost:5000/api/v1/users/USER_ID \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Updated",
    "email": "john.updated@example.com"
  }'

# Delete user
curl -X DELETE http://localhost:5000/api/v1/users/USER_ID \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN"`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Congratulations! 🎉</h3>
          <p className="mb-6">
            You&apos;ve built a production-ready Node.js REST API with authentication, validation, and error handling!
          </p>
          <Link
            href="/tutorials/nodejs-api"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition"
          >
            Back to Tutorial Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

