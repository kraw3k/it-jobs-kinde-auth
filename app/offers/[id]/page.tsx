import prisma from "@/lib/prisma";
import { formatSalary } from "@/utils/helpers";

export default async function Page({ params }: { params: { id: string } }) {
  const jobOffer = await prisma.jobOffer.findUnique({
    where: { id: Number(params.id) },
    include: {
      Company: true,
      City: true,
      ExperienceLevel: true,
      ContractType: true,
      Technology: true,
    },
  });
  if (!jobOffer) {
    return <h1>Job offer not found</h1>;
  }

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">{jobOffer.title}</h1>
      <p>{jobOffer.description}</p>
      <ul className="mt-4">
        <li className="my-2">Firma: {jobOffer.Company.name}</li>
        <li className="my-2">Lokalizacja: {jobOffer.City.name}</li>
        <li className="my-2">
          Wynagrodzenie: {formatSalary(jobOffer.salaryMin, jobOffer.salaryMax)}
        </li>
        <li className="my-2">Doświadczenie: {jobOffer.ExperienceLevel.name}</li>
        <li className="my-2">Typ kontraktu: {jobOffer.ContractType.name}</li>
        <li className="my-2">Technologie: {jobOffer.Technology.name}</li>
        <li className="my-2">
          <code>Dodano: {new Date(jobOffer.createdAt).toUTCString()}</code>
        </li>
      </ul>
    </div>
  );
}
