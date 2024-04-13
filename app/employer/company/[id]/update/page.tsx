import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { uploadFileToCloudStorage } from "@/services/blob";
import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";
import { Company } from "@prisma/client";

type CompanyEditPageProps = {
  company: Company;
};

type EditedCompanyData = {
  name: string;
  description?: string;
  logoUrl?: string;
};

async function CompanyEditPage({ company }: CompanyEditPageProps) {
  async function updateCompany(formData: FormData) {
    "use server";

    if (!company) return;

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const logo = formData.get("logo") as File;

    const data: EditedCompanyData = { name, description };

    if (logo.size > 0) {
      data["logoUrl"] = await uploadFileToCloudStorage(logo as File);
    }

    await prisma.company.update({
      where: { id: company.id },
      data,
    });
    redirect(`/employer/company/${company.id}`);
  }

  return (
    <div>
      <h1 className="text-2xl">Edytuj firmę</h1>
      <br />
      <form action={updateCompany}>
        <Input
          type="text"
          name="name"
          defaultValue={company.name}
          label="Nazwa"
          labelPlacement="outside"
        />
        <br />
        <Input
          type="texarea"
          name="description"
          defaultValue={company.description || ""}
          label="Opis"
          labelPlacement="outside"
        />
        <br />
        <Input
          type="file"
          name="logo"
          accept="image/*"
          label="Logo"
          labelPlacement="outside"
          placeholder="&nbsp;"
        />
        <br />
        <div className="flex justify-center gap-x-2">
          <Button as={Link} href={`/employer/company/${company.id}`}>
            Wróć
          </Button>
          <Button type="submit">Zapisz</Button>
        </div>
      </form>
    </div>
  );
}

export default withCompanyManagementAccess(CompanyEditPage);
