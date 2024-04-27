import ManagedCompaniesTable from "@/components/employer/ManagedCompaniesTable";
import { getUserWithExternalModels } from "@/services/users/getUser";

export default async function EmployerPage() {
  const user = await getUserWithExternalModels();
  return (
    <div>
      <ManagedCompaniesTable companies={user.managedCompanies} />
    </div>
  );
}
