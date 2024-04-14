import CompanyInfoCard from "@/components/company/CompanyInfoCard";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";
import { CompanyWithExternalModels } from "@/utils/types";
import React from "react";
import EmployerOffersTable from "@/components/employer/EmployerOffersTable";

type ManagedCompanyPageProps = {
  company: CompanyWithExternalModels;
};

async function ManagedCompanyPage({ company }: ManagedCompanyPageProps) {
  return (
    <div>
      <div className="flex justify-between align-middle">
        <h1 className="text-xl">Opis firmy</h1>
        <Button
          as={Link}
          href={`/employer/company/${company.id}/update`}
          className={"mb-4"}
        >
          Edytuj dane firmy
        </Button>
      </div>
      <CompanyInfoCard company={company} />
      <br />
      <br />
      <div className="flex justify-between align-middle">
        <h1 className="text-xl">Aktywne ogłoszenia</h1>
        <Button
          as={Link}
          href={`/employer/company/${company.id}/offer/create`}
          className={"mb-4"}
        >
          Dodaj ogłoszenie
        </Button>
      </div>
      <EmployerOffersTable company={company} jobOffers={company.JobOffers} />
    </div>
  );
}

export default withCompanyManagementAccess(ManagedCompanyPage);
