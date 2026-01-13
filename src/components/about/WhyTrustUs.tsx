import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandHoldingDollar, 
  faPeopleRoof, 
  faBuilding, 
  faSackDollar, 
  faCalculator
} from '@fortawesome/free-solid-svg-icons';

const WhyTrustUs = () => {
  const features = [
    {
      icon: faHandHoldingDollar,
      title: '7+ Years of experience in wealth management',
      description: 'Find out the best performing schemes across categories and time frame.'
    },
    {
      icon: faPeopleRoof,
      title: '200+ Happy Families',
      description: 'Find out the best performing schemes across categories and time frame.'
    },
    {
      icon: faSackDollar,
      title: '105 Crore+ AUM under management',
      description: 'Find out the best performing schemes across categories and time frame.'
    },
    {
      icon: faCalculator,
      title: 'SIP Specialist - Jharkhand Mutual Fund Distributor',
      description: 'Find out the best performing schemes across categories and time frame.'
    },
    {
      icon: faBuilding,
      title: 'Dedicated Office at Sector-4 Bokaro, Jharkhand',
      description: 'Find out the best performing schemes across categories and time frame.'
    }
  ];

  return (
     <section className="py-16 md:py-24 bg-[#E9E9EB] relative overflow-hidden">
      {/* Top Left Circle */}
      <img
        src="/images/top-left-circle.png"
        alt=""
        className="absolute left-0 top-0 w-64 h-64 pointer-events-none"
      />

      {/* Bottom Right Circle */}
      <img
        src="/images/bottom-right-circle.png"
        alt=""
        className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none"
      />
      <div className="container mx-auto">
        <div className="text-center mb-[53px]">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#090914] mb-2">
            Why investors trust <br className='lg:hidden'></br> <span className="text-[#E6AF1C] font-semibold">Finyzer Assets</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] xl:text-[20px] text-[#575455]">
            Finyzer Assets is India’s trusted Mutual fund Distributor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-[#E6AF1C] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row items-start gap-4">
                <FontAwesomeIcon icon={feature.icon} className="text-[#E6AF1C] text-[22px]" />
                <div>
                  <h4 className="font-bold text-[#0A1A3A] text-[16px] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
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
