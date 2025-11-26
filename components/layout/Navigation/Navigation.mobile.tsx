'use client';

import Link from 'next/link';

export default function NavigationMobile() {
  return (
    <nav className="flex items-center space-x-4">
      <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
        Home
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
        About
      </Link>
    </nav>
  );
}