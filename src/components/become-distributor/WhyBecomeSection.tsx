import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const WhyBecomeSection = () => {
  const { whyBecome } = data.becomeDistributor;

  return (
    <section className="container max-md:px-4 mx-auto py-[48px] lg:py-[65px] xl:py-[110px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-6">
            {whyBecome.title}{' '}
            <span className="text-[#E6AF1C] font-semibold">{whyBecome.titleHighlight}</span>
          </h2>
          <p className="text-[#575455] text-[16px] lg:text-[18px] mb-8">
            {whyBecome.description}
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {whyBecome.reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-3">
                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-xl" />
                <span className="text-[#0A1A3A] font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={whyBecome.image}
            alt="Team"
            className="rounded-[50px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyBecomeSection;
