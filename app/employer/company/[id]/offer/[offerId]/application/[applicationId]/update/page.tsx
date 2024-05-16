import prisma from "@/lib/prisma";
import ApplicationUpdateForm from "@/components/employer/application/ApplicationUpdateForm";
import { redirect, RedirectType } from "next/navigation";
import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";

type ApplicationUpdatePageParams = {
  params: {
    applicationId: string;
  };
};

async function ApplicationUpdatePage({
  params,
}: ApplicationUpdatePageParams) {
  const application = await prisma.application.findUnique({
    where: {
      id: Number(params.applicationId),
    },
  });
  const applicationStatusItems = await prisma.applicationStatus.findMany();

  async function updateApplication(formData: FormData) {
    "use server";
    if (!application) return null;
    const status = formData.get("status") as string;

    await prisma.application.update({
      where: {
        id: application.id,
      },
      data: {
        applicationStatusId: Number(status),
      },
    });

    redirect(`../${application.id}`, RedirectType.replace);
  }

  if (!application) return <div>Brak aplikacji</div>;

  return (
    <div className="md:w-1/2 m-auto">
      <h1 className="text-2xl">Edytuj aplikację</h1>
      <br />
      <p className="text-sm">id: {application.id}</p>
      <p className="text-sm">
        utworzona: {new Date(application.createdAt).toUTCString()}
      </p>
      <p className="text-sm">Imię i nazwisko: {application.fullName}</p>
      <br />
      <hr />
      <ApplicationUpdateForm
        formAction={updateApplication}
        application={application}
        applicationStatusItems={applicationStatusItems}
      />
    </div>
  );
}

export default withCompanyManagementAccess(ApplicationUpdatePage);