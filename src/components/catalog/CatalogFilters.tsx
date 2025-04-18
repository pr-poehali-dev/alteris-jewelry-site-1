import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FilterCheckboxGroup from "./FilterCheckboxGroup";
import PriceRangeFilter from "./PriceRangeFilter";
import { CatalogFilters } from "@/types/catalog";
import {
  categoryOptions,
  materialOptions,
  styleOptions,
  priceRangeConfig,
} from "@/data/catalog-data";

interface CatalogFiltersProps {
  filters: CatalogFilters;
  onFilterChange: (filters: Partial<CatalogFilters>) => void;
  onApply: () => void;
  onReset: () => void;
}

const CatalogFiltersComponent: React.FC<CatalogFiltersProps> = ({
  filters,
  onFilterChange,
  onApply,
  onReset,
}) => {
  const handleCategoryChange = (id: string, checked: boolean) => {
    onFilterChange({
      categories: { ...filters.categories, [id]: checked },
    });
  };

  const handleMaterialChange = (id: string, checked: boolean) => {
    onFilterChange({
      materials: { ...filters.materials, [id]: checked },
    });
  };

  const handleStyleChange = (id: string, checked: boolean) => {
    onFilterChange({
      styles: { ...filters.styles, [id]: checked },
    });
  };

  const handlePriceRangeChange = (priceRange: [number, number]) => {
    onFilterChange({ priceRange });
  };

  return (
    <div className="bg-alteris-white p-6 rounded-sm shadow-sm">
      <h2 className="text-xl font-medium mb-6 text-alteris-black">Фильтры</h2>

      <Accordion type="single" collapsible defaultValue="categories">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-lg font-medium text-alteris-black">
            Категории
          </AccordionTrigger>
          <AccordionContent>
            <FilterCheckboxGroup
              options={categoryOptions}
              selectedItems={filters.categories}
              onChange={handleCategoryChange}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="materials">
          <AccordionTrigger className="text-lg font-medium text-alteris-black">
            Материалы
          </AccordionTrigger>
          <AccordionContent>
            <FilterCheckboxGroup
              options={materialOptions}
              selectedItems={filters.materials}
              onChange={handleMaterialChange}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="style">
          <AccordionTrigger className="text-lg font-medium text-alteris-black">
            Стиль
          </AccordionTrigger>
          <AccordionContent>
            <FilterCheckboxGroup
              options={styleOptions}
              selectedItems={filters.styles}
              onChange={handleStyleChange}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-medium text-alteris-black">
            Цена
          </AccordionTrigger>
          <AccordionContent>
            <PriceRangeFilter
              priceRange={filters.priceRange}
              onChange={handlePriceRangeChange}
              min={priceRangeConfig.min}
              max={priceRangeConfig.max}
              step={priceRangeConfig.step}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6">
        <Button className="w-full metallic-button" onClick={onApply}>
          Применить
        </Button>
        <Button variant="outline" className="w-full mt-2" onClick={onReset}>
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default CatalogFiltersComponent;
