import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time. We offer flexible plans to suit your needs."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time. We offer a hassle-free cancellation process."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices as needed."
    },
    {
      question: "How does billing work?",
      answer: "We bill on a monthly or annual basis depending on your chosen plan."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email from your account settings page."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-4">
            <span className="text-[#E6AF1C]">Frequently </span>
            <span className="text-[#0A1A3A] font-semibold">Asked Questions</span>
          </h2>
          <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px]">
            Everything you need to know about the Finyzer Assets.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-1">
          {faqs.map((faq, index) => (
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
