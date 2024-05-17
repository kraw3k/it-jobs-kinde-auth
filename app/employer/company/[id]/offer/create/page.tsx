import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { CompanyWithExternalModels } from "@/utils/types";
import OfferCreateForm from "@/components/offer/OfferCreateForm";
import sanitizeHtml from "sanitize-html";
import { mapToSelectItems } from "@/utils/helpers";

type PageProps = {
  company: CompanyWithExternalModels;
};

async function Page({ company }: PageProps) {
  const categoryItems = mapToSelectItems(await prisma.category.findMany());
  const cityItems = mapToSelectItems(await prisma.city.findMany());
  const contractTypeItems = mapToSelectItems(
    await prisma.contractType.findMany(),
  );
  const experienceLevelItems = mapToSelectItems(
    await prisma.experienceLevel.findMany(),
  );

  async function createJobOffer(formData: FormData) {
    "use server";

    const offer = await prisma.jobOffer.create({
      data: {
        title: formData.get("title") as string,
        description: sanitizeHtml(formData.get("description") as string),
        companyId: company.id,
        salaryMin: Number(formData.get("salaryMin")),
        salaryMax: Number(formData.get("salaryMax")),
        categoryId: Number(formData.get("category")),
        cityId: Number(formData.get("city")),
        contractTypeId: Number(formData.get("contractType")),
        experienceLevelId: Number(formData.get("experienceLevel")),
      },
    });
    redirect(`/employer/company/${company.id}/offer/${offer.id}`);
  }

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-2xl">Utwórz ofertę pracy</h1>
      <OfferCreateForm
        formAction={createJobOffer}
        categoryItems={categoryItems}
        cityItems={cityItems}
        contractTypeItems={contractTypeItems}
        experienceLevelItems={experienceLevelItems}
      />
    </div>
  );
}

export default withCompanyManagementAccess(Page);
