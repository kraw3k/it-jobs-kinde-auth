"use client";

import React from "react";
import {
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";
import { companyLogoPlaceholderUrl } from "@/utils/consts";
import { CompanyWithExternalModels } from "@/utils/types";

type ManagedCompaniesTableProps = {
  companies: CompanyWithExternalModels[];
};

export default function ManagedCompaniesTable({
  companies,
}: ManagedCompaniesTableProps) {
  return (
    <div>
      <h1 className="text-xl mb-4">Firmy, którymi zarządzasz</h1>
      <br />
      <Table>
        <TableHeader>
          <TableColumn>Firma</TableColumn>
          <TableColumn>Oferty pracy</TableColumn>
        </TableHeader>
        <TableBody>
          {companies.map((company) => {
            const logoUrl = company.logoUrl || companyLogoPlaceholderUrl;
            return (
              <TableRow key={company.id}>
                <TableCell>
                  <Link
                    href={`/employer/company/${company.id}`}
                    className="text-primary"
                  >
                    <div className="flex items-center my-2">
                      <Image
                        src={logoUrl}
                        alt={company.name}
                        width={40}
                        height={40}
                        radius="none"
                      />
                      <p className="ml-2">{company.name}</p>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>{company.JobOffers.length}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
