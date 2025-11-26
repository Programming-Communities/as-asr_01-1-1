'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

export default function SidebarMenuLg({ isOpen, onClose, id }: SidebarMenuProps) {
  const pathname = usePathname();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const menuItems = [
    { name: 'Home Portal', href: '/', icon: '🏠', color: 'text-blue-500', description: 'Main dashboard' },
    { name: 'Islamic Library', href: '/posts', icon: '📚', color: 'text-green-500', description: 'Blog & articles' },
    { name: 'Categories Directory', href: '/categories', icon: '📂', color: 'text-purple-500', description: 'Browse topics' },
    { name: 'About Center', href: '/about', icon: 'ℹ️', color: 'text-orange-500', description: 'Learn about us' },
    { name: 'Service Portfolio', href: '/services', icon: '🛠️', color: 'text-cyan-500', description: 'What we offer' },
    { name: 'Contact Support', href: '/contact', icon: '📞', color: 'text-pink-500', description: 'Get in touch' },
    { name: 'Islamic Calendar', href: '/islamic-calendar', icon: '📅', color: 'text-yellow-500', description: 'Important dates' },
    { name: 'Quran Learning', href: '/quran-classes', icon: '📖', color: 'text-red-500', description: 'Learn Quran' },
    { name: 'Community Programs', href: '/community-programs', icon: '👨‍👩‍👧‍👦', color: 'text-indigo-500', description: 'Join activities' },
  ];

  const quickActions = [
    { name: 'Prayer Times', href: '/prayer-times', icon: '🕋', color: 'from-green-500 to-emerald-500' },
    { name: 'Support Mission', href: '/donate', icon: '💝', color: 'from-yellow-500 to-amber-500' },
    { name: 'Quran Reading', href: '/quran', icon: '📖', color: 'from-blue-500 to-cyan-500' },
    { name: 'Hadith Database', href: '/hadith', icon: '📜', color: 'from-purple-500 to-pink-500' },
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
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-all duration-300"
        onClick={handleBackdropClick}
      />

      {/* Large Desktop Sidebar */}
      <div 
        id={id}
        className={`fixed top-0 right-0 h-full w-[420px] bg-white dark:bg-gray-900 shadow-3xl border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Enhanced Header */}
        <div className="flex items-center justify-between p-7 border-b border-gray-200 dark:border-gray-700 bg-linear-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-linear-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white text-2xl">🕌</span>
            </div>
            <div>
              <h2 className="font-bold text-2xl text-gray-900 dark:text-white">Al-Asr Navigation</h2>
              <p className="text-gray-600 dark:text-gray-400 text-base">Islamic Knowledge Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-white dark:hover:bg-gray-800 rounded-2xl transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Close menu"
          >
            <span className="text-2xl text-gray-600 dark:text-gray-400">✕</span>
          </button>
        </div>

        {/* Enhanced Quick Actions */}
        <div className="p-7 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-5 text-xl">Quick Access</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className={`p-5 rounded-2xl bg-linear-to-br ${action.color} text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{action.icon}</div>
                <div className="text-base font-semibold">{action.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Menu Items */}
        <div className="flex-1 overflow-y-auto p-7">
          <div className="space-y-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 group border-2 ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 shadow-xl'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg'
                  }`}
                >
                  <span className={`text-3xl ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-xl mb-1">{item.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
                  </div>
                  {isActive && (
                    <div className="w-4 h-4 bg-red-500 rounded-full mt-2 animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="p-7 border-t border-gray-200 dark:border-gray-700 bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 font-bold mb-2">
              Al-Asr Islamic Centers
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              Empowering through authentic Islamic knowledge
            </p>
            <div className="flex justify-center gap-4">
              <button className="p-3 bg-white dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 shadow-lg">
                <span className="text-2xl">🔍</span>
              </button>
              <button className="p-3 bg-white dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 shadow-lg">
                <span className="text-2xl">💝</span>
              </button>
              <button className="p-3 bg-white dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 shadow-lg">
                <span className="text-2xl">📱</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}