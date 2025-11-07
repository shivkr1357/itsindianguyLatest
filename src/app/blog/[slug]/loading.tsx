export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-green-50/20 to-teal-50/10 dark:from-neutral-900 dark:via-green-950/10 dark:to-teal-950/5">
      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-b from-white to-green-50/20 dark:from-neutral-800 dark:to-green-950/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500" />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button Skeleton */}
            <div className="h-6 w-32 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse mb-8"></div>

            <div className="mb-8">
              {/* Badges Skeleton */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-20 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse"></div>
                <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
              </div>
              
              {/* Title Skeleton */}
              <div className="space-y-3 mb-6">
                <div className="h-12 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                <div className="h-12 w-3/4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
              </div>
              
              {/* Description Skeleton */}
              <div className="space-y-2 mb-6">
                <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                <div className="h-6 w-5/6 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
              </div>

              {/* Author Skeleton */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                  <div className="h-3 w-20 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Image Skeleton */}
            <div className="relative h-64 md:h-[500px] bg-neutral-200 dark:bg-neutral-700 rounded-3xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Author Section Skeleton */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <div className="h-32 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
            </div>

            {/* Content Sections Skeleton */}
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <div className="h-8 w-48 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loading Indicator */}
      <div className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span className="font-semibold">Loading article...</span>
      </div>
    </main>
  );
}

