import Banner from '../components/common/Banner';
import ServiceContent from '../components/services/ServiceContent';
import ServiceBenefits from '../components/services/ServiceBenefits';
import { data } from '../data';

const Services = () => {
  const servicesData = data.services;

  return (
    <div className="bg-white">
      <Banner 
        title={servicesData.title}
        breadcrumbs={servicesData.breadcrumbs}
        backgroundImage={servicesData.backgroundImage}
      />
      <ServiceContent />
      <ServiceBenefits />
    </div>
  );
};

export default Services;
