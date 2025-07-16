"use client";
import { useState, useCallback } from "react";

export const useFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = useCallback(
    (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    },
    [openIndex]
  );

  const isOpen = useCallback(
    (index: number) => {
      return openIndex === index;
    },
    [openIndex]
  );

  return {
    openIndex,
    toggleFAQ,
    isOpen,
  };
};
