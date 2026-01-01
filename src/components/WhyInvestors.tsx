import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const WhyInvestors = () => {
  const leftReasons = [
    "7+ Years of experience in wealth management",
    "200+ Happy Families",
    "105 Crore+ AUM under management"
  ];

  const rightReasons = [
    "SIP Specialist - Jharkhand Mutual Fund Distributor",
    "Dedicated Office at Sector-4 Bokaro, Jharkhand"
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[36px] lg:text-[36px] text-[#0A1A3A] mb-4">
            Why investors trust <span className="text-[#E6AF1C] font-semibold">Finyzer Assets</span>
          </h2>
          <p className="text-lg text-[#575455]">
            Finyser Assets is India 's trusted Mutual fund Distributor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {leftReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-2xl mt-1" />
                <p className="text-[#575455] text-lg font-medium pt-1">{reason}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-2xl mt-1" />
                <p className="text-[#575455] text-lg font-medium pt-1">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestors;
