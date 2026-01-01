import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MeetYourPartner = () => {
  const features = [
    "21+ Years Of Financial Expertise",
    "Helped 200 Families Secure Their Future",
    "Specialist In SIP, Mutual Funds & Family Portfolio Planning",
    "Vision \"Har Ghar Me SIP, Har Parivaar Financially Strong\""
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0A1A3A] relative overflow-hidden">
    {/* Top Left Circle */}
      <img 
        src="/images/partner-top-left-circle.png" 
        alt="" 
        className="absolute left-0 top-0 w-64 h-64 pointer-events-none"
      />

      {/* Bottom Right Circle */}
      <img 
        src="/images/partner-bottom-right-circle.png" 
        alt="" 
        className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-white text-lg mb-2">Meet Your Health Coach</p>
              <h2 className="text-4xl md:text-[36px] text-[#E6AF1C] font-semibold mb-8">
                Rajesh Choudhary
              </h2>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-white text-xl mt-1">•</span>
                  <p className="text-white text-base">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-[#00A896] hover:bg-[#008F7E] text-white flex items-center gap-2"
              >
                About Us
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="/images/founder.png" 
                alt="Rajesh Choudhary" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourPartner;
