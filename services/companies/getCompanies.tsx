import prisma from "@/lib/prisma";

export const getCompaniesWithExternalModels = async () => {
  return prisma.company.findMany({
    include: {
      JobOffers: {
        include: {
          City: true,
          Company: true,
          ContractType: true,
          Category: true,
          Technology: true,
          ExperienceLevel: true,
          Application: true,
        },
      },
    },
  });
};
