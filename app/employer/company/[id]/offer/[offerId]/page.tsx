import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";
import { CompanyWithExternalModels } from "@/utils/types";
import prisma from "@/lib/prisma";
import { getJobOfferWithExternalModels } from "@/services/jobOffers/getJobOffer";
import ApplicationsTable from "@/components/employer/ApplicationsTable";

type PageProps = {
  params: {
    offerId: string;
  };
  company: CompanyWithExternalModels;
};

async function Page({ params, company }: PageProps) {
  const jobOffer = await getJobOfferWithExternalModels(params.offerId);
  if (!jobOffer) {
    return <div>Nie znaleziono oferty pracy</div>;
  }
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-2xl">{jobOffer.title}</h1>
      <h2 className="text-1xl">{company.name}</h2>
      <br />
      <ApplicationsTable applications={jobOffer.Application} />
    </div>
  );
}

export default withCompanyManagementAccess(Page);
