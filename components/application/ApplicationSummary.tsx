"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";
import { ApplicationWithExternalModels } from "@/utils/types";

type ApplicationSummaryProps = {
  application: ApplicationWithExternalModels;
};

export default function ApplicationSummary({
  application,
}: ApplicationSummaryProps) {
  return (
    <Table>
      <TableHeader>
        <TableColumn>Pole</TableColumn>
        <TableColumn>Wartość</TableColumn>
      </TableHeader>
      <TableBody className="text-nowrap">
        <TableRow key={application.id}>
          <TableCell>
            <strong>Imię i nazwisko</strong>
          </TableCell>
          <TableCell>{application.fullName}</TableCell>
        </TableRow>
        <TableRow key={application.id}>
          <TableCell>
            <strong>Email</strong>
          </TableCell>
          <TableCell>{application.email}</TableCell>
        </TableRow>
        <TableRow key={application.id}>
          <TableCell>
            <strong>Data aplikacji</strong>
          </TableCell>
          <TableCell>{new Date(application.createdAt).toUTCString()}</TableCell>
        </TableRow>
        <TableRow key={application.id}>
          <TableCell>
            <strong>Status</strong>
          </TableCell>
          <TableCell>{application.ApplicationStatus?.name || "---"}</TableCell>
        </TableRow>
        <TableRow key={application.id}>
          <TableCell>
            <strong>CV</strong>
          </TableCell>
          <TableCell>
            <Link href={application.cvUrl} rel="noopener noreferrer" target="_blank">Pobierz</Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
