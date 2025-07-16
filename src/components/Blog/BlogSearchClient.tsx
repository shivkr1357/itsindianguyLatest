"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSearch } from "@/hooks/useSearch";

interface BlogSearchClientProps {
  onSearchChange: (value: string) => void;
  searchTerm: string;
}

const BlogSearchClient = ({
  onSearchChange,
  searchTerm,
}: BlogSearchClientProps) => {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search blogs..."
        className="w-full px-4 py-2 pl-10 rounded-lg border border-neutral-300 dark:border-neutral-600 
                 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 
                 focus:ring-2 focus:ring-primary-200 outline-none"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
      />
    </div>
  );
};

export default BlogSearchClient;
