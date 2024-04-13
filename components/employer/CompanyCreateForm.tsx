import { redirect } from "next/navigation";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { uploadFileToCloudStorage } from "@/services/blob";
import prisma from "@/lib/prisma";

const CompanyCreateForm = () => {
  async function createCompany(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const logo = formData.get("logo") as File;

    let logoUrl = null;
    if (logo) {
      logoUrl = await uploadFileToCloudStorage(logo as File);
    }

    const company = await prisma.company.create({
      data: { name, logoUrl },
    });
    redirect(`/companies/${company.id}`);
  }

  return (
    <Card>
      <CardHeader>
        <h1>Dodaj firmę</h1>
      </CardHeader>
      <CardBody>
        <form
          action={createCompany}
          className="flex flex-col items-center gap-2"
        >
          <Input type="text" name="name" required placeholder="Nazwa firmy" />
          <br />
          <Input type="file" name="logo" accept="image/*" />
          <br />
          <Button type="submit">Utwórz</Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default CompanyCreateForm;
