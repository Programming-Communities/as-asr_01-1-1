'use client';

import Link from 'next/link';

interface CategoriesClientProps {
  categories: any[];
}

export default function CategoriesClient({ categories }: CategoriesClientProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Categories</h1>
          <p className="text-gray-600 mb-8">Browse posts by category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {category.name}
                </h3>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  {category.count} posts
                </span>
              </div>
              
              {category.description && (
                <p className="text-gray-600 line-clamp-2">
                  {category.description}
                </p>
              )}
              
              <div className="mt-4 flex items-center text-red-600 group-hover:text-red-700 transition-colors">
                <span className="text-sm font-medium">View Posts</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {categories.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-xl text-gray-600">No categories found</h3>
          </div>
        )}
      </div>
    </div>
  );
}