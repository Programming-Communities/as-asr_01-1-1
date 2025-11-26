'use client';

import Link from 'next/link';

export default function NavigationLg() {
  return (
    <nav className="flex items-center space-x-10">
      <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">
        Home
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">
        About
      </Link>
      <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">
        Services
      </Link>
      <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">
        Blog
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-lg">
        Contact
      </Link>
    </nav>
  );
}