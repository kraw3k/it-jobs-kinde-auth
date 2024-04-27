import { getApplicationWithExternalModels } from "@/services/applications/getApplication";
import ApplicationSummary from "@/components/application/ApplicationSummary";
import { Image } from "@nextui-org/image";

type ApplicationPageProps = {
  params: {
    applicationId: string;
  };
};

export default async function ApplicationPage({
  params,
}: ApplicationPageProps) {
  const application = await getApplicationWithExternalModels(
    params.applicationId,
  );
  if (!application) {
    return <div>Nie znaleziono aplikacji</div>;
  }
  return (
    <div className="flex gap-x-8">
      <div className="md:w-1/2">
        <h1 className="text-2xl">Szczegóły aplikacji</h1>
        <h1 className="text-xl">
          {application.JobOffer.title} - {application.JobOffer.Company.name}
        </h1>
        <br />
        <ApplicationSummary application={application} />
      </div>
      <div className="hidden md:block md:w-1/2 h-fit">
        <Image
          src={"/space-programmer4.jpeg"}
          alt={"Space programmer"}
          removeWrapper={true}
        />
      </div>
    </div>
  );
}
