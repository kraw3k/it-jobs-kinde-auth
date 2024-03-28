"use client";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";

const CompanyCreateForm = () => {
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      fetch("/api/company", {
        method: "POST",
        body: formData,
      });

      router.refresh();
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h1>Dodaj firmę</h1>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center gap-2"
        >
          <Input type="text" name="name" required placeholder="Nazwa firmy" />
          <Input type="file" name="logo" accept="image/*" />
          <Button type="submit">Utwórz</Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default CompanyCreateForm;
