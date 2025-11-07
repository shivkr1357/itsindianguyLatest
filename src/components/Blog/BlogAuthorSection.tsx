import Link from "next/link";

interface BlogAuthorSectionProps {
  author: string;
  readTime: string;
  date: string;
}

const BlogAuthorSection = ({ author, readTime, date }: BlogAuthorSectionProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
            {author.charAt(0)}
          </div>
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            {author}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-3">
            Full-Stack Developer & Tech Writer
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Follow Button */}
        <div className="w-full md:w-auto">
          <Link
            href="/about"
            className="block w-full md:w-auto text-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-xl transition-all hover:scale-105 shadow-md hover:shadow-lg font-semibold"
          >
            About Author
          </Link>
        </div>
      </div>

      {/* Author Stats */}
      <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">50+</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">Articles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">10k+</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">Readers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5yrs</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthorSection;

