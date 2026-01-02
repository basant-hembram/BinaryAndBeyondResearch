import { Card, CardContent } from './ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faDribbble} from '@fortawesome/free-brands-svg-icons';
import { Button } from './ui/button';

const Founders = () => {
  const founders = [
    {
      name: "Orlando Diggs",
      role: "Founder & CEO",
      image: "/images/orlando.png"
    },
    {
      name: "Phoenix Baker",
      role: "Founding Member",
      image: "/images/phoenix.png"
    },
    {
      name: "Drew Cano",
      role: "Founding Member",
      image: "/images/drew.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start">
          {/* Left side - Text content */}
          <div className="w-full xl:w-2/5">
            <div>
              <p className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A]">Meet your</p>
              <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-[#E6AF1C] mb-[30px] lg:mb-[18px] xl:mb-[24px]">
                Finyzer Assets Founders
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              At Finyzer Assets, we believe in the power of teamwork and collaboration to drive success. Meet the dedicated individuals who form the backbone of our organization and work tirelessly to empower our clients on their financial journey.
            </p>
            
            <Button 
                size="lg" 
                className="bg-[#00A896] hover:bg-[#008F7E] text-white flex items-center gap-2"
              >
                 Our Team
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
          </div>

          {/* Right side - Founder cards */}
          <div className="w-full xl:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="overflow-hidden group"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <CardContent className="">
                  <h4 className="font-semibold text-lg text-[#0A1A3A] mb-1">
                    {founder.name}
                  </h4>
                  <p className="text-[#E6AF1C] text-sm mb-3">{founder.role}</p>

                  <div className="flex justify-start gap-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#E6AF1C] transition-colors"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#E6AF1C] transition-colors"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#E6AF1C] transition-colors"
                    >
                      <FontAwesomeIcon icon={faDribbble} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
