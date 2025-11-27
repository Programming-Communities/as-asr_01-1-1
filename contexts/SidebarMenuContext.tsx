'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarMenuContextType {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const SidebarMenuContext = createContext<SidebarMenuContextType | undefined>(undefined);

interface SidebarMenuProviderProps {
  children: ReactNode;
}

export function SidebarMenuProvider({ children }: SidebarMenuProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const value = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };

  return (
    <SidebarMenuContext.Provider value={value}>
      {children}
    </SidebarMenuContext.Provider>
  );
}

export function useSidebarMenu() {
  const context = useContext(SidebarMenuContext);
  if (context === undefined) {
    throw new Error('useSidebarMenu must be used within a SidebarMenuProvider');
  }
  return context;
}