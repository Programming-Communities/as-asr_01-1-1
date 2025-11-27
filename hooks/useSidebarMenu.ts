'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Simple version without JSX
export function SidebarMenuProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return children;
}

export function useSidebarMenu() {
  return {
    isSidebarOpen: false,
    openSidebar: () => {},
    closeSidebar: () => {},
    toggleSidebar: () => {},
  };
}