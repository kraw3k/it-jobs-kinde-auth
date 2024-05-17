import prisma from "@/lib/prisma";
import { redirect, RedirectType } from "next/navigation";
import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";
import React from "react";
import OfferUpdateForm from "@/components/offer/OfferUpdateForm";
import { mapToSelectItems } from "@/utils/helpers";

type OfferUpdatePageParams = {
  params: {
    offerId: string;
  };
};

async function OfferUpdatePage({ params }: OfferUpdatePageParams) {
  const jobOffer = await prisma.jobOffer.findUnique({
    where: {
      id: Number(params.offerId),
    },
  });

  const categoryItems = mapToSelectItems(await prisma.category.findMany());
  const cityItems = mapToSelectItems(await prisma.city.findMany());
  const contractTypeItems = mapToSelectItems(
    await prisma.contractType.findMany(),
  );
  const experienceLevelItems = mapToSelectItems(
    await prisma.experienceLevel.findMany(),
  );

  async function updateOffer(formData: FormData) {
    "use server";
    if (!jobOffer) return null;

    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      salaryMin: Number(formData.get("salaryMin")),
      salaryMax: Number(formData.get("salaryMax")),
      categoryId: Number(formData.get("category")),
      cityId: Number(formData.get("city")),
      contractTypeId: Number(formData.get("contractType")),
      experienceLevelId: Number(formData.get("experienceLevel")),
    };

    await prisma.jobOffer.update({
      where: {
        id: jobOffer.id,
      },
      data,
    });

    redirect(`../${jobOffer.id}`, RedirectType.replace);
  }

  if (!jobOffer) return <div>Brak oferty</div>;

  return (
    <div className="md:w-1/2 m-auto">
      <h1 className="text-2xl">Edytuj ofertę</h1>
      <br />
      <p className="text-sm">id: {jobOffer.id}</p>
      <p className="text-sm">
        utworzona: {new Date(jobOffer.createdAt).toUTCString()}
      </p>
      <p className="text-sm">Nazwa: {jobOffer.title}</p>
      <br />
      <hr />
      <OfferUpdateForm
        formAction={updateOffer}
        jobOffer={jobOffer}
        categoryItems={categoryItems}
        cityItems={cityItems}
        contractTypeItems={contractTypeItems}
        experienceLevelItems={experienceLevelItems}
      />
    </div>
  );
}

export default withCompanyManagementAccess(OfferUpdatePage);
