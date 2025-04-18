import { useState, useCallback } from 'react';
import { CatalogFilters, SortOption } from '@/types/catalog';
import { priceRangeConfig } from '@/data/catalog-data';

const initialFilters: CatalogFilters = {
  categories: {},
  materials: {},
  styles: {},
  priceRange: priceRangeConfig.default,
};

export const useCatalogFilters = () => {
  const [filters, setFilters] = useState<CatalogFilters>(initialFilters);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);
  
  const updateFilters = useCallback((newFilters: Partial<CatalogFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);
  
  const applyFilters = useCallback(() => {
    setIsFiltersApplied(true);
    // Здесь может быть логика, которая обновляет URL с параметрами фильтров
  }, []);
  
  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
    setIsFiltersApplied(false);
  }, []);
  
  return {
    filters,
    sortBy,
    isFiltersApplied,
    updateFilters,
    setSortBy,
    applyFilters,
    resetFilters
  };
};
