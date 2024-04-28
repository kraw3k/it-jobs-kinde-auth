import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";
import CompanyCreateForm from "@/components/employer/CompanyCreateForm";
import {getUser} from "@/services/users/getUser";
import {redirect} from "next/navigation";

export default async function Admin() {
  const { getAccessToken, getPermissions } = getKindeServerSession();

  const user = await getUser();
  if(user?.role !== 'ADMIN') return redirect('/access-denied')

  // console.log(await getPermissions());

  const accessToken = await getAccessToken();
  const permissions = await getPermissions();

  const users = await prisma.user.findMany();


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

