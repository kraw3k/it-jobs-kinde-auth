import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function LoginSuccessPage() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (kindeUser === null) {
    // return NextResponse.json({ error: "Kinde user is null", kindeUser });
    return <h1>Kinde user is null</h1>
  }

  if (
    !kindeUser.id ||
    !kindeUser.given_name ||
    !kindeUser.family_name ||
    !kindeUser.email
  ) {
    return <h1>Kinde user properties missing</h1>
    // return NextResponse.json({
    //   error: "Kinde user properties missing",
    //   kindeUser,
    // });
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
  return redirect(process.env.KINDE_SITE_URL + "/")
  // return <h1>SUCCESS</h1>;
  // return NextResponse.redirect(process.env.KINDE_SITE_URL + "/");
}
