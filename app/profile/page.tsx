import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@nextui-org/user";

export default async function Profile() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <div>
      <h1 className="text-xl mb-4">Profile page</h1>
      <User
        name={`${user?.given_name} ${user?.family_name}`}
        description={user?.email}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
      />
    </div>
  );
}
