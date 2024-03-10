import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";

export default async function Admin() {
  const { getAccessToken, getPermissions } = getKindeServerSession();

  console.log(await getPermissions());

  const accessToken = await getAccessToken();
  const permissions = await getPermissions();

  const users = await prisma.user.findMany();

  // seedJobOffers();

  return (
    <>
      <h1 className="text-xl mb-4">Admin page</h1>
      <div className="font-mono text-sm">
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Admin page&nbsp;
          <code className="font-mono font-bold">app/admin/page.tsx</code>
        </p>
        <pre>{JSON.stringify(permissions?.permissions, null, 2)}</pre>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </>
  );
}

const seedJobOffers = async () => {
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

  await prisma.jobOffer.createMany({
    data: [
      {
        title: "Junior Frontend Developer",
        description: "We are looking for a Junior Frontend Developer",
        company: "Kinde",
        location: "Remote",
        salaryFixed: 10000,
        categoryId: 1,
        technologyId: 1,
        contractTypeId: 1,
        experienceLevelId: 1,
      },
      {
        title: "Junior Frontend Developer",
        description: "We are looking for a Junior Frontend Developer",
        company: "LLP",
        location: "Gdańsk",
        salaryFixed: 8000,
        categoryId: 1,
        technologyId: 1,
        contractTypeId: 1,
        experienceLevelId: 1,
      },
      {
        title: "Mid Frontend Developer",
        description: "We are looking for a Mid Frontend Developer",
        company: "Kinde",
        location: "Remote",
        salaryFixed: 15000,
        categoryId: 1,
        technologyId: 1,
        contractTypeId: 1,
        experienceLevelId: 2,
      },
      {
        title: "Senior Frontend Developer",
        description: "We are looking for a Senior Frontend Developer",
        company: "LLP",
        location: "Gdańsk",
        salaryFixed: 18000,
        categoryId: 1,
        technologyId: 1,
        contractTypeId: 1,
        experienceLevelId: 3,
      },
    ],
  });
};
