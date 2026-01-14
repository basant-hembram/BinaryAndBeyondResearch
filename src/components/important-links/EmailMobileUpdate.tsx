import React from 'react';
import { data } from '../../data';

const EmailMobileUpdate: React.FC = () => {
    const { emailMobileUpdate } = data.importantLinks;

    return (
        <div className="py-[38px]">
            <div className="container mx-auto">
                <h3 className="text-[20px] font-semibold text-[#01A382] mb-4">{emailMobileUpdate.title}</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px] lg:gap-[46px]">
                    {emailMobileUpdate.columns.map((column, colIndex) => (
                        <div key={colIndex} className="space-y-[22px] space-y-lg-[32px]">
                            {column.links.map((link, linkIndex) => (
                                <div key={linkIndex}>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmailMobileUpdate;