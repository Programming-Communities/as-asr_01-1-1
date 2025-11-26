// app/categories/page.tsx
import { getAllCategories } from '@/lib/api/wordpress/categories';
import CategoriesClient from '@/app/components/pages/CategoriesClient';

export default async function CategoriesPage() {
  try {
    const categories = await getAllCategories();
    return <CategoriesClient categories={categories} />;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return <CategoriesClient categories={[]} />;
  }
}