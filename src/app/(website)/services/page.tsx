import ServicesMainPage from '@/components/ui/websitePages/services/ServicesMainPage';
import React, { Suspense } from 'react';

const ServicesPage = () => {
    return (
        <div>
                  <Suspense fallback={<div>Loading...</div>}>
                <ServicesMainPage />
            </Suspense>
        </div>
    );
};

export default ServicesPage;