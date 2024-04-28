import prisma from "@/lib/prisma";

export const getCategoriesWithExternalModels = async () => {
  return prisma.category.findMany({
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
