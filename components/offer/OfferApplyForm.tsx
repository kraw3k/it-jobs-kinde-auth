"use client";

import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";

type OfferApplyFormProps = {
  formAction: (formData: FormData) => void;
};

const OfferApplyForm = ({ formAction }: OfferApplyFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: formData.get("description") as string,
      cv: formData.get("cv") as File,
      gdpr: formData.get("gdpr") as string,
    };
      console.log(data)
    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.description ||
      !data.cv ||
      data.gdpr === null
    )
      return alert("Wypełnij wszystkie pola");
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
