import prisma from "@/lib/prisma";

export const getJobOfferWithExternalModels = async (id: string) => {
  return prisma.jobOffer.findUnique({
    where: { id: Number(id) },
    include: {
      City: true,
      Company: true,
      ContractType: true,
      Category: true,
      Technology: true,
      ExperienceLevel: true,
    },
  });
};
