'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { DemoAd } from '@/components/ads/DemoAd';
import { useSidebarMenu } from '@/hooks/useSidebarMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openSidebar } = useSidebarMenu();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      {/* Top Ad Banner */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <DemoAd 
            format="banner"
            title="Al-Asr Islamic Center - Daily Islamic Content"
            className="mx-auto max-w-4xl"
          />
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo.webp"
              alt="Al-Asr Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Al-Asr
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Islamic Center
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Theme Toggle & Mobile Menu & Sidebar Toggle */}
          <div className="flex items-center space-x-4">
            {/* Sidebar Toggle Button - Desktop */}
            <button
              onClick={openSidebar}
              className="hidden md:block p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Open sidebar"
            >
              ☰ Menu
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/categories" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              {/* Sidebar Toggle - Mobile */}
              <button
                onClick={() => {
                  openSidebar();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 text-left"
              >
                More Options
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;