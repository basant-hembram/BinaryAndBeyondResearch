import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const WhyInvestors = () => {
  const reasons = [
    "7+ Years of experience in wealth management",
    "SIP Specialist - Jharkhand Mutual Fund Distributor",
    "200+ Happy Families",
    "Dedicated Office at Sector-4 Bokaro, Jharkhand",
    "105 Crore+ AUM under management"    
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#E9E9EB] relative overflow-hidden">
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

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-[20px] lg:mb-[24px] xl:mb-[28px]">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px]">
            Why investors trust <br className='block md:hidden'></br> <span className="text-[#E6AF1C] font-semibold">Finyzer Assets</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] xl:text-[20px] text-[#575455]">
            Finyser Assets is India 's trusted Mutual fund Distributor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-12 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-2 md:gap-4">
              <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[14px] lg:text-[16px] xl:text-[20px] mt-1" />
              <p className="text-[#575455] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvestors;
