import prisma from "@/lib/prisma";
import { companyLogoPlaceholderUrl } from "@/utils/consts";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export default async function Page() {
  const companies = await prisma.company.findMany();
  return (
    <div>
      <h1 className="text-xl mb-4">Nasi partnerzy</h1>
      <p>Być może któraś z tych firm szuka właśnie Ciebie!</p>
      <br />
      {companies.map((company) => {
        const logoUrl = company.logoUrl || companyLogoPlaceholderUrl;
        return (
          <Link key={company.id} href={`/companies/${company.id}`}>
            <div className="flex items-center my-2">
              <Image
                src={logoUrl}
                alt={company.name}
                width={40}
                height={40}
                radius="none"
              />
              <p className="ml-2">{company.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
