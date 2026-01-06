import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const offerings = [
  { icon: '💎', title: 'Personalized Mutual Funds' },
  { icon: '💰', title: 'Pre-Planned Schemes' },
  { icon: '📈', title: 'Goal Based Investments' },
  { icon: '🎯', title: 'Expert Redemption' },
  { icon: '📊', title: 'Lowest Expenses' },
  { icon: '💼', title: 'Strong Investment Strategy' },
];

const OfferingsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 text-center">
        Offerings
      </h2>
      <p className="text-xl text-[#E6AF1C] font-semibold mb-8 text-center">
        For Your Clients
      </p>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Our commitment to providing a unified service across multiple brands
        gives you a sense that you are dealing with a professional who genuinely
        understands you. We have a flexible way to navigating the complexities
        of the financial world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl">{offering.icon}</div>
            <h3 className="font-semibold text-gray-900">{offering.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button className="bg-[#01A382] hover:bg-[#018f72] text-white">
          Know more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default OfferingsSection;
