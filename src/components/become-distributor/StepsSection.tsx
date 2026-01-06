import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    number: 1,
    title: 'Get yourself as a training',
    content: 'Online exams are conducted across multiple cities and locations in India and can be done in the convenience of your home or office.',
  },
  {
    number: 2,
    title: 'Pass NISM exam',
    content: 'Once training is completed, you need to pass the NISM certification exam to become a certified mutual fund distributor.',
  },
  {
    number: 3,
    title: 'Obtain ARN Number',
    content: 'After passing the exam, you need to obtain your ARN (AMFI Registration Number) to start your distribution business.',
  },
  {
    number: 4,
    title: 'Register with Finyzor Assets',
    content: 'Complete the registration process with Finyzor Assets and get access to our platform and support systems.',
  },
];

const StepsSection = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 text-center">
          Steps To Become A <span className="text-[#E6AF1C]">Mutual Fund Distributor</span>{' '}
          With Finyzor Assets
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Now making the MF investment journey simple for investors
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/photo-1549923746-c502d488b3ea.avif"
              alt="Steps"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow">
                <button
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E6AF1C] text-white flex items-center justify-center font-semibold">
                      {step.number}
                    </div>
                    <span className="font-semibold text-gray-900">{step.title}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={expandedStep === index ? faChevronUp : faChevronDown}
                    className="text-gray-400"
                  />
                </button>
                {expandedStep === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 pl-12">{step.content}</p>
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
