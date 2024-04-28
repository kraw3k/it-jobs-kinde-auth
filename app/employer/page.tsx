import ManagedCompaniesTable from "@/components/employer/ManagedCompaniesTable";
import { getUserWithExternalModels } from "@/services/users/getUser";
import {redirect} from "next/navigation";

export default async function EmployerPage() {
  const user = await getUserWithExternalModels();
  if(!user) return redirect("access-denied");
  return (
    <div>
      <ManagedCompaniesTable companies={user.managedCompanies} />
    </div>
  );
}
