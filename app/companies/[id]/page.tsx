import JobOffersTable from "@/components/offer/JobOffersTable";
import CompanyInfoCard from "@/components/company/CompanyInfoCard";
import { getCompanyWithExternalModels } from "@/services/companies/getCompany";
import { getCategoriesWithExternalModels } from "@/services/categories/getCategories";
import { getCitiesWithExternalModels } from "@/services/cities/getCities";
import { getExperienceLevelsWithExternalModels } from "@/services/experienceLevels/getExperienceLevels";

type CompanyPageProps = {
  params: { id: string };
};
export default async function CompanyPage({ params }: CompanyPageProps) {
  const company = await getCompanyWithExternalModels(params.id);
  const categories = await getCategoriesWithExternalModels();
  const cities = await getCitiesWithExternalModels();
  const experienceLevels = await getExperienceLevelsWithExternalModels();

  if (!company) {
    return <h1>Upsss... Nie znalaziono firmy</h1>;
  }

  return (
    <div>
      <CompanyInfoCard company={company} />
      <br />
      <h1 className="text-xl mb-4">Dostępne oferty pracy</h1>
      {company.JobOffers.length && (
        <JobOffersTable
          jobOffers={company.JobOffers}
          categories={categories}
          cities={cities}
          experienceLevels={experienceLevels}
        />
      )}
    </div>
  );
}
