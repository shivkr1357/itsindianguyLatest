const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-primary-200/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary-200 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 