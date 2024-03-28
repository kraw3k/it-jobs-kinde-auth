import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";
import { seedJobOffers } from "@/admin/dbSeed";
import CompanyCreateForm from "@/components/employer/CompanyCreateForm";

export default async function Admin() {
  const { getAccessToken, getPermissions } = getKindeServerSession();

  // console.log(await getPermissions());

  const accessToken = await getAccessToken();
  const permissions = await getPermissions();

  const users = await prisma.user.findMany();

  // seedJobOffers();

  return (
    <>
      <h1 className="text-xl mb-4">Admin page</h1>
      <div className="mb-4">
        <CompanyCreateForm />
      </div>
      <div className="font-mono text-sm">
        <pre>{JSON.stringify(permissions?.permissions, null, 2)}</pre>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </>
  );
}
