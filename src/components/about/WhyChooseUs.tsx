import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const { about: aboutData } = data;

const WhyChooseUs = () => {
  const { whyChooseUs } = aboutData as any;

  return (
    <section className="py-8 md:py-12">
      <div className="container max-md:px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div data-gsap="fade-left">
              <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px] font-semibold">
                <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold tracking-[0.2em]" data-gsap="gradient-shine">{whyChooseUs.label}</span>
              </h2>
              <p className="text-[#575455] text-[14px] lg:text-[16px] leading-relaxed mb-8 whitespace-pre-line">
                {whyChooseUs.description}
              </p>
            </div>
            <div className="space-y-4" data-gsap="stagger-up">
              {whyChooseUs.features.map((feature: any, index: number) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-[linear-gradient(180deg,#353572_0%,#602F7B_100%)] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCloud} className="text-white text-[14px]" />
                  </div>
                  <span className="text-[#0A1A3A] text-[14px] lg:text-[15px] font-medium">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[380px] lg:h-[460px]" data-gsap="fade-right">
            <div className="row-span-2">
              <img
                src={whyChooseUs.images[0].src}
                alt={whyChooseUs.images[0].alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <img
              src={whyChooseUs.images[1].src}
              alt={whyChooseUs.images[1].alt}
              className="w-full h-full object-cover rounded-2xl"
            />
            <img
              src={whyChooseUs.images[2].src}
              alt={whyChooseUs.images[2].alt}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
