import JobOffersTable from "@/components/JobOffersTable";
import CompanyInfoCard from "@/components/company/CompanyInfoCard";
import { getCompanyWithExternalModels } from "@/services/companies/getCompany";

type CompanyPageProps = {
  params: { id: string };
};
export default async function CompanyPage({ params }: CompanyPageProps) {
  const company = await getCompanyWithExternalModels(params.id);

  if (!company) {
    return <h1>Upsss... Nie znalaziono firmy</h1>;
  }

  return (
    <div>
      <CompanyInfoCard company={company} />
      <br />
      <h1 className="text-xl mb-4">Dostępne oferty pracy</h1>
      {company.JobOffers.length && (
        <JobOffersTable jobOffers={company.JobOffers} />
      )}
    </div>
  );
}
