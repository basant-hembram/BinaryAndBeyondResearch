import { Card, CardContent } from '../ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faDribbble} from '@fortawesome/free-brands-svg-icons';
import { Button } from '../ui/button';
import { data } from '../../data';

const { home: homeData } = data;

const Founders = () => {
  const { founders } = homeData;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-md:px-4 mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start">
          {/* Left side - Text content */}
          <div className="w-full xl:w-2/5">
            <div>
              <p className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A]">{founders.title}</p>
              <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-[#E6AF1C] mb-[30px] lg:mb-[18px] xl:mb-[24px]">
                {founders.titleHighlight}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {founders.description}
            </p>
            
            <Button 
                size="lg" 
                className="bg-[#00A896] hover:bg-[#008F7E] text-white flex items-center gap-2"
              >
                 {founders.buttonText}
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
          </div>

          {/* Right side - Founder cards */}
          <div className="w-full xl:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {founders.foundersList.map((founder, index) => (
              <Card
                key={index}
                className="overflow-hidden group"
              >
                <div className="aspect-[5/4] lg:aspect-[3/3] xl:aspect-[4/5] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <CardContent className="">
                  <h4 className="font-semibold text-[20px] text-[#0A1A3A] mb-1">
                    {founder.name}
                  </h4>
                  <p className="text-[#E6AF1C] text-[18px] mb-3">{founder.role}</p>

                  <div className="flex justify-start gap-3">
                    <a
                      href={founder.social.twitter}
                      className="text-[#98A2B3] hover:text-[#E6AF1C] text-[24px] transition-colors"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href={founder.social.linkedin}
                      className="text-[#98A2B3] hover:text-[#E6AF1C] text-[24px] transition-colors"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href={founder.social.dribbble}
                      className="text-[#98A2B3] hover:text-[#E6AF1C] text-[24px] transition-colors"
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
