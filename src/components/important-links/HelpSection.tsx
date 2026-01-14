import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { data } from '../../data';

interface HelpSectionProps {
    onCallClick?: () => void;
    onWhatsAppClick?: () => void;
}

const HelpSection: React.FC<HelpSectionProps> = ({
    onCallClick,
    onWhatsAppClick
}) => {
    const { helpSection } = data.importantLinks;
    const {
        title = helpSection.title,
        subtitle = helpSection.subtitle,
        description = helpSection.description,
        callButtonText = helpSection.callButtonText,
        whatsappButtonText = helpSection.whatsappButtonText
    } = helpSection;
    return (
        <div className="bg-gray-50 py-12">
            <div className="container max-md:px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h3 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-4">
                            {title} - <br className='lg:hidden'></br><span className="text-[#E6AF1C] font-semibold">{subtitle}</span>
                        </h3>
                        <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px] max-w-lg">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[36px] items-center flex-shrink-0">
                        <button 
                            onClick={onCallClick}
                            className="bg-[#E6AF1C] hover:bg-[#d49e16] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
                        >
                            <FontAwesomeIcon icon={faPhone} /> {callButtonText}
                        </button>
                        <div className='bg-[#C4C4C4] w-[94px] h-[1px] xl:w-[1px] xl:h-[94px]'></div>
                        <button 
                            onClick={onWhatsAppClick}
                            className="bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} /> {whatsappButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;