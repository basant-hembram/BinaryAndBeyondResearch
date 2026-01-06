import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const benefits = [
  { icon: '💰', title: 'Earn a recurring income', description: 'Steady income for investors, others' },
  { icon: '🤝', title: 'Support & Mentorship/resources', description: 'Get the tools that let you work' },
  { icon: '📊', title: 'Cushion-least business/cost', description: 'Single point of contact' },
  { icon: '🎯', title: 'Getting Edge Returns', description: 'Online onboarding and training' },
  { icon: '📱', title: 'Platform Available', description: 'We & Apps (both iOS)' },
  { icon: '📦', title: 'Ancillary products', description: 'Health insurance, mutual fund, insurance, prime, term against securities, etc' },
  { icon: '💼', title: 'One person online and offline support', description: 'Helping businesses familiarize language' },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
          Benefits Of <span className="text-[#E6AF1C]">Partnering With Us</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Explanations</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white">
            Become Distributor <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
