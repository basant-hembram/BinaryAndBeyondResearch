import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-white to-gray-50 py-[48px] lg:py-[65px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="">
            <h1 className="text-[32px] lg:text-[36px] xl:text-[48px] font-medium text-[#0A1A3A] !leading-[1.2]">
              Jharkhand's Most <br></br>Trusted Mutual Fund <br></br>Distributor
            </h1>
            <p className="text-[16px] lg:text-[16px] xl:text-[20px] text-[#575455] leading-relaxed mt-[25px]">
              Finyzer Assets is helping you to setting up the financial without required any finance skills or knowledge before
            </p>
            
            <div className="flex flex-wrap gap-4 mt-[30px]">
              <Button size="lg" className="text-base flex items-center gap-2">
                Request A Call Back
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>            
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-[50px] overflow-hidden aspect-[4/3]">
              <img 
                src="/images/office-entrance.jpg" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
              />
            </div>           
            
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Branding */}
            <div className="">
              <h3 className="text-[20px] lg:text-[24px] xl:text-[28px] text-[#0A1A3A] mb-2">
                Partnering for Success
              </h3>
              <div className="flex items-baseline gap-2">
                <h2 className="text-[20px] lg:text-[24px] xl:text-[28px] text-[#E6AF1C]">
                  Finyzer Assets
                </h2>
                <span className="text-[20px] lg:text-[24px] xl:text-[28px] text-[#0A1A3A]"></span>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2">
              <div className="text-center">
                <p className="text-[26px] lg:text-[32px] xl:text-[32px] text-[#E6AF1C] mb-2">50k +</p>
                <p className="text-[16px] text-[#090914] font-medium">Trusted Client</p>
              </div>
              <div className="text-center border-l border-[#D9D9D9]">
                <p className="text-[26px] lg:text-[32px] xl:text-[32px] text-[#E6AF1C] mb-2">2.2L +</p>
                <p className="text-[16px] text-[#090914] font-medium">Investor Base</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors z-50 h-[64px] w-[64px] flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </section>
  );
};

export default Hero;
