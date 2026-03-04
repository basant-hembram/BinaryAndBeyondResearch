import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faBrain, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const { about: aboutData } = data;

const iconMap: Record<string, any> = {
  faEye,
  faBullseye,
  faBrain,
  faHandshake,
};

const OurCorePrinciples = () => {
  const { corePrinciples } = aboutData as any;

  return (
    <section className="py-8 md:py-12">
      <div className="container max-md:px-4 mx-auto">
        <div className="grid lg:grid-cols-[1fr_60%] gap-12 items-start">

          {/* Left */}
          <div>
            <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px] font-semibold">
              <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold tracking-[0.2em]">
                {corePrinciples.label}
              </span>
            </h2>
            <p className="text-[#575455] text-[14px] lg:text-[16px] leading-relaxed mb-8 whitespace-pre-line">
              {corePrinciples.description}
            </p>
          </div>

          {/* Right — 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePrinciples.principles.map((principle: any, index: number) => (
              <div key={index} className="flex flex-col lg:flex-row gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-[#6B2E7E] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={iconMap[principle.icon]} className="w-7 h-7 text-white" />
                </div>
                <div>
                <h4 className="font-semibold text-[20px] mb-[12px] text-[#0A1A3A]">{principle.title}</h4>
                <p className="text-[#575455] text-[16px] lg:text-[18px] leading-[32px]">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurCorePrinciples;
