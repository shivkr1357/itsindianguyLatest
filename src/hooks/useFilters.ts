"use client";
import { useState, useCallback } from "react";

export const useFilters = (initialData: any[] = []) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [filteredData, setFilteredData] = useState(initialData);

  const applyFilters = useCallback(
    (
      data: any[],
      categoryField: string = "category",
      levelField: string = "level"
    ) => {
      const filtered = data.filter((item) => {
        const matchesCategory =
          selectedCategory === "All" ||
          item[categoryField] === selectedCategory;
        const matchesLevel =
          selectedLevel === "All" || item[levelField] === selectedLevel;
        return matchesCategory && matchesLevel;
      });
      setFilteredData(filtered);
    },
    [selectedCategory, selectedLevel]
  );

  const updateCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const updateLevel = useCallback((level: string) => {
    setSelectedLevel(level);
  }, []);

  return {
    selectedCategory,
    selectedLevel,
    filteredData,
    applyFilters,
    updateCategory,
    updateLevel,
    setFilteredData,
  };
};
