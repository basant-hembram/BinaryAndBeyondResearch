import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandHoldingDollar, 
  faPeopleRoof, 
  faBuilding, 
  faSackDollar, 
  faCalculator
} from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const { about: aboutData } = data;

const iconMap: Record<string, any> = {
  faHandHoldingDollar,
  faPeopleRoof,
  faBuilding,
  faSackDollar,
  faCalculator
};

const WhyTrustUs = () => {
  const { whyTrustUs } = aboutData;

  return (
     <section className="py-16 md:py-24 bg-[#E9E9EB] relative overflow-hidden">
      {/* Top Left Circle */}
      <img
        src={whyTrustUs.decorativeImages.topLeft}
        alt=""
        className="absolute left-0 top-0 w-64 h-64 pointer-events-none"
      />

      {/* Bottom Right Circle */}
      <img
        src={whyTrustUs.decorativeImages.bottomRight}
        alt=""
        className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none"
      />
      <div className="container max-md:px-4 mx-auto">
        <div className="text-center mb-[53px]">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#090914] mb-2">
            {whyTrustUs.title} <br className='lg:hidden'></br> <span className="text-[#E6AF1C] font-semibold">{whyTrustUs.titleHighlight}</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] xl:text-[20px] text-[#575455]">
            {whyTrustUs.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {whyTrustUs.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-[#E6AF1C] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row items-start gap-4">
                <FontAwesomeIcon icon={iconMap[feature.icon]} className="text-[#E6AF1C] text-[22px]" />
                <div>
                  <h4 className="font-bold text-[#0A1A3A] text-[16px] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-[#575455] text-[16px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
