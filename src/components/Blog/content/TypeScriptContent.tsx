const TypeScriptContent = () => {
  return (
    <>
      {/* Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-blue-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          TypeScript generics are one of the most powerful features in the language, allowing you to write flexible, reusable, and type-safe code. In this comprehensive guide, we&apos;ll master generics from basics to advanced patterns, exploring real-world use cases and best practices.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          If you&apos;ve ever struggled with type safety while trying to maintain code flexibility, generics are the solution you&apos;ve been looking for. They allow you to write functions, classes, and interfaces that work with multiple types while preserving complete type information. This means you get the benefits of TypeScript&apos;s static typing without sacrificing the reusability that makes code maintainable and scalable.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Whether you&apos;re building libraries, APIs, or complex applications, understanding generics is essential for writing professional TypeScript code. Many popular libraries like React, Redux, and Express use generics extensively in their type definitions, so mastering this concept will help you work more effectively with these tools and build better abstractions in your own code.
        </p>
      </div>

      {/* What are Generics */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
          Understanding TypeScript Generics
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Generics provide a way to make components work with any data type and not restrict to one data type. They enable you to create reusable components that can work with a variety of types while maintaining type safety. Think of generics as type variables that allow you to capture the type the user provides and use it throughout your code.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">Type Safety</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Catch errors at compile time instead of runtime. Generics ensure type consistency across your codebase without sacrificing flexibility.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">Reusability</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Write once, use with many different types. Build flexible APIs that work with any data structure while preserving type information.
            </p>
          </div>
        </div>
      </section>

      {/* Basic Generics */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
          Basic Generic Functions
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
          Let&apos;s start with a simple example. Instead of writing separate functions for each type, we can use generics to create a single, type-safe function. Imagine you need a function that returns whatever value you pass to it - without generics, you&apos;d either have to write multiple versions or use the any type, losing all type safety.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          The generic approach solves this elegantly by introducing a type parameter (conventionally named T) that captures the type of the argument. This type parameter can then be used throughout your function signature, ensuring that the input and output types are consistent. TypeScript&apos;s type inference is smart enough to automatically determine the type in most cases, but you can also explicitly specify it when needed for clarity or when inference isn&apos;t possible.
        </p>
        
        <div className="space-y-4">
          <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 border border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-neutral-400">Basic Generic Function</span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400 font-mono">
{`function identity<T>(arg: T): T {
  return arg;
}

// Usage
const num = identity<number>(42);
const str = identity<string>("Hello");
const obj = identity({ name: "John" });`}
              </code>
            </pre>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              <strong>💡 Key Point:</strong> The type parameter T captures the type passed in and uses it throughout the function. TypeScript can often infer the type, so you don&apos;t always need to explicitly provide it.
            </p>
          </div>
        </div>
      </section>

      {/* Generic Interfaces */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
          Generic Interfaces and Classes
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Generics shine when building reusable data structures and APIs. Here&apos;s how to use them with interfaces and classes:
        </p>
        
        <div className="space-y-4">
          <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 border border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-neutral-400">Generic Interface Example</span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400 font-mono">
{`interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Type-safe response
const response: ApiResponse<User> = {
  data: { id: 1, name: "John", email: "john@example.com" },
  status: 200,
  message: "Success"
};`}
              </code>
            </pre>
          </div>

          <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 border border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-neutral-400">Generic Class Example</span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400 font-mono">
{`class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  get(index: number): T | undefined {
    return this.data[index];
  }

  getAll(): T[] {
    return [...this.data];
  }
}

const userStore = new DataStore<User>();
userStore.add({ id: 1, name: "John", email: "john@example.com" });`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Advanced Patterns */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
          Advanced Generic Patterns
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Generic Constraints
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Use constraints to limit the types that can be used with your generic. This provides additional type safety while maintaining flexibility.
            </p>
            <div className="bg-neutral-900 rounded-lg p-4">
              <code className="text-green-400 text-xs font-mono">
{`function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John", age: 30 };
const name = getProperty(user, "name"); // ✓ Type-safe
// const invalid = getProperty(user, "invalid"); // ✗ Error`}
              </code>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🔀</span>
              Multiple Type Parameters
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Use multiple type parameters when you need to capture relationships between different types.
            </p>
            <div className="bg-neutral-900 rounded-lg p-4">
              <code className="text-green-400 text-xs font-mono">
{`function map<T, U>(array: T[], fn: (item: T) => U): U[] {
  return array.map(fn);
}

const numbers = [1, 2, 3];
const strings = map(numbers, num => num.toString()); // string[]`}
              </code>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Conditional Types with Generics
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Combine generics with conditional types for powerful type transformations.
            </p>
            <div className="bg-neutral-900 rounded-lg p-4">
              <code className="text-green-400 text-xs font-mono">
{`type Flatten<T> = T extends Array<infer U> ? U : T;

type Num = Flatten<number[]>;    // number
type Str = Flatten<string>;      // string
type Nested = Flatten<number[][]>; // number[]`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
          Real-World Use Cases
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>🔄</span> State Management
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Create type-safe Redux actions and reducers using generics to ensure payload types match action types.
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>📡</span> API Clients
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Build generic HTTP clients that automatically infer response types based on endpoint configurations.
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>📋</span> Form Validation
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Create generic form validators that work with any data structure while maintaining type safety.
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span>🗄️</span> Database Models
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Build generic repository patterns that work with any entity type while providing full type safety.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
          Best Practices & Common Pitfalls
        </h2>
        
        <div className="space-y-4">
          <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-300">✅ Do: Use Descriptive Type Parameter Names</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Instead of just T, use meaningful names like TData, TResponse, or TEntity for better code readability.
            </p>
          </div>
          
          <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-300">✅ Do: Add Constraints When Possible</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use extends to add constraints that make your generics more specific and catch more errors at compile time.
            </p>
          </div>
          
          <div className="p-5 bg-red-50 dark:bg-red-950/20 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-300">❌ Don&apos;t: Over-use Generics</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Not everything needs to be generic. Use them when you actually need type flexibility, not just for the sake of it.
            </p>
          </div>
          
          <div className="p-5 bg-red-50 dark:bg-red-950/20 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-300">❌ Don&apos;t: Forget Default Types</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Provide sensible defaults for type parameters to make your APIs easier to use: &lt;T = string&gt;
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Master Generics for Better Code</h2>
            <p className="text-lg leading-relaxed text-blue-50 mb-4">
              TypeScript generics are essential for writing maintainable, type-safe code. By mastering generics, you&apos;ll write more flexible and reusable components that scale with your application.
            </p>
            <p className="text-blue-100">
              Start practicing with simple examples and gradually move to more complex patterns. The investment in learning generics will pay dividends throughout your TypeScript journey!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TypeScriptContent;
