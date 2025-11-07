const TypeScriptPracticesContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-blue-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Writing clean, maintainable TypeScript code requires following best practices and design patterns. Learn proven techniques to write better TypeScript that scales with your application.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
          Essential Best Practices
        </h2>
        <div className="grid gap-4">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Use Strict Mode
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Enable strict mode in tsconfig.json for maximum type safety and catch potential bugs early.
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              &#123; &quot;compilerOptions&quot;: &#123; &quot;strict&quot;: true &#125; &#125;
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              Prefer Interfaces Over Types
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Use interfaces for object shapes as they provide better error messages and are extendable.
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              interface User &#123; id: number; name: string; &#125;
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              Avoid `any` Type
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Using `any` defeats the purpose of TypeScript. Use `unknown` when the type is truly unknown.
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              function parse(input: unknown) &#123;...&#125;
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-blue-500">
          Advanced Patterns
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">📦 Utility Types</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Leverage built-in utility types like Partial, Pick, Omit, and Record for transforming types.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🎨 Template Literal Types</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Create complex string literal types using template literals for better type safety.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🔒 Const Assertions</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use `as const` to create readonly literal types and preserve exact values.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🎯 Discriminated Unions</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Use union types with a discriminant property for type-safe state management.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">✨</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Write Better TypeScript</h2>
            <p className="text-lg leading-relaxed text-blue-50">
              Following these best practices will help you write more maintainable, type-safe TypeScript code. Embrace the type system and let it guide you to better software design!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TypeScriptPracticesContent;

