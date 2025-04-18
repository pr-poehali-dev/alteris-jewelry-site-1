export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface FilterCategory {
  id: string;
  name: string;
}

export interface FilterOption {
  id: string;
  label: string;
}

export type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'popular';

export interface CategoryFilters {
  [key: string]: boolean;
}

export interface MaterialFilters {
  [key: string]: boolean;
}

export interface StyleFilters {
  [key: string]: boolean;
}

export interface CatalogFilters {
  categories: CategoryFilters;
  materials: MaterialFilters;
  styles: StyleFilters;
  priceRange: [number, number];
}
