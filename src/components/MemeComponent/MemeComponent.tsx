"use client";
import React, { useCallback, useEffect, useState } from "react";
import ImageList from "@/components/ImageList/ImageListItemComp";
import { imgArray } from "@/config/imgArray";
import { useThemeState } from "@/context/ThemeContext";

const MemeComponent = () => {
  const [fileNames, setFileNames] = useState<string[]>([]); // Ensure fileNames is typed as string[]
  const [loading, setLoading] = useState<boolean>(false); // Typed loading state
  const [error, setError] = useState<Error | null>(null); // Typed error state
  const [page, setPage] = useState<number>(1); // Manage page state with useState
  const { customTheme } = useThemeState();

  // Load more file names function - uses functional updates to avoid dependency issues
  const loadMoreFileNames = useCallback(() => {
    if (loading) return; // Prevent multiple simultaneous loads

    setLoading(true);
    setError(null);

    // Use functional update to get current page value without depending on it
    setPage((currentPage) => {
      const pageSize = 20;
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const data = imgArray.names.slice(startIndex, endIndex);

      setFileNames((prev) => [...prev, ...data]);
      setLoading(false);

      // Return next page
      return currentPage + 1;
    });
  }, [loading]); // Only depend on loading to prevent concurrent loads

  // Initial load - only run once on mount
  useEffect(() => {
    loadMoreFileNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - only run on mount

  const handleScroll = useCallback(() => {
    if (loading) return; // Don't load if already loading

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      loadMoreFileNames();
    }
  }, [loading, loadMoreFileNames]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="min-h-screen pt-20"
      style={{
        backgroundColor: customTheme === "dark" ? "#222" : "#ddd",
        position: "relative",
        // zIndex: 1,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <ImageList itemData={fileNames} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginBottom: "20px",
          }}
        >
          {loading && <div>Loading...</div>}
          {error && <p>Error: {error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default MemeComponent;
