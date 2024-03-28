"use client";

import { formatCurrency, formatSalary } from "@/utils/helpers";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";

type JobOffer = {
  id: number;
  title: string;
  salaryMin: number;
  salaryMax: number;
  Company: {
    name: string;
  };
  City: {
    name: string;
  };
};

type JobOffersTableProps = {
  jobOffers: JobOffer[];
};

const JobOffersTable: React.FC<JobOffersTableProps> = ({ jobOffers }) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(jobOffers.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return jobOffers.slice(start, end);
  }, [page, jobOffers]);

  return (
    <Table
      aria-label="Oferty pracy"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn>Tytuł</TableColumn>
        <TableColumn>Firma</TableColumn>
        <TableColumn>Lokalizacja</TableColumn>
        <TableColumn>Widełki</TableColumn>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Link href={`offers/${item.id}`} className="text-primary">{item.title}</Link>
            </TableCell>
            <TableCell>{item.Company.name}</TableCell>
            <TableCell>{item.City.name}</TableCell>
            <TableCell>{formatSalary(item.salaryMin, item.salaryMax)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JobOffersTable;
