import Banner from '../components/common/Banner';
import HeroSection from '../components/become-distributor/HeroSection';
import IndustryGrowthSection from '../components/become-distributor/IndustryGrowthSection';
import WhyBecomeSection from '../components/become-distributor/WhyBecomeSection';
import BenefitsSection from '../components/become-distributor/BenefitsSection';
import SupportDistributorsSection from '../components/become-distributor/SupportDistributorsSection';
import CareerSection from '../components/become-distributor/CareerSection';
import OfferingsSection from '../components/become-distributor/OfferingsSection';
import StepsSection from '../components/become-distributor/StepsSection';
import ComplianceSection from '../components/become-distributor/ComplianceSection';
import { data } from '../data';

const BecomeDistributor = () => {
  const distributorData = data.becomeDistributor;
  
  return (
    <div className="bg-white">
      <div className='block lg:hidden'>
        <Banner
          title={distributorData.banner.title}
          breadcrumbs={distributorData.banner.breadcrumbs}
          backgroundImage={distributorData.banner.backgroundImage}
        />
      </div>
      <HeroSection />
      <IndustryGrowthSection />
      <WhyBecomeSection />
      <BenefitsSection />
      <SupportDistributorsSection />
      <CareerSection />
      <OfferingsSection />
      <StepsSection />
      <ComplianceSection />
    </div>
  );
};

export default BecomeDistributor;
