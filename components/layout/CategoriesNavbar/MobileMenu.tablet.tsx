'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenuTablet() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Blog', href: '/posts', icon: '📚' },
    { name: 'Categories', href: '/categories', icon: '📂' },
    { name: 'About', href: '/about', icon: 'ℹ️' },
    { name: 'Services', href: '/services', icon: '🛠️' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="md:flex lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-3 bg-linear-to-r from-red-500 to-pink-500 text-white rounded-xl shadow-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          <span className={`absolute top-1 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : ''}`} />
          <span className={`absolute top-3 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`absolute top-5 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeMenu}
          />

          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 flex flex-col">
            
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-linear-to-r from-red-500 to-pink-500 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🕌</span>
                </div>
                <div>
                  <h2 className="font-bold text-lg">Al-Asr</h2>
                  <p className="text-red-100 text-xs">Tablet Menu</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-red-500 text-white shadow-lg'
                          : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium text-sm flex-1">{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <div className="text-center">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Al-Asr Islamic Centers
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}