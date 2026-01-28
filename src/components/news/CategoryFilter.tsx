import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const categories = ["all", "tech", "health", "sports", "business"];
  return (
    <div className="flex gap-2 items-center justify-center mx-4">
      <h3 className="font-bold text-lg mb-2 shrink-0">Filter by Category</h3>

      <Select
        onValueChange={(value) =>
          onCategoryChange(value === "all" ? "" : value)
        }
      >
        <SelectTrigger className="w-45 capitalize rounded-md">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category} className="capitalize">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoryFilter;
