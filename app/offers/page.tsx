import React from 'react';
import prisma from "@/lib/prisma";
import JobOffersTable from '@/components/JobOffersTable';

const JobOffersPage: React.FC = async () => {
    const jobOffers = await prisma.jobOffer.findMany(
        {
            include: {
                Category: true,
                Technology: true,
                City: true,
                ContractType: true,
                Company: true,
                ExperienceLevel: true,
                Application: {
                    include: {
                        User: true,
                        JobOffer: true,
                        ApplicationStatus: true
                    }

                }
            }
        }
    )
    return (
        <div>
            <h1 className="text-xl mb-4">Dostępne oferty pracy</h1>
            <JobOffersTable jobOffers={jobOffers} />
        </div>
    );
};

export default JobOffersPage;