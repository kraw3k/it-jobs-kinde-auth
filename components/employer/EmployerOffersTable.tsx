"use client";

import {
  CompanyWithExternalModels,
  JobOfferWithExternalModels,
} from "@/utils/types";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import NextLink from "next/link";

type EmployerOffersTableProps = {
  company: CompanyWithExternalModels;
  jobOffers: JobOfferWithExternalModels[];
};
export default function EmployerOffersTable({
  company,
  jobOffers,
}: EmployerOffersTableProps) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableColumn>Stanowisko</TableColumn>
          <TableColumn>Lokalizacja</TableColumn>
          <TableColumn>Ilość aplikacji</TableColumn>
        </TableHeader>
        <TableBody>
          {jobOffers.map((jobOffer) => (
            <TableRow key={jobOffer.id}>
              <TableCell>
                <Link as={NextLink} href={`${company.id}/offer/${jobOffer.id}`}>
                  {jobOffer.title}
                </Link>
              </TableCell>
              <TableCell>{jobOffer.City.name}</TableCell>
              <TableCell>{jobOffer.Application.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
