'use client';

import Link from 'next/link';

export default function Navigation4k() {
  return (
    <nav className="flex items-center space-x-12">
      <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-xl">
        Home
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-xl">
        About
      </Link>
      <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-xl">
        Services
      </Link>
      <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-xl">
        Blog
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium text-xl">
        Contact
      </Link>
    </nav>
  );
}