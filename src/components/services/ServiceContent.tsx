import { useState } from 'react';
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faChevronDown,
    faChevronUp,
    faHandHoldingDollar,
    faCalendarCheck,
    faPiggyBank,
    faSackDollar,
    faMagnifyingGlassDollar,
    faBullseye,
    faHeartPulse,
    faBriefcaseMedical,
    faCarBurst,
    faUserInjured,
    faPeopleRoof,
    faCoins,
    faPersonCane,
    faBuildingColumns,
    faUserGraduate,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';

interface ServiceCategory {
    id: string;
    name: string;
    icon: IconDefinition;
    items?: { name: string; id: string; icon: IconDefinition }[];
    expandable?: boolean;
}

const serviceCategories: ServiceCategory[] = [
    {
        id: 'mutual-fund',
        name: 'Mutual fund',
        icon: faHandHoldingDollar,
        expandable: true,
        items: [
            { name: 'Sip planning', id: 'sip-planning', icon: faCalendarCheck },
            { name: 'Tax Saving', id: 'tax-saving', icon: faPiggyBank },
            { name: 'Lumpsum Investment', id: 'lumpsum-investment', icon: faSackDollar },
            { name: 'Portfolio Review', id: 'portfolio-review', icon: faMagnifyingGlassDollar },
            { name: 'Goal based investing', id: 'goal-based-investing', icon: faBullseye }
        ]
    },
    {
        id: 'insurance',
        name: 'Insurance',
        icon: faHeartPulse,
        expandable: true,
        items: [
            { name: 'Health Insurance', id: 'health-insurance', icon: faBriefcaseMedical },
            { name: 'Motor Insurance', id: 'motor-insurance', icon: faCarBurst },
            { name: 'Life Insurance', id: 'life-insurance', icon: faUserInjured },
            { name: 'Term Insurance', id: 'term-insurance', icon: faPeopleRoof }
        ]
    },
    {
        id: 'loan-against-securities',
        name: 'Loan against securities',
        icon: faCoins,
        expandable: false
    },
    {
        id: 'corporate-fd',
        name: 'Corporate FD',
        icon: faBriefcaseMedical,
        expandable: false
    },
    {
        id: 'retirement-planning',
        name: 'Retirement Planning',
        icon: faPersonCane,
        expandable: false
    },
    {
        id: 'corporate-fd-2',
        name: 'Corporate FD',
        icon: faBuildingColumns,
        expandable: false
    },
    {
        id: 'child-education',
        name: 'Child Education Planning',
        icon: faUserGraduate,
        expandable: false
    }
];

const serviceContent: Record<string, { title: string; description: string[] }> = {
    'mutual-fund': {
        title: 'Mutual Fund',
        description: [
            'Welcome to the gateway of financial prosperity! Dive into the realm of mutual funds where your dreams meet opportunity. Our curated selection of mutual funds isn\'t just about investing; it\'s about crafting your future.',
            'Whether you\'re a seasoned investor or just starting your journey towards wealth creation, our platform is your compass. Let\'s embark together on a path of growth, security, and limitless possibilities. Start investing, start thriving.',
            'Welcome to a realm where investment isn\'t just about numbers; it\'s about narratives. At our mutual fund company, we don\'t just offer opportunities; we curate stories of success, weaving together the threads of innovation, expertise, and vision. Invest with us, and you\'re not just investing in funds; you\'re investing in a partnership dedicated to sculpting your financial legacy.',
            'Join us, where your aspirations meet our commitment to redefine the very fabric of wealth creation.'
        ]
    },
    'sip-planning': {
        title: 'SIP Planning',
        description: [
            'Systematic Investment Plan (SIP) is a smart way to invest in mutual funds. It allows you to invest a fixed amount regularly, helping you build wealth over time through the power of compounding.',
            'Our SIP planning services help you choose the right funds based on your financial goals, risk appetite, and investment horizon. Start your journey towards financial freedom with disciplined investing.'
        ]
    },
    'insurance': {
        title: 'Insurance',
        description: [
            'Protect what matters most with our comprehensive insurance solutions. We offer a wide range of insurance products designed to safeguard your health, life, and assets.',
            'From health insurance to life insurance, motor insurance to term insurance, we provide coverage that gives you peace of mind and financial security for you and your loved ones.'
        ]
    }
};

const ServiceContent = () => {
    const [expandedCategories, setExpandedCategories] = useState<string[]>(['mutual-fund', 'insurance']);
    const [selectedService, setSelectedService] = useState<string>('mutual-fund');

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleServiceClick = (serviceId: string) => {
        setSelectedService(serviceId);
    };

    const currentContent = serviceContent[selectedService] || serviceContent['mutual-fund'];

    return (
        <div className="py-16 bg-[#E9E9EB]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3">
                        <div className="bg-[#0A1A3A] overflow-hidden">
                            {serviceCategories.map((category) => (
                                <div key={category.id} className="border-b border-white last:border-b-0">
                                    <button
                                        onClick={() => {
                                            if (category.expandable) {
                                                toggleCategory(category.id);
                                            }
                                            if (!category.items) {
                                                handleServiceClick(category.id);
                                            }
                                        }}
                                        className={`w-full px-6 py-4 flex items-center justify-between text-left hover:text-[#E6AF1C] transition-colors relative ${selectedService === category.id && !category.items ? 'text-[#E6AF1C]' : 'text-white'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={category.icon} className={expandedCategories.includes(category.id) && category.expandable ? "text-[#E6AF1C]" : ""} />
                                            <span className={expandedCategories.includes(category.id) && category.expandable ? "text-[#E6AF1C] font-medium" : "font-medium"}>{category.name}</span>
                                        </div>
                                        {category.expandable && (
                                            <span className={expandedCategories.includes(category.id) ? "text-[#E6AF1C]" : ""}>
                                                {expandedCategories.includes(category.id) ? (
                                                    <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4" />
                                                ) : (
                                                    <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                                                )}
                                            </span>
                                        )}
                                    </button>

                                    {/* Sub-items */}
                                    {category.items && expandedCategories.includes(category.id) && (
                                        <div className="border-l border-[#E6AF1C] ml-[30px] mb-[14px]">
                                            {category.items.map((item) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => handleServiceClick(item.id)}
                                                    className={`border-t border-[#E6AF1C] first:border-t-0 w-full px-6 py-[14px] flex items-center gap-3 text-left text-white hover:text-[#E6AF1C] transition-colors ${selectedService === item.id ? 'text-[#E6AF1C]' : ''
                                                        }`}
                                                >
                                                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                                                    <span className="">{item.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-9">
                        <div className="bg-white rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] p-8 lg:p-12">
                            <h2 className="text-[28px] text-[#0A1A3A] mb-[20px]">
                                Mutual <span className="text-[#E6AF1C] font-semibold">Fund</span>
                            </h2>

                            <div className="space-y-[20px] text-[#575455] leading-[32px]">
                                {currentContent.description.map((paragraph, index) => (
                                    <p className='text-[18px]' key={index}>{paragraph}</p>
                                ))}
                            </div>

                            <Button size="lg" className="text-base flex items-center gap-2 mt-[20px]">
                                Enquiry Now
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContent;
