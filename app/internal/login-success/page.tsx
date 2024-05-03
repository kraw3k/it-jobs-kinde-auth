import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { Code } from "@nextui-org/react";

// This is a page where user is redirected after successful Kinde login.
// It checks if user exists in database and create it if needed.
// Normally it should be done in /api/auth/success,
// but probably there is a bug - in route.ts Kinde getUser() always returns null when running in Vercel

export default async function LoginSuccessPage() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (kindeUser === null) {
    return (
      <div>
        Wystąpił błąd: <Code>Kinde user is null</Code>
      </div>
    );
  }

  if (
    !kindeUser.id ||
    !kindeUser.given_name ||
    !kindeUser.family_name ||
    !kindeUser.email
  ) {
    return (
      <div>
        Wystąpił błąd: <Code>Kinde user properties missing</Code>
      </div>
    );
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      kindeId: kindeUser.id,
    },
  });

  if (dbUser === null) {
    await prisma.user.create({
      data: {
        kindeId: kindeUser.id,
        firstName: kindeUser.given_name,
        lastName: kindeUser.family_name,
        email: kindeUser.email,
      },
    });
  }
  return redirect(process.env.KINDE_SITE_URL + "/");
}
