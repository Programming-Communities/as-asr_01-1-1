// lib/api/wordpress/categories.ts
import fetchGraphQL from './client';// ✅ Changed from { fetchGraphQL } to default import
import { Category } from '@/types/blog';
import { CACHE_TIMES } from '@/lib/constants';

// ✅ GET ALL CATEGORIES WITH HIERARCHY
export async function getAllCategories(): Promise<Category[]> {
  try {
    console.log('📂 Fetching categories from WordPress...');
    
    const query = `
      query GetAllCategories {
        categories(first: 100, where: {hideEmpty: true}) {
          nodes {
            id
            slug
            name
            description
            count
            parent {
              node {
                id
                slug
                name
              }
            }
            children {
              nodes {
                id
                slug
                name
                description
                count
              }
            }
          }
        }
      }
    `;

    const data = await fetchGraphQL(query, {}, {
      revalidate: CACHE_TIMES.long,
      tags: ['categories']
    });

    const categories = data?.categories?.nodes || [];
    console.log(`✅ Retrieved ${categories.length} categories from WordPress`);
    
    return organizeCategoriesHierarchy(categories);
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    return [];
  }
}

// ✅ GET SINGLE CATEGORY BY SLUG
export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const query = `
      query GetCategory($slug: ID!) {
        category(id: $slug, idType: SLUG) {
          id
          slug
          name
          description
          count
          parent {
            node {
              id
              slug
              name
            }
          }
          children {
            nodes {
              id
              slug
              name
              description
              count
            }
          }
          seo {
            title
            metaDesc
          }
        }
      }
    `;

    const data = await fetchGraphQL(query, { slug }, {
      revalidate: CACHE_TIMES.medium,
      tags: [`category:${slug}`]
    });

    return data?.category || null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

// ✅ GET CATEGORIES WITH POST COUNTS
export async function getCategoriesWithCounts(): Promise<Category[]> {
  try {
    const categories = await getAllCategories();
    return categories.filter(category => (category.count || 0) > 0);
  } catch (error) {
    console.error('Error fetching categories with counts:', error);
    return [];
  }
}

// ✅ ORGANIZE CATEGORIES HIERARCHICALLY
function organizeCategoriesHierarchy(categories: any[]): Category[] {
  const categoryMap = new Map();
  const rootCategories: Category[] = [];

  // First pass: create all category objects
  categories.forEach(category => {
    const categoryData: Category = {
      id: category.id,
      slug: category.slug,
      name: category.name,
      count: category.count || 0,
      description: category.description || '',
      parentId: category.parent?.node?.id || null,
      children: category.children?.nodes?.map((child: any) => ({
        id: child.id,
        slug: child.slug,
        name: child.name,
        count: child.count || 0,
        description: child.description || '',
        parentId: category.id,
        children: []
      })) || []
    };

    categoryMap.set(category.id, categoryData);
  });

  // Second pass: build hierarchy
  categories.forEach(category => {
    const categoryData = categoryMap.get(category.id);
    
    if (category.parent?.node) {
      const parentCategory = categoryMap.get(category.parent.node.id);
      if (parentCategory) {
        parentCategory.children = parentCategory.children || [];
        if (!parentCategory.children.find((child: Category) => child.id === categoryData.id)) {
          parentCategory.children.push(categoryData);
        }
      }
    } else {
      if (!rootCategories.find(root => root.id === categoryData.id)) {
        rootCategories.push(categoryData);
      }
    }
  });

  return rootCategories;
}

// ✅ GET FEATURED CATEGORIES (categories with most posts)
export async function getFeaturedCategories(limit: number = 8): Promise<Category[]> {
  try {
    const categories = await getAllCategories();
    return categories
      .filter(category => (category.count || 0) > 0)
      .sort((a, b) => (b.count || 0) - (a.count || 0))
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching featured categories:', error);
    return [];
  }
}