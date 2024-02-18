import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Admin() {
  const { getAccessToken, getPermissions } = getKindeServerSession();

  console.log(await getPermissions());

  const accessToken = await getAccessToken();
  const permissions = await getPermissions();

  return (
    <>
      <h1 className="text-xl mb-4">Admin page</h1>
      <div className="font-mono text-sm">
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Admin page&nbsp;
          <code className="font-mono font-bold">app/admin/page.tsx</code>
        </p>
        <pre>{JSON.stringify(permissions?.permissions, null, 2)}</pre>
      </div>
    </>
  );
}
