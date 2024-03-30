import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedUsers = async () => {
  const kacper = await prisma.user.create({
    data: {
      email: "kacper5047@gmail.com",
      firstName: "Kacper",
      lastName: "K",
      kindeId: "1",
    },
  });
  return { kacper };
};
const seedCompanies = async () => {
  const futureProcessing = await prisma.company.create({
    data: {
      name: "Future Processing",
      logoUrl:
        "https://media.designrush.com/agencies/49/conversions/Future-Processing-logo-profile.jpg",
    },
  });

  const sii = await prisma.company.create({
    data: {
      name: "Sii",
      logoUrl:
        "https://yt3.googleusercontent.com/q5tOnVkyGoB0WKu5lrX7tfl1YZN17uFaDe81jYgcgUG5E7u_eOJm2jCG8itHjy1nTjRMkgG1WYo=s900-c-k-c0x00ffffff-no-rj",
    },
  });

  const netguru = await prisma.company.create({
    data: {
      name: "Netguru",
      logoUrl: "https://avatars.githubusercontent.com/u/1146?s=280&v=4",
    },
  });

  return { futureProcessing, sii, netguru };
};
const seedCategories = async () => {
  const frontend = await prisma.category.create({
    data: {
      name: "Frontend",
    },
  });

  const backend = await prisma.category.create({
    data: {
      name: "Backend",
    },
  });

  const fullstack = await prisma.category.create({
    data: {
      name: "Fullstack",
    },
  });

  const devops = await prisma.category.create({
    data: {
      name: "DevOps",
    },
  });

  const qa = await prisma.category.create({
    data: {
      name: "QA",
    },
  });

  const pm = await prisma.category.create({
    data: {
      name: "Project Manager",
    },
  });

  const uxui = await prisma.category.create({
    data: {
      name: "UX/UI",
    },
  });

  return { frontend, backend, fullstack, devops, qa, pm, uxui };
};
const seedTechnologies = async () => {
  const react = await prisma.technology.create({
    data: {
      name: "React",
    },
  });

  const vue = await prisma.technology.create({
    data: {
      name: "Vue",
    },
  });

  const angular = await prisma.technology.create({
    data: {
      name: "Angular",
    },
  });

  const nodejs = await prisma.technology.create({
    data: {
      name: "Node.js",
    },
  });

  const python = await prisma.technology.create({
    data: {
      name: "Python",
    },
  });

  const java = await prisma.technology.create({
    data: {
      name: "Java",
    },
  });

  const csharp = await prisma.technology.create({
    data: {
      name: "C#",
    },
  });

  const docker = await prisma.technology.create({
    data: {
      name: "Docker",
    },
  });

  const kubernetes = await prisma.technology.create({
    data: {
      name: "Kubernetes",
    },
  });

  return {
    react,
    vue,
    angular,
    nodejs,
    python,
    java,
    csharp,
    docker,
    kubernetes,
  };
};
const seedContractTypes = async () => {
  const b2b = await prisma.contractType.create({
    data: {
      name: "B2B",
    },
  });

  const uop = await prisma.contractType.create({
    data: {
      name: "UoP",
    },
  });

  return { b2b, uop };
};
const seedExperienceLevels = async () => {
  const junior = await prisma.experienceLevel.create({
    data: {
      name: "Junior",
    },
  });

  const mid = await prisma.experienceLevel.create({
    data: {
      name: "Mid",
    },
  });

  const senior = await prisma.experienceLevel.create({
    data: {
      name: "Senior",
    },
  });

  return { junior, mid, senior };
};
const seedCities = async () => {
  const poznan = await prisma.city.create({
    data: {
      name: "Poznań",
    },
  });

  const warsaw = await prisma.city.create({
    data: {
      name: "Warszawa",
    },
  });

  const wroclaw = await prisma.city.create({
    data: {
      name: "Wrocław",
    },
  });

  return { poznan, warsaw, wroclaw };
};
const seedJobOffers = async () => {
  const jobOffer1 = await prisma.jobOffer.create({
    data: {
      title: "Frontend Developer",
      description: "We are looking for a Frontend Developer",
      companyId: 1,
      categoryId: 1,
      experienceLevelId: 1,
      contractTypeId: 1,
      cityId: 1,
      technologyId: 1,
      salaryMin: 5000,
      salaryMax: 8000,
    },
  });

  const jobOffer2 = await prisma.jobOffer.create({
    data: {
      title: "Backend Developer",
      description: "We are looking for a Backend Developer",
      companyId: 1,
      categoryId: 2,
      experienceLevelId: 2,
      contractTypeId: 2,
      cityId: 2,
      technologyId: 4,
      salaryMin: 6000,
      salaryMax: 10000,
    },
  });

  const jobOffer3 = await prisma.jobOffer.create({
    data: {
      title: "Fullstack Developer",
      description: "We are looking for a Fullstack Developer",
      companyId: 2,
      categoryId: 3,
      experienceLevelId: 3,
      contractTypeId: 1,
      cityId: 3,
      technologyId: 7,
      salaryMin: 7000,
      salaryMax: 12000,
    },
  });

  return { jobOffer1, jobOffer2, jobOffer3 };
};

async function main() {
  const users = await seedUsers();
  const companies = await seedCompanies();
  const categories = await seedCategories();
  const technologies = await seedTechnologies();
  const contractTypes = await seedContractTypes();
  const experienceLevels = await seedExperienceLevels();
  const cities = await seedCities();
  const jobOffers = await seedJobOffers();
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
