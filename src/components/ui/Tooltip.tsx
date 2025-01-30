"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export default function Tooltip({
  content,
  children,
  position = 'top',
  delay = 300,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const positions = {
    top: '-translate-y-full -translate-x-1/2 -mt-2',
    bottom: 'translate-y-full -translate-x-1/2 mt-2',
    left: '-translate-x-full -translate-y-1/2 -ml-2',
    right: 'translate-x-full -translate-y-1/2 ml-2',
  };

  const arrows = {
    top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-neutral-900 dark:border-t-neutral-100',
    bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-neutral-900 dark:border-b-neutral-100',
    left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-neutral-900 dark:border-l-neutral-100',
    right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-neutral-900 dark:border-r-neutral-100',
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 ${positions[position]}`}
          >
            <div className="relative">
              <div className="px-3 py-1.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded text-sm whitespace-nowrap">
                {content}
              </div>
              <div
                className={`absolute w-0 h-0 border-4 border-transparent ${arrows[position]}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 