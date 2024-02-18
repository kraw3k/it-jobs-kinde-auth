import JobsTable from "@/components/JobsTable";

export default async function Home() {
  return (
    <>
      <h1 className="text-xl mb-4">Active jobs</h1>
      <JobsTable />
    </>
  );
}
