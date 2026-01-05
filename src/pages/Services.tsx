import Banner from '../components/common/Banner';
import ServiceContent from '../components/services/ServiceContent';
import ServiceBenefits from '../components/services/ServiceBenefits';

const Services = () => {
  return (
    <div className="bg-white">
      <Banner 
        title="Our Suite Of Financial Products"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' }
        ]}
       backgroundImage="/images/banner-bg.jpg"
      />
      <ServiceContent />
      <ServiceBenefits />
    </div>
  );
};

export default Services;
