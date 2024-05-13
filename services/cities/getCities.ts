import prisma from "@/lib/prisma";

export const getCitiesWithExternalModels = async () => {
  return prisma.city.findMany({
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
            },
          },
        },
      },
    },
  });
};
