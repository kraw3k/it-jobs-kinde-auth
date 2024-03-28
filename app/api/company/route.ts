import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { put } from "@vercel/blob";

const getLogoUrl = async (file: File) => {
  if (file.size > 0) {
    return await uploadFileToCloudStorage(file);
  }
  return null;
};

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const logoFile = formData.get("logo") as File;

  const logoUrl = await getLogoUrl(logoFile);

  await prisma.company.create({
    data: { name, logoUrl },
  });

  return NextResponse.json(
    { message: "Pomyślnie utworzono firmę" },
    { status: 200 },
  );
}

async function uploadFileToCloudStorage(file: any): Promise<string> {
  const blob = await put(file.name, file, {
    access: "public",
  });
  return blob.url;
}
