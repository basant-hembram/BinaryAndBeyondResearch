import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faSackDollar, faHandshake, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

interface Benefit {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: faBullseye,
    title: 'Achieve Your Financial Goals',
    description: 'Our wealth management services are designed to help you achieve your specific financial goals, whether it\'s saving for retirement, funding education, buying a home, or growing your wealth',
    color: 'bg-[#E6AF1C]'
  },
  {
    icon: faSackDollar,
    title: 'Optimal Returns',
    description: 'Benefit from our team\'s expertise in crafting personalized investment strategies tailored to your unique goals and risk profile. Maximize your returns while managing risk effectively.',
    color: 'bg-[#E6AF1C]'
  },
  {
    icon: faHandshake,
    title: 'Stronger Relationships',
    description: 'Our wealth managers prioritize building lasting relationships with clients. Enjoy personalized attention, open communication,',
    color: 'bg-[#E6AF1C]'
  },
  {
    icon: faMoneyBillTransfer,
    title: 'One Platform For All',
    description: 'Enjoy seamless & easy access to comprehensive suite of wealth management services through our intuitive website. Experience the convenience of managing your finances on the go & track all.',
    color: 'bg-[#E6AF1C]'
  }
];

const ServiceBenefits = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-[38px]">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <h2 className="text-[26px] lg:text-[36px] text-[#0A1A3A]">
              Why Choose Us
            </h2>
            <h3 className="text-[26px] lg:text-[36px] font-semibold mb-[38px]">
              <span className="text-[#E6AF1C]">Your Trusted</span>
              <br className='hidden lg:hidden xl:block'></br>
              <span className="text-[#E6AF1C]">Partner to Rely On</span>
            </h3>
            <p className="text-[#575455] text-[16px] lg:text-[18px] leading-[32px]">
              Our commitment to excellence, cutting-edge technology, and personalized support ensures that you have a reliable ally in navigating the complexities of the financial world.
            </p>
          </div>

          {/* Right Benefits Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row gap-4"
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center`}>
                      <FontAwesomeIcon icon={benefit.icon} className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[20px] mb-[12px] text-[#0A1A3A]">{benefit.title}</h4>
                      <p className="text-[#575455] text-[16px] lg:text-[18px] leading-[32px]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits;
