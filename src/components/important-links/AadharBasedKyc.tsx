import React from 'react';

const AadharBasedKyc: React.FC = () => {
    return (
        <div className="py-[38px]">
            <div className="container mx-auto">
                <h3 className="text-[20px] font-semibold text-[#01A382] mb-4">Aadhar Based KYC</h3>
                <div>
                    <p className="text-[#575455] text-[16px] lg:text-[20px] mb-2">KYC Validation Aadhar CVL:</p>
                    <a
                        href="https://www.validate.cvlindia.com/CVLKRAVerification_V1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E6AF1C] hover:text-orange-600 underline text-[16px] lg:text-[20px] break-all"
                    >
                        www.validate.cvlindia.com/CVLKRAVerification_V1/
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AadharBasedKyc;