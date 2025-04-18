import React from "react";
import { Slider } from "@/components/ui/slider";

interface PriceRangeFilterProps {
  priceRange: [number, number];
  onChange: (value: [number, number]) => void;
  min: number;
  max: number;
  step: number;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  priceRange,
  onChange,
  min,
  max,
  step,
}) => {
  return (
    <div className="py-4">
      <Slider
        value={priceRange}
        onValueChange={(values) => onChange(values as [number, number])}
        min={min}
        max={max}
        step={step}
      />
      <div className="flex justify-between mt-2 text-sm text-alteris-grey-dark">
        <span>{priceRange[0].toLocaleString()} ₽</span>
        <span>{priceRange[1].toLocaleString()} ₽</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
