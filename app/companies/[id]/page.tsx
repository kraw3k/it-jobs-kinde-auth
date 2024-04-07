import prisma from "@/lib/prisma";
import { companyLogoPlaceholderUrl } from "@/utils/consts";
import { Card, CardBody, Code, Image } from "@nextui-org/react";
import JobOffersTable from "@/components/JobOffersTable";

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
          ExperienceLevel: true,
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
      <Card>
        <CardBody>
          <div className={"flex gap-6 p-3"}>
            <div
              className={"flex items-center justify-center border rounded p-2"}
              style={{ width: "150px", height: "150px" }}
            >
              <Image
                alt={company.name}
                height={"100%"}
                radius="none"
                src={logoUrl}
                width={"100%"}
              />
            </div>
            <div>
              <Code className="text-4xl">{company.name}</Code>
              <br />
              <p>{company.description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <br />
      <h1 className="text-xl mb-4">Dostępne oferty pracy</h1>
      {company.JobOffers.length && (
        <JobOffersTable jobOffers={company.JobOffers} />
      )}
    </div>
  );
}
