import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";
import { CompanyWithExternalModels } from "@/utils/types";
import prisma from "@/lib/prisma";

type PageProps = {
  params: {
    offerId: string;
  };
  company: CompanyWithExternalModels;
};

async function Page({ params, company }: PageProps) {
  const jobOffer = await prisma.jobOffer.findUnique({
    where: {
      id: Number(params.offerId),
    },
  });
  return (
    <div>
      <h1>Oferta pracy</h1>
      <pre>{params.offerId}</pre>
      <pre>{company.name}</pre>
      <pre>{JSON.stringify(jobOffer, null, 2)}</pre>
    </div>
  );
}

export default withCompanyManagementAccess(Page);
