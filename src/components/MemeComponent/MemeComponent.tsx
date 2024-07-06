"use client";
import React, { useEffect, useState } from "react";
import ImageList from "@/components/ImageList/ImageListItemComp";
import { imgArray } from "@/config/imgArray";
import { useThemeState } from "@/context/ThemeContext";

const MemeComponent = () => {
   const [fileNames, setFileNames] = useState<string[]>([]); // Ensure fileNames is typed as string[]
   const [loading, setLoading] = useState<boolean>(false); // Typed loading state
   const [error, setError] = useState<Error | null>(null); // Typed error state
   const [page, setPage] = useState<number>(1); // Manage page state with useState
   const { customTheme } = useThemeState();

   // Pagination function with typed data input
   const paginationFunction = (data: string[]): string[] => {
      const pageSize = 20;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const slicedFileNames = data.slice(startIndex, endIndex);
      return slicedFileNames;
   };

   const loadMoreFileNames = async () => {
      setLoading(true);
      setError(null);

      try {
         const data = paginationFunction(imgArray.names); // Use paginationFunction to get data

         setPage(page + 1); // Update page using setPage function
         setFileNames((prev) => [...prev, ...data]);
      } catch (error: any) {
         setError(error); // Set error state with caught error
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      loadMoreFileNames();
   }, []);

   const handleScroll = () => {
      if (
         window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 100 ||
         loading
      ) {
         loadMoreFileNames();
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [loading, page]);

   return (
      <main
         style={{
            marginTop: "60px",
            backgroundColor: customTheme === "dark" ? "#222" : "#ddd",
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
      </main>
   );
};

export default MemeComponent;
