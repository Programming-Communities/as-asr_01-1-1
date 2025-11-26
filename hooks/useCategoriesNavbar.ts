'use client';
import { useState } from 'react';

export function useCategoriesNavbar() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categorySlug: string) => {
    setOpenCategory(openCategory === categorySlug ? null : categorySlug);
  };

  const closeCategory = () => {
    setOpenCategory(null);
  };

  return {
    openCategory,
    toggleCategory,
    closeCategory
  };
}