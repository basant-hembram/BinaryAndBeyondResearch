import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Q.What is Mutual fund Investing?",
      answer: "Mutual fund is an investment vehicle where multiple investors pool their money to invest in diversified securities like stocks, bonds, and other assets. It's managed by professional fund managers who make investment decisions on behalf of investors."
    },
    {
      question: "Can I change my plan when?",
      answer: "Yes, you can change your investment plan at any time. You can switch between different mutual fund schemes, increase or decrease your SIP amount, or even pause your investments temporarily based on your financial needs."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your SIP or redeem your mutual fund investments at any time. For equity funds, we recommend staying invested for at least 3-5 years for optimal returns. Exit loads may apply if you redeem within a specified period as per the fund's terms."
    },
    {
      question: "How does billing work?",
      answer: "We don't charge any advisory fees for mutual fund investments. The fund houses charge a small expense ratio (typically 0.5% - 2.5% annually) which is already included in the NAV. Your SIP amount is automatically debited from your bank account on your chosen date each month."
    },
    {
      question: "How do I change the discount group?",
      answer: "Different mutual fund schemes have different expense ratios and features. You can switch between regular and direct plans. Direct plans have lower expense ratios as they don't involve distributor commissions. We can help you choose the best option for your investment goals."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A3A] mb-4">
            <span className="text-[#E6AF1C]">Asked Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services and investments
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#E6AF1C] transition-all overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#0A1A3A] pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-[#E6AF1C]" size={24} />
                  ) : (
                    <Plus className="text-[#0A1A3A]" size={24} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-[#0A1A3A] to-[#162d52] rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <button className="bg-[#E6AF1C] text-white px-8 py-3 rounded-lg hover:bg-[#D19F18] font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
