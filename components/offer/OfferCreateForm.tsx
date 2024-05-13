"use client";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";

type OfferCreateFormProps = {
  formAction: (formData: FormData) => void;
  categoryItems: { value: string; label: string }[];
  cityItems: { value: string; label: string }[];
  contractTypeItems: { value: string; label: string }[];
  experienceLevelItems: { value: string; label: string }[];
};

const OfferCreateForm = ({
  formAction,
  categoryItems,
  cityItems,
  contractTypeItems,
  experienceLevelItems,
}: OfferCreateFormProps) => {
  return (
    <form action={formAction} className="flex flex-col items-center gap-2">
      <Input
        type="text"
        name="title"
        label="Nazwa oferty"
        labelPlacement="outside"
      />
      <Input
        type="textarea"
        name="description"
        label="Opis"
        labelPlacement="outside"
      />
      <Input
        type="number"
        name="salaryMin"
        label="Minimalne wynagrodzenie"
        labelPlacement="outside"
      />
      <Input
        type="number"
        name="salaryMax"
        label="Maksymalne wynagrodzenie"
        labelPlacement="outside"
      />
      <br />
      <Select label="Kategoria" className="max-w" name="category" size="sm">
        {categoryItems.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </Select>
      <br />
      <Select label="Miasto" className="max-w" name="city" size="sm">
        {cityItems.map((city) => (
          <SelectItem key={city.value} value={city.value}>
            {city.label}
          </SelectItem>
        ))}
      </Select>
      <br />
      <Select label="Typ umowy" className="max-w" name="contractType" size="sm">
        {contractTypeItems.map((contractType) => (
          <SelectItem key={contractType.value} value={contractType.value}>
            {contractType.label}
          </SelectItem>
        ))}
      </Select>
      <br />
      <Select
        label="Poziom doświadczenia"
        className="max-w"
        name="experienceLevel"
        size="sm"
      >
        {experienceLevelItems.map((experienceLevel) => (
          <SelectItem key={experienceLevel.value} value={experienceLevel.value}>
            {experienceLevel.label}
          </SelectItem>
        ))}
      </Select>
      <br />
      <br />
      <Button type="submit">Utwórz</Button>
    </form>
  );
};

export default OfferCreateForm;
