'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CategoriesNavbarLg() {
  const categories = [
    { id: '1', slug: 'quran', name: 'Quran', count: 25 },
    { id: '2', slug: 'hadith', name: 'Hadith', count: 18 },
    { id: '3', slug: 'prayer', name: 'Prayer', count: 12 },
    { id: '4', slug: 'fiqh', name: 'Fiqh', count: 8 },
    { id: '5', slug: 'history', name: 'History', count: 15 },
    { id: '6', slug: 'spirituality', name: 'Spirituality', count: 10 },
  ];

  const pathname = usePathname();

  const isCategoryActive = (categorySlug: string) => {
    return pathname === `/categories/${categorySlug}`;
  };

  return (
    <div className="hidden xl:flex items-center justify-center space-x-3 py-5 px-8 bg-linear-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
      <Link
        href="/"
        className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-200 ${
          pathname === '/'
            ? 'bg-red-500 text-white shadow-xl border-2 border-red-600'
            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white border-2 border-gray-200 dark:border-gray-600'
        }`}
      >
        <span className="text-xl">🏠</span>
        <span>Home Portal</span>
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-200 group ${
            isCategoryActive(category.slug)
              ? 'bg-red-500 text-white shadow-xl border-2 border-red-600'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white border-2 border-gray-200 dark:border-gray-600'
          }`}
        >
          <span className="text-xl group-hover:scale-110 transition-transform">
            {getCategoryIcon(category.name)}
          </span>
          <span>{category.name}</span>
          <span className="text-sm bg-white/20 dark:bg-gray-600/50 px-3 py-1 rounded-full">
            {category.count}
          </span>
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
    'History': '📜',
    'Spirituality': '✨',
  };
  return icons[categoryName] || '📚';
}