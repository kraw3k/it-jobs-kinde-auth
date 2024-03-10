import React from 'react';
import prisma from "@/lib/prisma";
import JobOffersTable from '@/components/JobOffersTable';

const JobOffersPage: React.FC = async () => {
    const jobOffers = await prisma.jobOffer.findMany()
    return (
        <div>
            <h1 className="text-xl mb-4">Dostępne oferty pracy</h1>
            <JobOffersTable jobOffers={jobOffers} />
        </div>
    );
};

export default JobOffersPage;