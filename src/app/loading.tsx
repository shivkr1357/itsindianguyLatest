export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-primary-200/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary-200 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
} 