import { getCompanyWithExternalModels } from "@/services/companies/getCompany";
import React from "react";
import { getUserWithExternalModels } from "@/services/users/getUser";
import { redirect } from "next/navigation";
import {CompanyWithExternalModels} from "@/utils/types";

async function hasEmployeeAccess(companyId: number) {
  const user = await getUserWithExternalModels();
  if (!user || user.role !== "EMPLOYER") return false;
  return user?.managedCompanies.some((c) => c.id === companyId);
}

type ComponentProps = {
  params: { id: string, offerId: string };
  company: CompanyWithExternalModels;
};

const withCompanyManagementAccess = (
  Component: React.ComponentType<ComponentProps>,
) => {
  return async (props: { params: { id: string, offerId: string } }) => {
    const company = await getCompanyWithExternalModels(props.params.id);
    if (!company) {
      return redirect("/not-found");
    }
    const hasAccess = await hasEmployeeAccess(company.id);

    if (!hasAccess) {
      return redirect("/access-denied");
    }

    return <Component {...props} company={company} />;
  };
};

export default withCompanyManagementAccess;
