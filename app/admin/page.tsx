import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";

export default async function Admin() {
  const { getAccessToken, getPermissions } = getKindeServerSession();

  console.log(await getPermissions());

  const accessToken = await getAccessToken();
  const permissions = await getPermissions();

  const users = await prisma.user.findMany();

  return (
    <>
      <h1 className="text-xl mb-4">Admin page</h1>
      <div className="font-mono text-sm">
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Admin page&nbsp;
          <code className="font-mono font-bold">app/admin/page.tsx</code>
        </p>
        <pre>{JSON.stringify(permissions?.permissions, null, 2)}</pre>
          <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </>
  );
}
