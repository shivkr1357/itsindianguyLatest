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

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
      case "Intermediate":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400";
      case "Advanced":
        return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400";
      default:
        return "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400";
    }
  };

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search tutorials..."
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 dark:border-neutral-700 
                     bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 
                     focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-xl 
                     bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 
                     focus:ring-2 focus:ring-green-500 outline-none min-w-[180px] shadow-sm"
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
            className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-xl 
                     bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 
                     focus:ring-2 focus:ring-green-500 outline-none min-w-[180px] shadow-sm"
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
            className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-green-500 dark:hover:border-green-500 hover:scale-105"
          >
            <div className="relative h-48 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5" />
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                fill
                className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-3 py-1 bg-gradient-to-r from-green-500/10 to-teal-500/10 text-green-600 dark:text-green-400 rounded-full font-medium">
                  {tutorial.category}
                </span>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getLevelColor(tutorial.level)}`}>
                  {tutorial.level}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {tutorial.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                {tutorial.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {tutorial.duration}
                </div>
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Start Learning</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-green-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-4">
            <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
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
