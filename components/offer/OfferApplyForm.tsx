"use client";

import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";

type OfferApplyFormProps = {
  formAction: (formData: FormData) => void;
};

const OfferApplyForm = ({ formAction }: OfferApplyFormProps) => {
  const handleSubmit = (formData: FormData) => {
    formAction(formData);
  };
  return (
    <form action={handleSubmit} className="flex flex-col gap-4 my-4">
      <Input
        type="text"
        name="fullName"
        label="Imię i nazwisko"
        labelPlacement="outside"
        placeholder=" "
      />

      <Input
        type="email"
        name="email"
        label="Adres email"
        labelPlacement="outside"
        placeholder=" "
      />
      <Input
        type="tel"
        name="phone"
        label="Numer telefonu"
        labelPlacement="outside"
        placeholder=" "
      />
      <Textarea
        type="textarea"
        name="description"
        label="Opis"
        labelPlacement="outside"
        placeholder=""
      />
      <Input
        type="file"
        name="cv"
        accept="file/pdf"
        label="CV"
        labelPlacement="outside"
        placeholder="Koniecznie prześlij swoje CV!"
        classNames={{ innerWrapper: "pt-2" }}
      />
      <Checkbox name="gdpr" className="py-4">
        Zgadzam się na przetwarzanie danych osobowych
      </Checkbox>
      <Button type="submit">Aplikuj</Button>
    </form>
  );
};

export default OfferApplyForm;
