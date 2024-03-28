import prisma from "@/lib/prisma";

export const seedJobOffers = async () => {
  await prisma.category.createMany({
    data: [
      {
        name: "Frontend",
      },
      {
        name: "Backend",
      },
      {
        name: "Fullstack",
      },
      {
        name: "DevOps",
      },
      {
        name: "QA",
      },
      {
        name: "Project Manager",
      },
      {
        name: "UX/UI",
      },
    ],
  });

  await prisma.technology.createMany({
    data: [
      {
        name: "React",
      },
      {
        name: "Vue",
      },
      {
        name: "Angular",
      },
      {
        name: "Node.js",
      },
      {
        name: "Python",
      },
      {
        name: "Java",
      },
      {
        name: "C#",
      },
      {
        name: "Docker",
      },
      {
        name: "Kubernetes",
      },
      {
        name: "Jenkins",
      },
      {
        name: "GitLab",
      },
      {
        name: "Jira",
      },
      {
        name: "Figma",
      },
      {
        name: "Sketch",
      },
    ],
  });

  await prisma.contractType.createMany({
    data: [
      {
        name: "B2B",
      },
      {
        name: "UoP",
      },
      {
        name: "UZ",
      },
    ],
  });

  await prisma.experienceLevel.createMany({
    data: [
      {
        name: "Junior",
      },
      {
        name: "Mid",
      },
      {
        name: "Senior",
      },
    ],
  });

  await prisma.city.createMany({
    data: [
      {
        name: "Warszawa",
      },
      {
        name: "Kraków",
      },
      {
        name: "Wrocław",
      },
      {
        name: "Poznań",
      },
      {
        name: "Gdańsk",
      },
      {
        name: "Szczecin",
      },
      {
        name: "Bydgoszcz",
      },
      {
        name: "Lublin",
      },
      {
        name: "Katowice",
      },
      {
        name: "Białystok",
      },
    ],
  });

  await prisma.company.createMany({
    data: [
      {
        name: "Kinde",
      },
      {
        name: "Google",
      },
      {
        name: "Facebook",
      },
      {
        name: "Microsoft",
      },
      {
        name: "Apple",
      },
      {
        name: "Amazon",
      },
      {
        name: "Netflix",
      },
      {
        name: "Spotify",
      },
      {
        name: "Uber",
      },
      {
        name: "Airbnb",
      },
    ],
  });

  await prisma.jobOffer.createMany({
    data: [
      {
        title: "Junior Frontend Developer",
        description: "We are looking for a Junior Frontend Developer",
        companyId: 1,
        cityId: 1,
        salaryMin: 10000,
        salaryMax: 15000,
        categoryId: 1,
        technologyId: 1,
        contractTypeId: 1,
        experienceLevelId: 1,
      },
      {
        title: "Junior Frontend Developer",
        description: "We are looking for a Junior Frontend Developer",
        companyId: 1,
        cityId: 1,
        salaryMin: 10000,
        salaryMax: 15000,
        categoryId: 1,
        technologyId: 1,
        contractTypeId: 1,
        experienceLevelId: 1,
      },
      {
        title: "Mid Frontend Developer",
        description: "We are looking for a Mid Frontend Developer",
        companyId: 1,
        cityId: 1,
        salaryMin: 15000,
        salaryMax: 20000,
        categoryId: 1,
        technologyId: 1,
        contractTypeId: 1,
        experienceLevelId: 2,
      },
      {
        title: "Senior Frontend Developer",
        description: "We are looking for a Senior Frontend Developer",
        companyId: 1,
        cityId: 1,
        salaryMin: 20000,
        salaryMax: 25000,
        categoryId: 1,
        technologyId: 1,
        contractTypeId: 1,
        experienceLevelId: 3,
      },
    ],
  });
};
