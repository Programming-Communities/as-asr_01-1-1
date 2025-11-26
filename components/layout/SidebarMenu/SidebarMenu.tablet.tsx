'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

export default function SidebarMenuTablet({ isOpen, onClose, id }: SidebarMenuProps) {
  const pathname = usePathname();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠', color: 'text-blue-500' },
    { name: 'Islamic Blog', href: '/posts', icon: '📚', color: 'text-green-500' },
    { name: 'Categories', href: '/categories', icon: '📂', color: 'text-purple-500' },
    { name: 'About Us', href: '/about', icon: 'ℹ️', color: 'text-orange-500' },
    { name: 'Services', href: '/services', icon: '🛠️', color: 'text-cyan-500' },
    { name: 'Contact', href: '/contact', icon: '📞', color: 'text-pink-500' },
    { name: 'Islamic Calendar', href: '/islamic-calendar', icon: '📅', color: 'text-yellow-500' },
  ];

  const quickActions = [
    { name: 'Prayer Times', href: '/prayer-times', icon: '🕋', color: 'from-green-500 to-emerald-500' },
    { name: 'Support', href: '/donate', icon: '💝', color: 'from-yellow-500 to-amber-500' },
    { name: 'Quran', href: '/quran', icon: '📖', color: 'from-blue-500 to-cyan-500' },
    { name: 'Hadith', href: '/hadith', icon: '📜', color: 'from-purple-500 to-pink-500' },
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
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-all duration-300"
        onClick={handleBackdropClick}
      />

      {/* Tablet Sidebar */}
      <div 
        id={id}
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🕌</span>
            </div>
            <div>
              <h2 className="font-bold text-lg text-gray-900 dark:text-white">Al-Asr Menu</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Tablet Navigation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <span className="text-xl">✕</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="p-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Access</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className={`p-3 rounded-lg bg-linear-to-br ${action.color} text-white text-center transition-all duration-200 hover:scale-105 hover:shadow-lg`}
              >
                <div className="text-lg mb-1">{action.icon}</div>
                <div className="text-xs font-medium">{action.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent'
                  }`}
                >
                  <span className={`text-xl ${item.color}`}>{item.icon}</span>
                  <span className="font-medium text-sm flex-1">{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Al-Asr Islamic Centers
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Tablet Navigation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}