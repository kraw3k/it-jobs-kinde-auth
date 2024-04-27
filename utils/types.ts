import { Prisma } from "@prisma/client";

// *** JobOffer ***
const jobOfferWithExternalModels =
  Prisma.validator<Prisma.JobOfferDefaultArgs>()({
    include: {
      Company: true,
      City: true,
      Category: true,
      Technology: true,
      ExperienceLevel: true,
      ContractType: true,
      Application: true,
    },
  });
export type JobOfferWithExternalModels = Prisma.JobOfferGetPayload<
  typeof jobOfferWithExternalModels
>;

// *** Company ***
const companyWithExternalModels = Prisma.validator<Prisma.CompanyDefaultArgs>()(
  {
    include: {
      JobOffers: {
        include: {
          City: true,
          Company: true,
          ContractType: true,
          Category: true,
          Technology: true,
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
  },
);
export type CompanyWithExternalModels = Prisma.CompanyGetPayload<
  typeof companyWithExternalModels
>;

// *** Application ***
const applicationWithExternalModels =
  Prisma.validator<Prisma.ApplicationDefaultArgs>()({
    include: {
      JobOffer: {
        include: {
          City: true,
          Company: true,
          ContractType: true,
          Category: true,
          Technology: true,
          ExperienceLevel: true,
        },
      },
      ApplicationStatus: true,
      User: true,
    },
  });
export type ApplicationWithExternalModels = Prisma.ApplicationGetPayload<
  typeof applicationWithExternalModels
>;
