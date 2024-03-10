"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Tab,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";

type JobOffer = {
  id: number;
  title: string;
  company: string;
  location: string;
  salaryFixed: number
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
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
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
        <TableColumn key="title">Tytuł</TableColumn>
        <TableColumn key="company">Firma</TableColumn>
        <TableColumn key="location">Lokalizacja</TableColumn>
        <TableColumn key="salaryFixed">Wynagrodzenie</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                <Link href={`offers/${item.id}`}>
                  {getKeyValue(item, columnKey)}
                </Link>
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default JobOffersTable;
