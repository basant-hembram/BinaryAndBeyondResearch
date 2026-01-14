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
import { data } from '../../data';

const iconMap: Record<string, IconDefinition> = {
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
    faUserGraduate
};

const ServiceContent = () => {
    const { serviceCategories, serviceContent } = data.services;
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
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

    const currentContent = serviceContent[selectedService as keyof typeof serviceContent] || serviceContent['mutual-fund'];

    return (
        <div className="py-16 bg-[#E9E9EB]">
            <div className="container max-md:px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3">
                        <div className="bg-[#0A1A3A] overflow-hidden">
                            {serviceCategories.map((category) => (
                                <div key={category.id} className={`border-b border-white last:border-b-0  border-r-4 ${
                                            (selectedService === category.id && !category.items) || (expandedCategories.includes(category.id) && category.expandable) 
                                                ? 'text-[#E6AF1C] border-r-[#E6AF1C]' 
                                                : 'text-white border-r-transparent'
                                            }`}>
                                    <button
                                        onClick={() => {
                                            if (category.expandable) {
                                                toggleCategory(category.id);
                                            }
                                            if (!category.items) {
                                                handleServiceClick(category.id);
                                            }
                                        }}
                                        className={`w-full px-6 py-4 flex items-center justify-between text-left hover:text-[#E6AF1C] transition-colors relative ${
                                            (selectedService === category.id && !category.items) || (expandedCategories.includes(category.id) && category.expandable) 
                                                ? 'text-[#E6AF1C]' 
                                                : 'text-white'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={iconMap[category.icon]} className={expandedCategories.includes(category.id) && category.expandable ? "text-[#E6AF1C]" : ""} />
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
                                                    <FontAwesomeIcon icon={iconMap[item.icon]} className="w-4 h-4" />
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
                                {currentContent.description.map((paragraph: string, index: number) => (
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
