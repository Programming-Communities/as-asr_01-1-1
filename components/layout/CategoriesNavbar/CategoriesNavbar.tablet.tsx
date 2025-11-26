'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CategoriesNavbarTablet() {
  const categories = [
    { id: '1', slug: 'quran', name: 'Quran', count: 25 },
    { id: '2', slug: 'hadith', name: 'Hadith', count: 18 },
    { id: '3', slug: 'prayer', name: 'Prayer', count: 12 },
    { id: '4', slug: 'fiqh', name: 'Fiqh', count: 8 },
  ];

  const pathname = usePathname();

  const isCategoryActive = (categorySlug: string) => {
    return pathname === `/categories/${categorySlug}`;
  };

  return (
    <div className="hidden md:flex lg:hidden items-center gap-2 py-3 px-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide">
      <Link
        href="/"
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
          pathname === '/'
            ? 'bg-red-500 text-white shadow-lg'
            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
        }`}
      >
        <span>🏠</span>
        <span>Home</span>
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            isCategoryActive(category.slug)
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          <span>{getCategoryIcon(category.name)}</span>
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
}

function getCategoryIcon(categoryName: string) {
  const icons: { [key: string]: string } = {
    'Quran': '📖',
    'Hadith': '💬',
    'Prayer': '🕌',
    'Fiqh': '⚖️',
  };
  return icons[categoryName] || '📚';
}