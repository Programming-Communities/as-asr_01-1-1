'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

export default function SidebarMenuDesktop({ isOpen, onClose, id }: SidebarMenuProps) {
  const pathname = usePathname();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const menuItems = [
    { name: 'Home Portal', href: '/', icon: '🏠', color: 'text-blue-500', description: 'Main dashboard' },
    { name: 'Islamic Library', href: '/posts', icon: '📚', color: 'text-green-500', description: 'Blog & articles' },
    { name: 'Categories', href: '/categories', icon: '📂', color: 'text-purple-500', description: 'Browse topics' },
    { name: 'About Center', href: '/about', icon: 'ℹ️', color: 'text-orange-500', description: 'Learn about us' },
    { name: 'Our Services', href: '/services', icon: '🛠️', color: 'text-cyan-500', description: 'What we offer' },
    { name: 'Contact Support', href: '/contact', icon: '📞', color: 'text-pink-500', description: 'Get in touch' },
    { name: 'Islamic Calendar', href: '/islamic-calendar', icon: '📅', color: 'text-yellow-500', description: 'Important dates' },
    { name: 'Quran Classes', href: '/quran-classes', icon: '📖', color: 'text-red-500', description: 'Learn Quran' },
  ];

  const quickActions = [
    { name: 'Prayer Times', href: '/prayer-times', icon: '🕋', color: 'from-green-500 to-emerald-500' },
    { name: 'Support Us', href: '/donate', icon: '💝', color: 'from-yellow-500 to-amber-500' },
    { name: 'Quran Reading', href: '/quran', icon: '📖', color: 'from-blue-500 to-cyan-500' },
    { name: 'Hadith Collection', href: '/hadith', icon: '📜', color: 'from-purple-500 to-pink-500' },
  ];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-all duration-300"
        onClick={handleBackdropClick}
      />

      {/* Enhanced Sidebar */}
      <div 
        id={id}
        className={`fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Enhanced Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-linear-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-linear-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">🕌</span>
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-900 dark:text-white">Al-Asr Navigation</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Islamic Knowledge Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200 hover:scale-110 shadow-sm"
            aria-label="Close menu"
          >
            <span className="text-2xl text-gray-600 dark:text-gray-400">✕</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className={`p-4 rounded-xl bg-linear-to-br ${action.color} text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</div>
                <div className="text-sm font-semibold">{action.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Menu Items */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-3">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-2 border-red-200 dark:border-red-800 shadow-lg'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md'
                  }`}
                >
                  <span className={`text-2xl ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</div>
                  </div>
                  {isActive && (
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
              Al-Asr Islamic Centers
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Empowering through Islamic knowledge
            </p>
            <div className="flex justify-center gap-3 mt-3">
              <button className="p-2 bg-white dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-sm">
                <span className="text-lg">🔍</span>
              </button>
              <button className="p-2 bg-white dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-sm">
                <span className="text-lg">💝</span>
              </button>
              <button className="p-2 bg-white dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-sm">
                <span className="text-lg">📱</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}