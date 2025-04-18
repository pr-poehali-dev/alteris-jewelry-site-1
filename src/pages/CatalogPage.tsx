import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CatalogFiltersComponent from "@/components/catalog/CatalogFilters";
import ProductsGrid from "@/components/catalog/ProductsGrid";
import SortSelector from "@/components/catalog/SortSelector";
import ProductCounter from "@/components/catalog/ProductCounter";
import LoadMoreButton from "@/components/catalog/LoadMoreButton";
import { useCatalogFilters } from "@/hooks/useCatalogFilters";
import { catalogProducts } from "@/data/catalog-data";
import { Product } from "@/types/catalog";

const ITEMS_PER_PAGE = 6;

const CatalogPage: React.FC = () => {
  const {
    filters,
    sortBy,
    updateFilters,
    setSortBy,
    applyFilters,
    resetFilters,
  } = useCatalogFilters();
  
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(
    catalogProducts.slice(0, ITEMS_PER_PAGE)
  );
  const [isLoading, setIsLoading] = useState(false);
  
  const hasMoreProducts = visibleProducts.length < catalogProducts.length;
  
  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Имитация загрузки данных с сервера
    setTimeout(() => {
      const nextProducts = catalogProducts.slice(
        0,
        visibleProducts.length + ITEMS_PER_PAGE
      );
      setVisibleProducts(nextProducts);
      setIsLoading(false);
    }, 500);
  };
  
  const handleApplyFilters = () => {
    // В реальном приложении здесь была бы фильтрация на основе состояния filters
    applyFilters();
    setVisibleProducts(catalogProducts.slice(0, ITEMS_PER_PAGE));
  };
  
  const handleResetFilters = () => {
    resetFilters();
    setVisibleProducts(catalogProducts.slice(0, ITEMS_PER_PAGE));
  };
  
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-light mb-10 mt-20 text-alteris-black">Каталог</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4">
          <CatalogFiltersComponent
            filters={filters}
            onFilterChange={updateFilters}
            onApply={handleApplyFilters}
            onReset={handleResetFilters}
          />
        </div>
        
        {/* Products Section */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <ProductCounter count={visibleProducts.length} />
            <SortSelector value={sortBy} onChange={setSortBy} />
          </div>
          
          {visibleProducts.length > 0 ? (
            <>
              <ProductsGrid products={visibleProducts} />
              <LoadMoreButton
                onClick={handleLoadMore}
                isLoading={isLoading}
                hasMore={hasMoreProducts}
              />
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-alteris-grey-dark mb-4">
                К сожалению, по вашему запросу ничего не найдено
              </p>
              <Button variant="outline" onClick={handleResetFilters}>
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
