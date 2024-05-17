"use client";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { JobOffer } from "@prisma/client";

type OfferUpdateFormProps = {
  formAction: (formData: FormData) => void;
  jobOffer: JobOffer;
  categoryItems: { value: string; label: string }[];
  cityItems: { value: string; label: string }[];
  contractTypeItems: { value: string; label: string }[];
  experienceLevelItems: { value: string; label: string }[];
};

export default function OfferUpdateForm({
  formAction,
  jobOffer,
  categoryItems,
  cityItems,
  contractTypeItems,
  experienceLevelItems,
}: OfferUpdateFormProps) {
  const handleSubmit = (formData: FormData) => {
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      salaryMin: Number(formData.get("salaryMin")),
      salaryMax: Number(formData.get("salaryMax")),
      category: Number(formData.get("category")),
      city: Number(formData.get("city")),
      contractType: Number(formData.get("contractType")),
      experienceLevel: Number(formData.get("experienceLevel")),
    };
    if (
      !data.title ||
      !data.description ||
      !data.salaryMin ||
      !data.salaryMax ||
      !data.category ||
      !data.city ||
      !data.contractType ||
      !data.experienceLevel
    )
      return alert("Wypełnij wszystkie pola");
    formAction(formData);
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 my-4">
      <Input
        type="text"
        name="title"
        label="Nazwa oferty"
        labelPlacement="outside"
        defaultValue={jobOffer.title}
      />
      <Input
        type="textarea"
        name="description"
        label="Opis"
        labelPlacement="outside"
        defaultValue={jobOffer.description}
      />
      <Input
        type="number"
        name="salaryMin"
        label="Minimalne wynagrodzenie"
        labelPlacement="outside"
        defaultValue={jobOffer.salaryMin.toString()}
      />
      <Input
        type="number"
        name="salaryMax"
        label="Maksymalne wynagrodzenie"
        labelPlacement="outside"
        defaultValue={jobOffer.salaryMax.toString()}
      />
      <br />
      <Select
        label="Kategoria"
        className="max-w"
        name="category"
        size="sm"
        defaultSelectedKeys={[jobOffer.categoryId.toString() || ""]}
      >
        {categoryItems.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </Select>
      <br />
      <Select
        label="Miasto"
        className="max-w"
        name="city"
        size="sm"
        defaultSelectedKeys={[jobOffer.cityId.toString() || ""]}
      >
        {cityItems.map((city) => (
          <SelectItem key={city.value} value={city.value}>
            {city.label}
          </SelectItem>
        ))}
      </Select>
      <br />
      <Select
        label="Typ umowy"
        className="max-w"
        name="contractType"
        size="sm"
        defaultSelectedKeys={[jobOffer.contractTypeId.toString() || ""]}
      >
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
        defaultSelectedKeys={[jobOffer.experienceLevelId.toString() || ""]}
      >
        {experienceLevelItems.map((experienceLevel) => (
          <SelectItem key={experienceLevel.value} value={experienceLevel.value}>
            {experienceLevel.label}
          </SelectItem>
        ))}
      </Select>
      <br />
      <br />
      <Button type="submit">Zapisz</Button>
    </form>
  );
}
