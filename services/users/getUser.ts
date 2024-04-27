import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser) return null;

  return prisma.user.findUnique({
    where: {
      kindeId: kindeUser?.id,
    },
    include: {
      managedCompanies: {
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
      },
      Application: {
        include: {
          JobOffer: {
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
          ApplicationStatus: true,
          User: true,
        },
      },
    },
  });
};

export const getUserWithExternalModels = async () => {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser) return redirect("/api/auth/login");

  const user = await prisma.user.findUnique({
    where: {
      kindeId: kindeUser?.id,
    },
    include: {
      managedCompanies: {
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
      },
      Application: {
        include: {
          JobOffer: {
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
          ApplicationStatus: true,
          User: true,
        },
      },

      // applications: {
      //   include: {
      //     JobOffer: {
      //       include: {
      //         City: true,
      //         Company: true,
      //         ContractType: true,
      //         Category: true,
      //         Technology: true,
      //         ExperienceLevel: true,
      //         Application: true,
      //       },
      //     },
      //     ApplicationStatus: true,
      //     User: true,
      //   },
      // },
    },
  });

  if (!user) return redirect("/api/auth/login");
  return user;
};
