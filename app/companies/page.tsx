import CompaniesTable from "@/components/company/CompaniesTable";
import { getCompaniesWithExternalModels } from "@/services/companies/getCompanies";
import { Image } from "@nextui-org/image";

export default async function Page() {
  const companies = await getCompaniesWithExternalModels();
  if (!companies) {
    return <div>Brak firm do wyświetlenia</div>;
  }
  return (
    <div className="flex gap-x-8">
      <div className="md:w-2/3">
        <CompaniesTable companies={companies} />
      </div>
      <div className="hidden md:block md:w-1/3">
        <Image
          src={"/space-programmer5.jpeg"}
          alt={"Space programmer"}
          removeWrapper={true}
        />
      </div>
    </div>
  );
}
