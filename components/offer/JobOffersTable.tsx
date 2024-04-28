"use client";

import { formatSalary } from "@/utils/helpers";
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
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { JobOfferWithExternalModels } from "@/utils/types";
import {Category, City, ExperienceLevel} from "@prisma/client";
import { JobOffersTableFilters } from "@/components/offer/JobOffersTableFilters";

type JobOffersTableProps = {
  jobOffers: JobOfferWithExternalModels[];
  categories: Category[];
  cities: City[];
  experienceLevels: ExperienceLevel[];
};

const JobOffersTable: React.FC<JobOffersTableProps> = ({
  jobOffers,
  categories,
  cities,
    experienceLevels,
}) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    experienceLevel: "",
    city: "",
  });

  const filteredJobOffers = jobOffers.filter((jobOffer) => {
    const search = filters.search.toLowerCase();
    const category = filters.category;
    const experienceLevel = filters.experienceLevel;
    const city = filters.city;

    return (
      jobOffer.title.toLowerCase().includes(search) &&
      (category ? jobOffer.Category.id === +category : true) &&
      (experienceLevel
        ? jobOffer.ExperienceLevel.id === +experienceLevel
        : true) &&
      (city ? jobOffer.City.id === +city : true)
    );
  });

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(jobOffers.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredJobOffers.slice(start, end);
  }, [page, filteredJobOffers]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  return (
    <div>
      <JobOffersTableFilters
        categories={categories}
        cities={cities}
        experienceLevels={experienceLevels}
        onFilterChange={handleFilterChange}
      />

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
          <TableColumn>Kategoria</TableColumn>
          <TableColumn>Doświadczenie</TableColumn>
          <TableColumn>Lokalizacja</TableColumn>
          <TableColumn>Widełki</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Link href={`/offers/${item.id}`} className="text-primary">
                  {item.title}
                </Link>
              </TableCell>
              <TableCell>{item.Company.name}</TableCell>
              <TableCell>{item.Category.name}</TableCell>
              <TableCell>{item.ExperienceLevel.name}</TableCell>
              <TableCell>{item.City.name}</TableCell>
              <TableCell>
                {formatSalary(item.salaryMin, item.salaryMax)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobOffersTable;
