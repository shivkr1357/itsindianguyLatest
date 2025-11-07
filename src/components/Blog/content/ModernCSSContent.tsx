const ModernCSSContent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-6 md:p-8 border-l-4 border-violet-500">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          CSS has evolved dramatically in recent years. Discover the latest features including Container Queries, CSS Grid, Flexbox, CSS Variables, and modern layout techniques that are reshaping web design in 2024.
        </p>
      </div>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-violet-500">
          Modern CSS Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl border border-violet-200 dark:border-violet-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">📦</span>
              Container Queries
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Style elements based on their container&apos;s size, not just the viewport. Game-changer for component-based design!
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              @container (min-width: 400px) &#123;...&#125;
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              CSS Grid
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Create complex layouts with ease using the powerful Grid layout system. Perfect for modern, responsive designs.
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              display: grid;<br/>grid-template-columns: repeat(3, 1fr);
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/20 dark:to-pink-950/20 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              CSS Variables
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Define reusable values with custom properties. Essential for theming and maintaining consistent designs.
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              --primary-color: #6366f1;
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl border border-pink-200 dark:border-pink-800">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Modern Selectors
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              Use :is(), :where(), and :has() for more powerful and concise selectors.
            </p>
            <div className="p-3 bg-neutral-900 rounded-lg text-xs text-green-400 font-mono">
              .card:has(&gt; img) &#123;...&#125;
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-violet-500">
          Advanced Techniques
        </h2>
        <div className="space-y-4">
          <div className="p-5 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🌈 Gradients & Blend Modes</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Create stunning visual effects with modern gradient syntax and mix-blend-mode for unique compositions.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🎭 Animations & Transitions</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Leverage @keyframes, transitions, and the Web Animations API for smooth, performant animations.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/20 dark:to-pink-950/20 rounded-xl">
            <h3 className="font-bold text-lg mb-2">📐 Aspect Ratio & Object-fit</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Maintain perfect aspect ratios and control image scaling with modern CSS properties.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-6 md:p-8 shadow-lg text-white">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎨</span>
          <div>
            <h2 className="text-3xl font-bold mb-4">Master Modern CSS</h2>
            <p className="text-lg leading-relaxed text-violet-50">
              These modern CSS techniques enable you to build beautiful, responsive, and maintainable web interfaces. Embrace these features to create stunning designs with less code!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModernCSSContent;

