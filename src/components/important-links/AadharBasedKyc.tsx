import React from 'react';
import { data } from '../../data';

const AadharBasedKyc: React.FC = () => {
    const { aadharBasedKyc } = data.importantLinks;

    return (
        <div className="py-[38px]">
            <div className="container mx-auto">
                <h3 className="text-[20px] font-semibold text-[#01A382] mb-4">{aadharBasedKyc.title}</h3>
                {aadharBasedKyc.links.map((link, index) => (
                    <div key={index}>
                        <p className="text-[#575455] text-[16px] lg:text-[20px] mb-2">{link.label}</p>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E6AF1C] hover:text-orange-600 underline text-[16px] lg:text-[20px] break-all"
                        >
                            {link.displayUrl}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AadharBasedKyc;