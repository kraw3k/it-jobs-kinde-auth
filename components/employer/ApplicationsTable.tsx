"use client";

import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { ApplicationWithExternalModels } from "@/utils/types";

type ApplicationsTableProps = {
  applications: ApplicationWithExternalModels[] | undefined;
};

export default function ApplicationsTable({
  applications,
}: ApplicationsTableProps) {
  if (!applications) return null;
  return (
    <Table>
      <TableHeader>
        <TableColumn>Pozycja</TableColumn>
        <TableColumn>Imię i nazwisko</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Data aplikacji</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        {applications
          ?.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() -
              new Date(a.createdAt).getTime(),
          )
          .map((application) => (
            <TableRow key={application.id}>
              <TableCell>
                <Link href={`/employer/application/${application.id}`}>
                  {application.JobOffer.title} - {application.JobOffer.Company.name}
                </Link>
              </TableCell>
              <TableCell>
                  {application.fullName}
              </TableCell>
              <TableCell>{application.email}</TableCell>
              <TableCell>
                {new Date(application.createdAt).toUTCString()}
              </TableCell>
              <TableCell>
                {application.ApplicationStatus?.name || "---"}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
