import { Post } from '@/types/blog';

export interface BlogItemBaseProps extends Post {
  index?: number;
  readingTime?: number;
  views?: number;
  priority?: boolean;
  isCurrent?: boolean;
}

// Individual device props (they should all extend the base)
export interface BlogItemMobileProps extends BlogItemBaseProps {}
export interface BlogItemTabletProps extends BlogItemBaseProps {}
export interface BlogItemDesktopProps extends BlogItemBaseProps {}
export interface BlogItemLgProps extends BlogItemBaseProps {}
export interface BlogItem4kProps extends BlogItemBaseProps {}