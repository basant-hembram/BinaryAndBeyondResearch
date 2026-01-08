import React from 'react';

const KycRelatedServices: React.FC = () => {
    return (
        <div className="bg-[#E9E9EB] py-[38px]">
            <div className="container mx-auto px-4">
                <h3 className="text-[20px] font-semibold text-[#01A382] mb-4">Kyc Related Services</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px] lg:gap-[46px]">
                    <div>
                        <p className="text-[#575455] text-[16px] lg:text-[20px] mb-2">KYC Checking</p>
                        <a
                            href="https://www.cvlkra.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E6AF1C] hover:text-orange-600 underline  text-[16px] lg:text-[20px]"
                        >
                            CVL KRA - © Copyright 2011. All rights reserved with CDSL Ventures Limited, India
                        </a>
                    </div>

                    <div>
                        <p className="text-[#575455] text-[16px] lg:text-[20px] mb-2">KYC Checking:</p>
                        <a
                            href="https://www.cvlkra.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E6AF1C] hover:text-orange-600 underline text-[16px] lg:text-[20px]"
                        >
                            www.cvlkra.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KycRelatedServices;