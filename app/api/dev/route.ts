import { PrismaClient } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  console.log("kindeUser: ", kindeUser);

  if (kindeUser === null) {
    return NextResponse.json({ error: "Kinde user is null", kindeUser });
  }

  if (
    !kindeUser.id ||
    !kindeUser.given_name ||
    !kindeUser.family_name ||
    !kindeUser.email
  ) {
    return NextResponse.json({
      error: "Kinde user properties missing",
      kindeUser,
    });
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

  console.log("dbUser: ", dbUser);

  const res = {
    kindeUser: kindeUser,
    dbUser,
  };

  return NextResponse.json(res);
}
