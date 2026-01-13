import React from 'react';
import KycRelatedServices from '../components/important-links/KycRelatedServices';
import AadharBasedKyc from '../components/important-links/AadharBasedKyc';
import NonAadharKycUpdate from '../components/important-links/NonAadharKycUpdate';
import EmailMobileUpdate from '../components/important-links/EmailMobileUpdate';
import NomineeServices from '../components/important-links/NomineeServices';
import Banner from '@/components/common/Banner';
import HelpSection from '../components/important-links/HelpSection';

const ImportantLinks: React.FC = () => {
    return (
        <div className="bg-white">
            <Banner
                title="Important Links"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Important Links', path: '/important-links' }
                ]}
                backgroundImage="/images/terms-banner.jpg"
            />

            {/* Main Content */}
            <div className="mb-8">
                <div className="container mx-auto pt-16">
                    <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A]">
                        Important <span className="text-[#E6AF1C] font-semibold">Links</span>
                    </h2>
                </div>
            </div>

            {/* Services Grid */}
            <div className="">
                <KycRelatedServices />
                <AadharBasedKyc />
                <NonAadharKycUpdate />
                <EmailMobileUpdate />
                <NomineeServices />
            </div>

            {/* Help Section */}
            <HelpSection
                onCallClick={() => console.log('Call button clicked')}
                onWhatsAppClick={() => console.log('WhatsApp button clicked')}
            />
        </div>
    );
};

export default ImportantLinks;