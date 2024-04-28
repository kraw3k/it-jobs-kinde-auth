import React from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Category, City, ExperienceLevel } from "@prisma/client";

type JobOffersTableFiltersProps = {
  categories: Category[];
  cities: City[];
  experienceLevels: ExperienceLevel[];
  onFilterChange: (filterName: string, filterValue: string) => void;
};

export function JobOffersTableFilters({
  categories,
  cities,
  experienceLevels,
  onFilterChange,
}: JobOffersTableFiltersProps) {
  return (
    <div className="flex mb-4 mt-8 gap-x-4 flex-wrap">
      <Input
        type="text"
        label="Szukaj"
        labelPlacement="outside"
        onChange={(e) => onFilterChange("search", e.target.value)}
        className="w-auto grow"
      />

      <Select
        label="Doświadczenie"
        className="max-w-xs"
        labelPlacement="outside"
        onChange={(e) => onFilterChange("experienceLevel", e.target.value)}
      >
        {experienceLevels.map((expLevel) => (
          <SelectItem key={expLevel.id} value={expLevel.id}>
            {expLevel.name}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Lokalizacja"
        className="max-w-xs"
        labelPlacement="outside"
        onChange={(e) => onFilterChange("city", e.target.value)}
      >
        {cities.map((city) => (
          <SelectItem key={city.id} value={city.id}>
            {city.name}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Kategoria"
        className="max-w-xs"
        labelPlacement="outside"
        onChange={(e) => onFilterChange("category", e.target.value)}
      >
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.id}>
            {category.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
