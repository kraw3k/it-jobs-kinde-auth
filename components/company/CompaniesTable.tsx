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

type CompaniesTableProps = {
  companies: CompanyWithExternalModels[];
};

export default function CompaniesTable({ companies }: CompaniesTableProps) {
  return (
    <div>
      <h1 className="text-xl mb-4">Nasi partnerzy</h1>
      <p>Być może któraś z tych firm szuka właśnie Ciebie!</p>
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
                    href={`/companies/${company.id}`}
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
