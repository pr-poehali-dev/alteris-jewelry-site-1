import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOption } from "@/types/catalog";
import { sortOptions } from "@/data/catalog-data";

interface SortSelectorProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onValueChange={(val) => onChange(val as SortOption)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Сортировать по" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
