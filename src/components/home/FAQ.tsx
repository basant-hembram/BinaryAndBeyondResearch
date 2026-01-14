import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();
  const faqData = data.faq;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-md:px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-4">
            <span className="text-[#E6AF1C]">Frequently </span>
            <span className="text-[#0A1A3A] font-semibold">Asked Questions</span>
          </h2>
          <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px]">
            {faqData.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-1">
          {faqData.faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200"
            >
              <button
                className="w-full px-4 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[#0A1A3A] text-[16px] lg:text-[18px] font-medium pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <div className="w-6 h-6 rounded-full border-2 border-[#E6AF1C] flex items-center justify-center">
                      <FontAwesomeIcon icon={faMinus} className="text-[#E6AF1C] text-sm" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-[#E6AF1C] flex items-center justify-center">
                      <FontAwesomeIcon icon={faPlus} className="text-[#E6AF1C] text-sm" />
                    </div>
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-6 pt-0">
                  <p className="text-[#575455] text-[14px] lg:text-[16px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
