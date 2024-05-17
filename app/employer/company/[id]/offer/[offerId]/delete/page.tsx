import prisma from "@/lib/prisma";
import { Button } from "@nextui-org/button";
import { redirect, RedirectType } from "next/navigation";
import { Chip } from "@nextui-org/react";
import withCompanyManagementAccess from "@/utils/hoc/withCompanyManagementAccess";

type OfferDeletePageProps = {
  params: {
    offerId: string;
  };
};

async function OfferDeletePage({ params }: OfferDeletePageProps) {
  const jobOffer = await prisma.jobOffer.findUnique({
    where: {
      id: Number(params.offerId),
    },
  });

  if (!jobOffer) return <div>Brak oferty</div>;

  const applicationsCount = await prisma.application.count({
    where: {
      jobOfferId: jobOffer.id,
    },
  });

  async function deleteOffer() {
    "use server";
    if (!jobOffer) return null;

    await prisma.jobOffer.delete({
      where: {
        id: jobOffer.id,
      },
    });

    redirect(`/employer/company/${jobOffer.companyId}`, RedirectType.replace);
  }

  return (
    <div>
      <h1 className="text-2xl">Delete Offer</h1>
      <br />
      <p className="text-sm">id: {jobOffer.id}</p>
      <p className="text-sm">
        utworzona: {new Date(jobOffer.createdAt).toUTCString()}
      </p>
      <p className="text-sm">Imię i nazwisko: {jobOffer.title}</p>
      <br />
      <hr />
      <br />
      {applicationsCount > 0 && (
        <>
          <Chip color="danger">
            Nie można usunąć oferty, która posiada aktywne aplikacje
          </Chip>
          <br />
          <br />
        </>
      )}
      {applicationsCount === 0 && (
        <Button
          color="danger"
          onClick={deleteOffer}
          disabled={applicationsCount > 0}
        >
          Usuń
        </Button>
      )}
    </div>
  );
}

export default withCompanyManagementAccess(OfferDeletePage);
