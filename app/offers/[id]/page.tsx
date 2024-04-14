import { formatSalary } from "@/utils/helpers";
import { getJobOfferWithExternalModels } from "@/services/jobOffers/getJobOffer";
import { redirect } from "next/navigation";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { Image } from "@nextui-org/image";

export default async function Page({ params }: { params: { id: string } }) {
  const jobOffer = await getJobOfferWithExternalModels(params.id);
  if (!jobOffer) {
    return redirect("/not-found");
  }

  return (
    <div className="w-3/4 mx-auto">
      <Card>
        <CardBody>
          <div className="flex gap-x-8 p-4">
            <div className="border-r-1 pr-8 pt-2">
              <div className="flex">
                <Image
                  alt="Logo firmy"
                  src={jobOffer.Company.logoUrl || ""}
                  radius="none"
                  className="max-h-36"
                />
              </div>
              <div className="my-4 flex flex-col gap-4">
                <Chip className="bg-blue-100">
                  <p className=" flex items-center">
                    <i className="bi bi-geo-alt mr-2"></i>
                    {jobOffer.City.name}
                  </p>
                </Chip>
                <Chip className="bg-blue-100">
                  <p className=" flex items-center">
                    <i className="bi bi-wallet2 mr-2"></i>
                    {formatSalary(jobOffer.salaryMin, jobOffer.salaryMax)}
                  </p>
                </Chip>
                <Chip className="bg-blue-100">
                  <p className=" flex items-center">
                    <i className="bi bi-file-earmark-text mr-2"></i>
                    {jobOffer.ContractType.name}
                  </p>
                </Chip>
              </div>
              <div className="my-4 flex flex-col gap-4">
                <Chip className="bg-amber-100">
                  <p className=" flex items-center">
                    <i className="bi bi-tag mr-2"></i>
                    {jobOffer.Category.name}
                  </p>
                </Chip>
                <Chip className="bg-amber-100">
                  <p className=" flex items-center">
                    <i className="bi bi-star mr-2"></i>
                    {jobOffer.ExperienceLevel.name}
                  </p>
                </Chip>
                <Chip className="bg-gray-200">
                  <p className=" flex items-center">
                    <i className="bi bi-code mr-2"></i>
                    {jobOffer.Technology.name}
                  </p>
                </Chip>
              </div>
            </div>
            <div>
              <h3 className="text-4xl mb-4">{jobOffer.title}</h3>
              <h4 className="text-2xl flex items-center border-b-1 pb-2 my-4 text-gray-500">
                {jobOffer.Company.name}
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: jobOffer.description }}
              ></div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
