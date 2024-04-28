import React from "react";
import JobOffersTable from "@/components/offer/JobOffersTable";
import { getOffersWithExternalModels } from "@/services/jobOffers/getJobOffers";
import { getCategoriesWithExternalModels } from "@/services/categories/getCategories";
import { getCitiesWithExternalModels } from "@/services/cities/getCities";
import { getExperienceLevelsWithExternalModels } from "@/services/experienceLevels/getExperienceLevels";

const JobOffersPage: React.FC = async () => {
  const jobOffers = await getOffersWithExternalModels();
  const categories = await getCategoriesWithExternalModels();
  const cities = await getCitiesWithExternalModels();
  const experienceLevels = await getExperienceLevelsWithExternalModels();

  return (
    <div>
      <h1 className="text-xl mb-4">Dostępne oferty pracy</h1>
      <JobOffersTable
        jobOffers={jobOffers}
        categories={categories}
        cities={cities}
        experienceLevels={experienceLevels}
      />
    </div>
  );
};

export default JobOffersPage;
