import { formatSalary } from "@/utils/helpers";
import { getJobOfferWithExternalModels } from "@/services/jobOffers/getJobOffer";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const jobOffer = await getJobOfferWithExternalModels(params.id);
  if (!jobOffer) {
    return redirect("/not-found");
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
        <li className="my-2">Kategoria: {jobOffer.Category.name}</li>
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
