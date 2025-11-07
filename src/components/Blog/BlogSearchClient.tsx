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
    <div className="relative mb-12">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles by title, description..."
          className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-neutral-200 dark:border-neutral-600 
                   bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 
                   focus:border-green-500 dark:focus:border-green-400 outline-none transition-colors
                   shadow-md focus:shadow-lg"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <span className="text-neutral-600 dark:text-neutral-300 text-sm">✕</span>
          </button>
        )}
      </div>
      {searchTerm && (
        <p className="text-center mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Searching for: <span className="font-semibold text-green-600 dark:text-green-400">&quot;{searchTerm}&quot;</span>
        </p>
      )}
    </div>
  );
};

export default BlogSearchClient;
