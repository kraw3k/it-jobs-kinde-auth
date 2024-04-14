import prisma from "@/lib/prisma";

export const getOffersWithExternalModels = async () => {
  return prisma.jobOffer.findMany({
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
