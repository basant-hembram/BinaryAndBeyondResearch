import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeadset, faMagnifyingGlassDollar, faUserTie, faLaptop, faBriefcase, faPercent, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';
import { useNavigate } from 'react-router-dom';

const iconMap: Record<string, any> = {
  faHeadset,
  faMagnifyingGlassDollar,
  faUserTie,
  faLaptop,
  faBriefcase,
  faPercent,
  faGlobe,
  faArrowRight,
};

const BenefitsSection = () => {
  const { benefits } = data.becomeDistributor;
  const navigate = useNavigate();

  return (
    <section className="bg-[#E9E9EB] py-16">
      <div className="container max-md:px-4 mx-auto">
        <h2 className="text-[24px] lg:text-[32px] xl:text-[36px] text-center lg:text-left text-[#090914] mb-12">
          {benefits.title} <span className="text-[#E6AF1C] font-semibold">{benefits.titleHighlight}</span>
        </h2>
        <div className="flex flex-col lg:flex-row mb-12">
          <div>
            <h3 className="text-[20px] font-semibold text-[#0A1A3A] mb-6">{benefits.leftColumnTitle}</h3>
            <div className="space-y-0 lg:max-w-[360px] xl:max-w-[500px]">
              {benefits.items.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 py-6 border-b border-gray-300 last:border-0">
                  <div className="w-12 h-12 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={iconMap[benefit.icon]} className="text-white text-lg" />
                  </div>
                  <h4 className="font-medium text-[15px] lg:text-[16px] text-[#090914]">{benefit.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1 pt-[50px] lg:pt-0'>
            <h3 className="text-[20px] font-semibold text-[#0A1A3A] pl-0 lg:pl-[30px] xl:pl-[80px] mb-6">{benefits.rightColumnTitle}</h3>
            <div className="space-y-0">
              {benefits.items.map((benefit, index) => (
                <div key={index} className="py-6 pl-0 lg:pl-[30px] xl:pl-[80px] border-b border-gray-300 last:border-0">
                  <p className="text-[#575455] text-[15px] lg:text-[16px] lg:leading-[48px]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-left">
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white px-8 text-[16px]" onClick={() => navigate('/contact')}>
            {benefits.ctaButton.text} <FontAwesomeIcon icon={iconMap[benefits.ctaButton.icon]} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
