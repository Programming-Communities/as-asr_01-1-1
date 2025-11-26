import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-md">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <span className="text-5xl">🔍</span>
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            404
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mb-8">
          It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="bg-linear-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg font-semibold flex items-center gap-2"
          >
            🏠 Return Home
          </Link>
          <Link 
            href="/posts"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold flex items-center gap-2"
          >
            📚 Browse Posts
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/categories" className="text-red-500 hover:text-red-600 text-sm">
              Categories
            </Link>
            <Link href="/about" className="text-red-500 hover:text-red-600 text-sm">
              About
            </Link>
            <Link href="/contact" className="text-red-500 hover:text-red-600 text-sm">
              Contact
            </Link>
            <Link href="/search" className="text-red-500 hover:text-red-600 text-sm">
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}