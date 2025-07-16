"use client";
import { useSearch } from "@/hooks/useSearch";
import { useFilters } from "@/hooks/useFilters";
import Link from "next/link";
import Image from "next/image";

interface TutorialsClientProps {
  tutorials: any[];
  categories: string[];
  levels: string[];
}

const TutorialsClient = ({
  tutorials,
  categories,
  levels,
}: TutorialsClientProps) => {
  const { searchTerm, filteredData, updateSearchTerm, handleSearch } =
    useSearch(tutorials);
  const {
    selectedCategory,
    selectedLevel,
    applyFilters,
    updateCategory,
    updateLevel,
  } = useFilters(tutorials);

  const handleSearchChange = (value: string) => {
    updateSearchTerm(value);
    const searchFiltered = tutorials.filter(
      (tutorial) =>
        tutorial.title.toLowerCase().includes(value.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(value.toLowerCase())
    );
    applyFilters(searchFiltered);
  };

  const handleCategoryChange = (category: string) => {
    updateCategory(category);
    applyFilters(tutorials);
  };

  const handleLevelChange = (level: string) => {
    updateLevel(level);
    applyFilters(tutorials);
  };

  return (
    <>
      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search tutorials..."
          className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 
                   bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 
                   focus:ring-2 focus:ring-primary-200 outline-none"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md 
                     bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 
                     focus:ring-2 focus:ring-primary-200 outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Level
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => handleLevelChange(e.target.value)}
            className="px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md 
                     bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 
                     focus:ring-2 focus:ring-primary-200 outline-none"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((tutorial) => (
          <Link
            href={`/tutorials/${tutorial.slug}`}
            key={tutorial.id}
            className="group bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="relative h-40 bg-neutral-100 dark:bg-neutral-700">
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-primary-200/10 text-primary-200 rounded">
                  {tutorial.category}
                </span>
                <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">
                  {tutorial.level}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100 group-hover:text-primary-200 transition-colors">
                {tutorial.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {tutorial.description}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Duration: {tutorial.duration}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            No tutorials found
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Try adjusting your search criteria or filters.
          </p>
        </div>
      )}
    </>
  );
};

export default TutorialsClient;
