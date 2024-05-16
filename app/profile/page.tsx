import { User } from "@nextui-org/user";
import { getUserWithExternalModels } from "@/services/users/getUser";
import { redirect } from "next/navigation";
import ApplicationsTable from "@/components/profile/aplication/ApplicationsTable";

export default async function Profile() {
  const user = await getUserWithExternalModels();
  if (!user) return redirect("access-denied");

  return (
    <div>
      <h1 className="text-xl mb-4">Profil użytkownika</h1>
      <User
        name={`${user.firstName} ${user.lastName}`}
        description={user.email}
        avatarProps={{
          src: user.avatarUrl || undefined,
        }}
      />
      <br />
      <br />
      <h1 className="text-xl mb-4">Moje aplikacje</h1>
      <ApplicationsTable applications={user.Application} />
    </div>
  );
}
