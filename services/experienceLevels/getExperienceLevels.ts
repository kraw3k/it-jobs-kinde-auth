import prisma from "@/lib/prisma";

export const getExperienceLevelsWithExternalModels = async () => {
  return prisma.experienceLevel.findMany();
};
