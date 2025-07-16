"use client";
import { useState, useCallback } from "react";

export const useSearch = (initialData: any[] = []) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = useCallback(
    (
      term: string,
      data: any[],
      searchFields: string[] = ["title", "description"]
    ) => {
      const filtered = data.filter((item) =>
        searchFields.some((field) =>
          item[field]?.toLowerCase().includes(term.toLowerCase())
        )
      );
      setFilteredData(filtered);
    },
    []
  );

  const updateSearchTerm = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return {
    searchTerm,
    filteredData,
    handleSearch,
    updateSearchTerm,
    setFilteredData,
  };
};
