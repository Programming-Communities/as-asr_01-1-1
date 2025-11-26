'use client';

import Link from 'next/link';

export default function NavigationDesktop() {
  return (
    <nav className="flex items-center space-x-8">
      <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
        Home
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
        About
      </Link>
      <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
        Services
      </Link>
      <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
        Blog
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
        Contact
      </Link>
    </nav>
  );
}