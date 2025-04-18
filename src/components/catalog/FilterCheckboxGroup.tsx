import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FilterOption } from "@/types/catalog";

interface FilterCheckboxGroupProps {
  options: FilterOption[];
  selectedItems: Record<string, boolean>;
  onChange: (id: string, checked: boolean) => void;
}

const FilterCheckboxGroup: React.FC<FilterCheckboxGroupProps> = ({
  options,
  selectedItems,
  onChange,
}) => {
  return (
    <div className="space-y-3 py-2">
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <Checkbox
            id={option.id}
            checked={selectedItems[option.id] || false}
            onCheckedChange={(checked) => 
              onChange(option.id, checked === true)
            }
          />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxGroup;
