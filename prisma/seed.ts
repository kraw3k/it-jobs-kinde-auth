import { PrismaClient } from "@prisma/client";
import { companies } from "./seedData/companies";
import { jobOffers } from "./seedData/jobOffers";
import { categories } from "./seedData/categories";
import { contractTypes } from "./seedData/contractTypes";
import { experienceLevels } from "./seedData/experienceLevels";
import { cities } from "./seedData/cities";
import { applicationStatuses } from "./seedData/applicationStatuses";
import { applications } from "./seedData/applications";
import { users } from "./seedData/users";

const prisma = new PrismaClient();

// const seedUsers = async () => {
//   for (const user of users) {
//     await prisma.user.create({
//       data: user,
//     });
//   }
// };
const seedCompanies = async () => {
  for (const company of companies) {
    await prisma.company.create({
      data: company,
    });
  }
};
const seedCategories = async () => {
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
};
const seedContractTypes = async () => {
  for (const contractType of contractTypes) {
    await prisma.contractType.create({
      data: contractType,
    });
  }
};
const seedExperienceLevels = async () => {
  for (const experienceLevel of experienceLevels) {
    await prisma.experienceLevel.create({
      data: experienceLevel,
    });
  }
};
const seedCities = async () => {
  for (const city of cities) {
    await prisma.city.create({
      data: city,
    });
  }
};
const seedJobOffers = async () => {
  for (const jobOffer of jobOffers) {
    await prisma.jobOffer.create({
      data: jobOffer,
    });
  }
};

const seedApplicationStatuses = async () => {
  for (const status of applicationStatuses) {
    await prisma.applicationStatus.create({
      data: status,
    });
  }
};

// const seedApplications = async () => {
//   for (const application of applications) {
//     await prisma.application.create({
//       data: application,
//     });
//   }
// };

async function main() {
  // await seedUsers();
  await seedCompanies();
  await seedCategories();
  await seedContractTypes();
  await seedExperienceLevels();
  await seedCities();
  await seedJobOffers();
  await seedApplicationStatuses();
  // await seedApplications();
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seed finished");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
