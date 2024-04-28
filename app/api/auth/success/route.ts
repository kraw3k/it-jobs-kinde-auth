import { PrismaClient } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log("User: ", user)

  if (!user || !user.id){
    // TODO: log to error tracking service
    console.log("Something went wrong with authentication, user: " + user);
    return NextResponse.redirect(process.env.KINDE_SITE_URL + "/api/auth/login");
  }

  let dbUser = await prisma.user.findUnique({
    where: { kindeId: user.id },
  });

  console.log("DB User: ", dbUser)

  if (!dbUser) {
    await prisma.user.create({
      data: {
        kindeId: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "", // Using nullish coalescing operator to provide a default empty string value
      },
    });
  }
  return NextResponse.redirect(process.env.KINDE_SITE_URL + "/profile");
}
