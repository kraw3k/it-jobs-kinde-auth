import { Card, CardBody, Code, Image } from "@nextui-org/react";
import { companyLogoPlaceholderUrl } from "@/utils/consts";
import { Company } from "@prisma/client";

export default function CompanyInfoCard({ company }: { company: Company }) {
  const logoUrl = company.logoUrl || companyLogoPlaceholderUrl;
  return (
    <Card>
      <CardBody>
        <div className={"flex gap-6 p-3"}>
          <div
            className={"flex items-center justify-center border rounded p-2"}
            style={{ width: "150px", height: "150px" }}
          >
            <Image
              alt={company.name}
              height={"100%"}
              radius="none"
              src={logoUrl}
              width={"100%"}
            />
          </div>
          <div>
            <Code className="text-4xl">{company.name}</Code>
            <br />
            <p>{company.description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
