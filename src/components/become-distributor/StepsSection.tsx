import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faGraduationCap, faTrophy, faIdCard, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const iconMap: Record<string, any> = {
  faGraduationCap,
  faTrophy,
  faIdCard,
  faHandshake,
};

const StepsSection = () => {
  const { steps: stepsData } = data.becomeDistributor;
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  return (
    <section className="bg-[#E9E9EB] py-[44px] lg:py-[50px] xl:py-[92px]">
      <div className="container mx-auto">
        <h2 className="text-[24px] lg:text-[32px] xl:text-[36px] text-[#090914] mb-2 text-center">
          {stepsData.title} <span className="text-[#E6AF1C] font-medium">{stepsData.titleHighlight1}</span>{' '}
          With <span className="text-[#E6AF1C] font-medium">{stepsData.titleHighlight2}</span>
        </h2>
        <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px] text-center max-w-3xl mx-auto mb-12">
          {stepsData.subtitle}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src={stepsData.image.src}
              alt={stepsData.image.alt}
              className="rounded-[50px] w-full"
            />
          </div>
          <div className="space-y-4">
            {stepsData.items.map((step, index) => (
              <div key={index} className="bg-white rounded-lg border border-[#E6AF1C]">
                <button
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E6AF1C] text-white flex items-center justify-center">
                      <FontAwesomeIcon icon={iconMap[step.icon]} className="text-lg" />
                    </div>
                    <span className="font-semibold text-[16px] text-[#0A1A3A]">{step.title}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={expandedStep === index ? faCaretUp : faCaretDown}
                    className="text-[#445275]"
                  />
                </button>
                {expandedStep === index && (
                  <div className="px-5 pb-5">
                    <div className="p-[20px] rounded-[10px] border border-dashed border-[#E6AF1C]">
                      <p className="text-[#575455] leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
