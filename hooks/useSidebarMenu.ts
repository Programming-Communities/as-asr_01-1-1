'use client';
import { useState } from 'react';

export function useSidebarMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar
  };
}