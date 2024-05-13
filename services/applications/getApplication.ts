import prisma from "@/lib/prisma";

export const getApplicationWithExternalModels = async (id: string) => {
  return prisma.application.findUnique({
    where: { id: Number(id) },
    include: {
      ApplicationStatus: true,
      JobOffer: {
        include: {
          City: true,
          Company: true,
          ContractType: true,
          Category: true,
          ExperienceLevel: true,
        },
      },
      User: true,
    },
  });
};
