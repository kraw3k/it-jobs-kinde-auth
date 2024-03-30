import prisma from "@/lib/prisma";
import { companyLogoPlaceholderUrl } from "@/utils/consts";
import { Image } from "@nextui-org/react";
import JobOffersTable from "@/components/JobOffersTable";
import React from "react";

export default async function CompanyPage({
  params,
}: {
  params: { id: string };
}) {
  const company = await prisma.company.findUnique({
    where: { id: Number(params.id) },
    include: {
      JobOffers: {
        include: {
          City: true,
          Company: true,
          ContractType: true,
          Category: true,
          Technology: true,
        },
      },
    },
  });

  if (!company) {
    return <h1>Upsss... Nie znalaziono firmy</h1>;
  }

  const logoUrl = company.logoUrl || companyLogoPlaceholderUrl;
  return (
    <div>
      <h1>{company.name}</h1>
      <Image src={logoUrl} alt={company.name} width={200} height={200} />
      <ul>
        <h1 className="text-xl mb-4">Dostępne oferty pracy</h1>
        <JobOffersTable jobOffers={company.JobOffers} />
      </ul>
    </div>
  );
}
