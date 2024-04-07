import prisma from "@/lib/prisma";
import CompaniesTable from "@/components/company/CompaniesTable";

export default async function Page() {
  const companies = await prisma.company.findMany({
    include: {
      JobOffers: true,
    },
  });
  if (!companies) {
    return <div>Brak firm do wyświetlenia</div>;
  }
  return (
    <div>
      <CompaniesTable companies={companies} />
    </div>
  );
}
