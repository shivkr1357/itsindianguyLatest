'use client';
import { useThemeState } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeSwitcher() {
  const { customTheme, toggleTheme } = useThemeState();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: customTheme === 'dark' ? 0 : 1,
          opacity: customTheme === 'dark' ? 0 : 1,
          rotate: customTheme === 'dark' ? 90 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: customTheme === 'dark' ? 1 : 0,
          opacity: customTheme === 'dark' ? 1 : 0,
          rotate: customTheme === 'dark' ? 0 : -90,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
} 