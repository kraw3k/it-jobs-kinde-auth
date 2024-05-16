import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";
import { CompanyWithExternalModels } from "@/utils/types";
import { getJobOfferWithExternalModels } from "@/services/jobOffers/getJobOffer";
import ApplicationsTable from "@/components/employer/application/ApplicationsTable";
import { Chip } from "@nextui-org/react";
import { formatSalary } from "@/utils/helpers";

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
    <div className="lg:w-3/4 mx-auto">
      <h1 className="text-2xl">{jobOffer.title}</h1>
      <h2 className="text-1xl">{company.name}</h2>
      <br />
      <hr />
      <br />
      <div className="my-4 flex gap-4">
        <Chip className="bg-blue-100">
          <p className=" flex items-center">
            <i className="bi bi-geo-alt mr-2"></i>
            {jobOffer.City.name}
          </p>
        </Chip>
        <Chip className="bg-blue-100">
          <p className=" flex items-center">
            <i className="bi bi-wallet2 mr-2"></i>
            {formatSalary(jobOffer.salaryMin, jobOffer.salaryMax)}
          </p>
        </Chip>
        <Chip className="bg-blue-100">
          <p className=" flex items-center">
            <i className="bi bi-file-earmark-text mr-2"></i>
            {jobOffer.ContractType.name}
          </p>
        </Chip>
        <Chip className="bg-amber-100">
          <p className=" flex items-center">
            <i className="bi bi-tag mr-2"></i>
            {jobOffer.Category.name}
          </p>
        </Chip>
        <Chip className="bg-amber-100">
          <p className=" flex items-center">
            <i className="bi bi-star mr-2"></i>
            {jobOffer.ExperienceLevel.name}
          </p>
        </Chip>
      </div>
      <br />
      <h2 className="text-1xl mb-2">Aplikacje na stanowisko</h2>
      <ApplicationsTable
        offerId={params.offerId}
        applications={jobOffer.Application}
      />
    </div>
  );
}

export default withCompanyManagementAccess(Page);
