import { Card, CardContent } from '../ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faDribbble} from '@fortawesome/free-brands-svg-icons';
import { data } from '../../data';

const { about: aboutData } = data;

const OurFounders = () => {
  const { founders } = aboutData;

  return (
    <section className="py-16 md:py-24 bg-[#E9E9EB]">
      <div className="container max-md:px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-4">
            <span className="text-[#4A4444]">{founders.title} </span>
            <span className="text-[#E6AF1C] font-semibold">{founders.titleHighlight}</span>
          </h2>
          <p className="text-[#575455] text-[16px] lg:text-[18px] max-w-3xl mx-auto">
            {founders.description}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-6">
            {founders.foundersList.map((founder, index) => (
              <Card
                key={index}
                className="overflow-hidden group"
              >
                <div className="aspect-[1/1] lg:aspect-[1/1] xl:aspect-[1/1] overflow-hidden">
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
    </section>
  );
};

export default OurFounders;
