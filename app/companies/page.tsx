import CompaniesTable from "@/components/company/CompaniesTable";
import { getCompaniesWithExternalModels } from "@/services/companies/getCompanies";

export default async function Page() {
  const companies = await getCompaniesWithExternalModels();
  if (!companies) {
    return <div>Brak firm do wyświetlenia</div>;
  }
  return (
    <div>
      <CompaniesTable companies={companies} />
    </div>
  );
}
