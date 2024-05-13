import prisma from "@/lib/prisma";

export const getCompanyWithExternalModels = async (id: string) => {
  return prisma.company.findUnique({
    where: { id: Number(id) },
    include: {
      JobOffers: {
        include: {
          City: true,
          Company: true,
          ContractType: true,
          Category: true,
          ExperienceLevel: true,
          Application: {
            include: {
              ApplicationStatus: true,
              JobOffer: true,
              User: true,
            }
          },
        },
      },
    },
  });
};
