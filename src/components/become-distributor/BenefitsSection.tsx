import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeadset, faMagnifyingGlassDollar, faUserTie, faLaptop, faBriefcase, faPercent, faGlobe } from '@fortawesome/free-solid-svg-icons';

const benefits = [
  { icon: faHeadset, title: 'Sales & Marketing support', description: 'Ready Pastors, WhatsApp creatives, videos' },
  { icon: faMagnifyingGlassDollar, title: 'Research & Recommendations', description: 'Model Portfolios and SIP ideas' },
  { icon: faUserTie, title: 'Dedicated Relationship Manager', description: 'Single point of contact' },
  { icon: faLaptop, title: 'Cutting-Edge Platforms', description: 'Online onboarding and tracking' },
  { icon: faBriefcase, title: 'Portfolio Analysis', description: 'HNI & Retail client tools' },
  { icon: faPercent, title: 'Multiple products', description: 'Health insurance, mutual fund, children\'s plan, loan against securities, etc' },
  { icon: faGlobe, title: 'Cent percent online and offline support', description: 'Helping Dedicated Relationship Manager' },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#E9E9EB] py-16">
      <div className="container mx-auto">
        <h2 className="text-[24px] lg:text-[32px] xl:text-[36px] text-center lg:text-left text-[#090914] mb-12">
          Benefits Of <span className="text-[#E6AF1C] font-semibold">Partnering With Us</span>
        </h2>
        <div className="flex flex-col lg:flex-row mb-12">
          <div>
            <h3 className="text-[20px] font-semibold text-[#0A1A3A] mb-6">Benefits</h3>
            <div className="space-y-0 lg:max-w-[360px] xl:max-w-[500px]">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 py-6 border-b border-gray-300 last:border-0">
                  <div className="w-12 h-12 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={benefit.icon} className="text-white text-lg" />
                  </div>
                  <h4 className="font-medium text-[15px] lg:text-[16px] text-[#090914]">{benefit.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1 pt-[50px] lg:pt-0'>
            <h3 className="text-[20px] font-semibold text-[#0A1A3A] pl-0 lg:pl-[30px] xl:pl-[80px] mb-6">Explanations</h3>
            <div className="space-y-0">
              {benefits.map((benefit, index) => (
                <div key={index} className="py-6 pl-0 lg:pl-[30px] xl:pl-[80px] border-b border-gray-300 last:border-0">
                  <p className="text-[#575455] text-[15px] lg:text-[16px] lg:leading-[48px]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white px-8 text-[16px]">
            Join Finyzer Assets <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
