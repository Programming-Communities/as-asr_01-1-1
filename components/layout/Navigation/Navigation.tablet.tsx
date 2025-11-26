'use client';

import Link from 'next/link';

export default function NavigationTablet() {
  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
        Home
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
        About
      </Link>
      <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors">
        Services
      </Link>
    </nav>
  );
}