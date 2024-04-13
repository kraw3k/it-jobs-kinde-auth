import CompanyInfoCard from "@/components/company/CompanyInfoCard";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";
import { Company } from "@prisma/client";

type ManagedCompanyPageProps = {
  company: Company;
};

async function ManagedCompanyPage({ company }: ManagedCompanyPageProps) {
  return (
    <div>
      <Button
        as={Link}
        href={`/employer/company/${company.id}/update`}
        className={"mb-4"}
      >
        Edytuj dane firmy
      </Button>
      <CompanyInfoCard company={company} />
    </div>
  );
}

export default withCompanyManagementAccess(ManagedCompanyPage);
