import prisma from "@/lib/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const jobOffer = await prisma.jobOffer.findUnique({
    where: { id: Number(params.id) },
    include: { Company: true, City: true },
  });
  if (!jobOffer) {
    return <h1>Job offer not found</h1>;
  }

  return <div className="p-8">
    <h1 className="text-xl mb-4">{jobOffer.title}</h1>
    <p>{jobOffer.description}</p>
    <ul className="mt-4">
      <li>Firma: {jobOffer.Company.name}</li>
      <li>Lokalizacja: {jobOffer.City.name}</li>
      <li>Wynagrodzenie: {jobOffer.salaryMin} - {jobOffer.salaryMax}</li>
    </ul>
  </div>;
}
