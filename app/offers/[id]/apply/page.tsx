import { getJobOfferWithExternalModels } from "@/services/jobOffers/getJobOffer";
import { redirect } from "next/navigation";
import { Code } from "@nextui-org/react";
import OfferApplyForm from "@/components/offer/OfferApplyForm";
import prisma from "@/lib/prisma";
import { getUser } from "@/services/users/getUser";
import { Image } from "@nextui-org/image";
import { uploadFileToCloudStorage } from "@/services/blob";

type ApplyPageParams = {
  params: {
    id: string;
  };
};
export default async function ApplyPage({ params }: ApplyPageParams) {
  const user = await getUser();
  const jobOffer = await getJobOfferWithExternalModels(params.id);

  if (!jobOffer) {
    return redirect("/not-found");
  }

  async function applyToJobOffer(formData: FormData) {
    "use server";

    function isFormValid(formData: FormData) {
      const fullName = formData.get("fullName") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const cv = formData.get("cv") as File;
      const gdpr = formData.get("gdpr") as string;

      if (
        !fullName ||
        !email ||
        !phone ||
        cv.size === 0 ||
        gdpr === null
      ) {
        return false;
      }

      return true;
    }

    if (!jobOffer) return redirect("/not-found");
    if (!user) return redirect("/login");

    if (!isFormValid(formData)) return;

    const cv = formData.get("cv") as File;
    let cvUrl = await uploadFileToCloudStorage(cv as File);

    await prisma.application.create({
      data: {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        cvUrl,
        description: formData.get("description") as string,
        userId: user.id,
        jobOfferId: jobOffer.id,
      },
    });
    redirect(`/profile`);
  }

  return (
    <div className="flex gap-x-8">
      <div className="w-100 md:w-1/2">
        <h1 className="text-2xl">Formularz aplikacji</h1>
        <h3 className="text-xl">
          Aplikujesz na stanowisko <Code>{jobOffer.title}</Code> w firmie{" "}
          <Code>{jobOffer.Company.name}</Code>
        </h3>
        <OfferApplyForm formAction={applyToJobOffer} />
      </div>
      <div className="hidden md:block md:w-1/2 h-fit">
        <Image
          src={"/space-programmer2.jpeg"}
          alt={"Space programmer"}
          removeWrapper={true}
        />
      </div>
    </div>
  );
}
