import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TypeScript Generics - Complete Tutorial | ItsIndianGuy",
  description: "Master TypeScript generics with practical examples, from basic concepts to advanced patterns.",
};

export default function TypeScriptGenericsContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/tutorials/typescript-generics"
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
            Master TypeScript Generics
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Learn to write flexible, reusable, and type-safe code with generics
          </p>
        </header>

        {/* Section 1: Introduction to Generics */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 1: Why Generics?
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                The Problem Without Generics
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Imagine you need a function that returns the first element of an array. Without generics:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Option 1: Lose type safety
function getFirst(arr: any[]): any {
  return arr[0];
}

const num = getFirst([1, 2, 3]); // Type is 'any' ❌
const str = getFirst(['a', 'b']); // Type is 'any' ❌

// Option 2: Create multiple functions
function getFirstNumber(arr: number[]): number {
  return arr[0];
}

function getFirstString(arr: string[]): string {
  return arr[0];
}
// ... need a function for every type! 😫`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                The Solution: Generics
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Generics allow us to create ONE function that works with ANY type while maintaining type safety:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Generic function - works with any type!
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([1, 2, 3]);      // Type is 'number' ✅
const str = getFirst(['a', 'b']);     // Type is 'string' ✅
const bool = getFirst([true, false]); // Type is 'boolean' ✅

// TypeScript infers the type automatically!`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Generic Functions */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 2: Generic Functions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Basic Generic Function
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Identity function - returns the same type it receives
function identity<T>(value: T): T {
  return value;
}

// Usage - TypeScript infers the type
const numResult = identity(42);         // number
const strResult = identity("hello");    // string
const objResult = identity({ x: 10 }); // { x: number }

// You can also explicitly specify the type
const explicitResult = identity<string>("world");`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Multiple Type Parameters
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Function with two generic types
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const numStr = pair(1, "hello");      // [number, string]
const boolObj = pair(true, { x: 5 }); // [boolean, { x: number }]

// Create a map from two arrays
function createMap<K, V>(keys: K[], values: V[]): Map<K, V> {
  const map = new Map<K, V>();
  keys.forEach((key, index) => {
    map.set(key, values[index]);
  });
  return map;
}

const userMap = createMap(
  ['user1', 'user2'],
  [{ age: 25 }, { age: 30 }]
);
// Map<string, { age: number }>`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Generic Arrow Functions
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Arrow function syntax
const wrap = <T>(value: T): { value: T } => {
  return { value };
};

// Array methods with generics
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map<number>(n => n * 2);
const strings = numbers.map<string>(n => n.toString());

// Filter with type narrowing
const items = [1, "hello", 2, "world", 3];
const numbersOnly = items.filter((item): item is number => {
  return typeof item === 'number';
}); // Type is number[]`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Generic Interfaces & Types */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 3: Generic Interfaces & Type Aliases
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Generic Interfaces
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Generic API response interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Usage with different data types
type UserResponse = ApiResponse<{ id: string; name: string }>;
type PostsResponse = ApiResponse<Array<{ title: string; content: string }>>;

// Generic key-value store
interface KeyValueStore<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
  has(key: K): boolean;
  delete(key: K): boolean;
}

// Implementation
class SimpleStore<K, V> implements KeyValueStore<K, V> {
  private store = new Map<K, V>();

  get(key: K): V | undefined {
    return this.store.get(key);
  }

  set(key: K, value: V): void {
    this.store.set(key, value);
  }

  has(key: K): boolean {
    return this.store.has(key);
  }

  delete(key: K): boolean {
    return this.store.delete(key);
  }
}

const userStore = new SimpleStore<string, User>();
const configStore = new SimpleStore<string, Config>();`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Generic Type Aliases
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Generic promise type
type AsyncResult<T> = Promise<T | Error>;

// Generic callback type
type Callback<T> = (data: T) => void;

// Generic factory function type
type Factory<T> = () => T;

// Usage
const fetchUser: AsyncResult<User> = fetchUserData();
const handleData: Callback<string> = (data) => console.log(data);
const createUser: Factory<User> = () => ({ id: '1', name: 'John' });`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Generic Classes */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 4: Generic Classes
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Building a Generic Stack
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

// Usage with different types
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Generic Queue with Advanced Features
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  // Generic method within generic class
  map<U>(fn: (item: T) => U): Queue<U> {
    const newQueue = new Queue<U>();
    this.items.forEach(item => {
      newQueue.enqueue(fn(item));
    });
    return newQueue;
  }

  filter(predicate: (item: T) => boolean): Queue<T> {
    const newQueue = new Queue<T>();
    this.items.filter(predicate).forEach(item => {
      newQueue.enqueue(item);
    });
    return newQueue;
  }
}

// Usage
const taskQueue = new Queue<{ id: number; name: string }>();
taskQueue.enqueue({ id: 1, name: "Task 1" });
taskQueue.enqueue({ id: 2, name: "Task 2" });

// Transform queue items
const idQueue = taskQueue.map(task => task.id); // Queue<number>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Generic Constraints */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 5: Generic Constraints
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Constraining with extends
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Sometimes you need to ensure a generic type has certain properties:
              </p>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Constraint: T must have a length property
function logLength<T extends { length: number }>(item: T): void {
  console.log(\`Length: \${item.length}\`);
}

logLength("hello");        // ✅ string has length
logLength([1, 2, 3]);      // ✅ array has length
logLength({ length: 5 });  // ✅ object with length
// logLength(123);         // ❌ Error: number doesn't have length

// Constraint: T must extend a base interface
interface Identifiable {
  id: string;
}

function findById<T extends Identifiable>(
  items: T[],
  id: string
): T | undefined {
  return items.find(item => item.id === id);
}

interface User extends Identifiable {
  name: string;
}

interface Product extends Identifiable {
  price: number;
}

const users: User[] = [{ id: '1', name: 'John' }];
const foundUser = findById(users, '1'); // Type is User | undefined`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Using keyof Constraint
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Get property value safely
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: '1',
  name: 'John',
  age: 30
};

const name = getProperty(user, 'name');  // Type is string
const age = getProperty(user, 'age');    // Type is number
// const x = getProperty(user, 'invalid'); // ❌ Error

// Update property safely
function setProperty<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): void {
  obj[key] = value;
}

setProperty(user, 'age', 31);           // ✅
// setProperty(user, 'age', 'invalid'); // ❌ Error: wrong type`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Advanced Patterns */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Section 6: Advanced Generic Patterns
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Conditional Types
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Conditional type: unwrap Promise type
type Awaited<T> = T extends Promise<infer U> ? U : T;

type A = Awaited<Promise<string>>;  // string
type B = Awaited<number>;            // number

// Exclude null and undefined
type NonNullable<T> = T extends null | undefined ? never : T;

type C = NonNullable<string | null>;      // string
type D = NonNullable<number | undefined>; // number

// Extract function return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: '1', name: 'John' };
}

type UserType = ReturnType<typeof getUser>; // { id: string; name: string }`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Mapped Types
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`// Make all properties optional
type Partial<T> = {
  [K in keyof T]?: T[K];
};

// Make all properties required
type Required<T> = {
  [K in keyof T]-?: T[K];
};

// Make all properties readonly
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Pick specific properties
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Usage
interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
}

type PartialUser = Partial<User>;
// { id?: string; name?: string; email?: string; age?: number }

type UserPreview = Pick<User, 'id' | 'name'>;
// { id: string; name: string }`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Example */}
        <section className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
            Real-World Example: API Client
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Type-Safe API Client with Generics
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return response.json();
  }

  async post<T, U>(endpoint: string, data: T): Promise<U> {
    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return response.json();
  }
}

// Usage
interface User {
  id: string;
  name: string;
  email: string;
}

interface CreateUserDto {
  name: string;
  email: string;
}

const api = new ApiClient('https://api.example.com');

// Type-safe API calls
const users = await api.get<User[]>('/users');
const newUser = await api.post<CreateUserDto, User>('/users', {
  name: 'John',
  email: 'john@example.com'
});

// TypeScript knows the exact types! ✨`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Button */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Practice Makes Perfect!</h3>
          <p className="mb-6">
            Start using generics in your projects to master these concepts.
          </p>
          <Link
            href="/tutorials/typescript-generics"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition"
          >
            Back to Tutorial Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

