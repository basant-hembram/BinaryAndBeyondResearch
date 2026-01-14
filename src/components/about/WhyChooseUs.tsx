import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const { about: aboutData } = data;

const WhyChooseUs = () => {
  const { whyChooseUs } = aboutData;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-md:px-4 mx-auto">
        <h2 className="hidden lg:block xl:hidden text-[26px] lg:text-[32px] xl:text-[36px] mb-[38px]">
          <span className="text-[#0A1A3A">{whyChooseUs.title} </span><br className='lg:block xl:hidden'></br>
          <span className="text-[#E6AF1C] font-semibold">{whyChooseUs.titleHighlight.split(' ').slice(0, 1).join(' ')}<br className='hidden lg:hidden'></br>{whyChooseUs.titleHighlight.split(' ').slice(1).join(' ')}</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start xl:items-center">
          <div>
            <h2 className="lg:hidden xl:block text-[26px] lg:text-[32px] xl:text-[36px] mb-6">
              <span className="text-[#0A1A3A">{whyChooseUs.title} </span>
              <span className="text-[#E6AF1C] font-semibold">{whyChooseUs.titleHighlight.split(' ').slice(0, 1).join(' ')}<br className='hidden lg:flex'></br>{whyChooseUs.titleHighlight.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px] mb-6 font-regular">
              {whyChooseUs.subtitle}
            </p>
            <div className="space-y-[30px]">
              {whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faHandPointRight}
                    className="text-[#E6AF1C] text-lg flex-shrink-0"
                  />
                  <span className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px] font-medium">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={whyChooseUs.image.src}
              alt={whyChooseUs.image.alt}
              className="rounded-[50px] w-full h-[240px] lg:h-[348px] xl:h-[446px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
