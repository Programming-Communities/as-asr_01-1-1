// Common types used throughout the application
export interface BaseEntity {
  id: string;
  slug: string;
  name: string;
  description?: string;
}

export interface PaginationInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}

export interface PaginatedResponse<T> {
  nodes: T[];
  pageInfo: PaginationInfo;
  totalCount?: number;
}

export interface SEOData {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

export interface ImageData {
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
  };
  srcSet?: string;
  sizes?: string;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  description?: string;
  avatar?: {
    url: string;
  };
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message?: string;
}

export interface SearchParams {
  query: string;
  type?: 'posts' | 'categories' | 'tags' | 'all';
  page?: number;
  limit?: number;
}

// API Response types
export interface APIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface APIError {
  message: string;
  code?: string;
  details?: any;
}

// Theme types
export interface Theme {
  mode: 'light' | 'dark' | 'auto';
  primaryColor: string;
  font: string;
}

// App settings types
export interface AppSettings {
  theme: Theme;
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Required<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ResponsiveProps {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
}

// Event types
export interface FormEvent<T = HTMLFormElement> extends React.FormEvent<T> {}
export interface ChangeEvent<T = HTMLInputElement> extends React.ChangeEvent<T> {}
export interface ClickEvent<T = HTMLButtonElement> extends React.MouseEvent<T> {}
export interface KeyboardEvent<T = HTMLInputElement> extends React.KeyboardEvent<T> {}