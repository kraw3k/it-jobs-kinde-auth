import { User } from "@nextui-org/user";
import ApplicationsTable from "@/components/employer/ApplicationsTable";
import { getUserWithExternalModels } from "@/services/users/getUser";

export default async function Profile() {
  const user = await getUserWithExternalModels();

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
      <h1 className="text-xl mb-4">Aplikacje</h1>
      <ApplicationsTable applications={user.Application} />
    </div>
  );
}
