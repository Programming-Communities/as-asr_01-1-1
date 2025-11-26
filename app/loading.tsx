export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        {/* Logo/Spinner */}
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-linear-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <span className="text-white text-2xl font-bold">A</span>
          </div>
          <div className="absolute -inset-2 border-4 border-red-200 border-t-red-500 rounded-2xl animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold bg-linear-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-2">
          Al-Asr Centers
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Loading Islamic content...
        </p>
        
        {/* Progress Bar */}
        <div className="mt-6 w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-linear-to-r from-red-500 to-pink-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}