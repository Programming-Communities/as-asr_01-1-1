'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

export default function SidebarMenu4k({ isOpen, onClose, id }: SidebarMenuProps) {
  const pathname = usePathname();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const menuItems = [
    { name: 'Home Portal', href: '/', icon: '🏠', color: 'text-blue-500', description: 'Main dashboard and overview' },
    { name: 'Islamic Knowledge Base', href: '/posts', icon: '📚', color: 'text-green-500', description: 'Comprehensive blog & articles' },
    { name: 'Categories Directory', href: '/categories', icon: '📂', color: 'text-purple-500', description: 'Browse all Islamic topics' },
    { name: 'About Our Center', href: '/about', icon: 'ℹ️', color: 'text-orange-500', description: 'Learn about our mission' },
    { name: 'Service Portfolio', href: '/services', icon: '🛠️', color: 'text-cyan-500', description: 'Complete service offerings' },
    { name: 'Contact & Support', href: '/contact', icon: '📞', color: 'text-pink-500', description: 'Get in touch with us' },
    { name: 'Islamic Calendar System', href: '/islamic-calendar', icon: '📅', color: 'text-yellow-500', description: 'Important Islamic dates' },
    { name: 'Quran Learning Program', href: '/quran-classes', icon: '📖', color: 'text-red-500', description: 'Comprehensive Quran studies' },
    { name: 'Community Development', href: '/community-programs', icon: '👨‍👩‍👧‍👦', color: 'text-indigo-500', description: 'Join community activities' },
    { name: 'Religious Guidance', href: '/religious-guidance', icon: '🕌', color: 'text-teal-500', description: 'Spiritual counseling' },
  ];

  const quickActions = [
    { name: 'Daily Prayer Times', href: '/prayer-times', icon: '🕋', color: 'from-green-500 to-emerald-500' },
    { name: 'Support Our Mission', href: '/donate', icon: '💝', color: 'from-yellow-500 to-amber-500' },
    { name: 'Quranic Studies', href: '/quran', icon: '📖', color: 'from-blue-500 to-cyan-500' },
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
      {/* Premium Backdrop */}
      <div 
        className="fixed inset-0 bg-black/10 backdrop-blur-md z-50 transition-all duration-500"
        onClick={handleBackdropClick}
      />

      {/* 4K Premium Sidebar */}
      <div 
        id={id}
        className={`fixed top-0 right-0 h-full w-[480px] bg-white dark:bg-gray-900 shadow-4xl border-l-2 border-gray-300 dark:border-gray-600 transform transition-transform duration-500 z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Premium Header */}
        <div className="flex items-center justify-between p-8 border-b-2 border-gray-200 dark:border-gray-700 bg-linear-to-r from-red-100 to-pink-100 dark:from-gray-800 dark:to-gray-900">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-linear-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-3xl">
              <span className="text-white text-3xl">🕌</span>
            </div>
            <div>
              <h2 className="font-bold text-3xl text-gray-900 dark:text-white">Al-Asr Navigation</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Premium Islamic Knowledge Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-4 hover:bg-white dark:hover:bg-gray-800 rounded-3xl transition-all duration-300 hover:scale-110 shadow-2xl"
            aria-label="Close menu"
          >
            <span className="text-3xl text-gray-600 dark:text-gray-400">✕</span>
          </button>
        </div>

        {/* Premium Quick Actions */}
        <div className="p-8 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-6 text-2xl">Quick Access</h3>
          <div className="grid grid-cols-2 gap-5">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className={`p-6 rounded-3xl bg-linear-to-br ${action.color} text-white text-center transition-all duration-400 hover:scale-105 hover:shadow-3xl group`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{action.icon}</div>
                <div className="text-lg font-bold">{action.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Premium Menu Items */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="space-y-5">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-start gap-6 p-6 rounded-3xl transition-all duration-400 group border-2 ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-300 dark:border-red-700 shadow-3xl'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border-transparent hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-2xl'
                  }`}
                >
                  <span className={`text-4xl ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-2xl mb-2">{item.name}</div>
                    <div className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</div>
                  </div>
                  {isActive && (
                    <div className="w-5 h-5 bg-red-500 rounded-full mt-3 animate-pulse shadow-lg"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Premium Footer */}
        <div className="p-8 border-t-2 border-gray-200 dark:border-gray-700 bg-linear-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <div className="text-center">
            <p className="text-xl text-gray-800 dark:text-gray-200 font-bold mb-3">
              Al-Asr Islamic Centers Worldwide
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Empowering global Muslim community through authentic Islamic knowledge and comprehensive services
            </p>
            <div className="flex justify-center gap-6">
              <button className="p-4 bg-white dark:bg-gray-700 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 shadow-2xl">
                <span className="text-3xl">🔍</span>
              </button>
              <button className="p-4 bg-white dark:bg-gray-700 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 shadow-2xl">
                <span className="text-3xl">💝</span>
              </button>
              <button className="p-4 bg-white dark:bg-gray-700 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 shadow-2xl">
                <span className="text-3xl">📱</span>
              </button>
              <button className="p-4 bg-white dark:bg-gray-700 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 shadow-2xl">
                <span className="text-3xl">🌐</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}