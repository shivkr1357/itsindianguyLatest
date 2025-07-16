"use client";
import { useSearch } from "@/hooks/useSearch";
import BlogList from "@/components/Blog/BlogList";
import BlogSearchClient from "@/components/Blog/BlogSearchClient";

interface BlogListClientProps {
  posts: any[];
}

const BlogListClient = ({ posts }: BlogListClientProps) => {
  const { searchTerm, filteredData, updateSearchTerm, handleSearch } =
    useSearch(posts);

  const handleSearchChange = (value: string) => {
    updateSearchTerm(value);
    handleSearch(value, posts);
  };

  return (
    <>
      <BlogSearchClient
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <BlogList posts={filteredData} />
    </>
  );
};

export default BlogListClient;
