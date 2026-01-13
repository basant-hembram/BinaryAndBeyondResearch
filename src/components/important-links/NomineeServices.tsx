import React from 'react';

const NomineeServices: React.FC = () => {
    return (
        <div className="bg-[#E9E9EB] py-[38px]">
            <div className="container mx-auto">
                <h3 className="text-[20px] font-semibold text-[#01A382] mb-4">Nominee & Pan Services</h3>

                <p className="text-[#575455] text-[16px] lg:text-[18px] mb-4">Nominee update and pan and aadhar linking</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] lg:gap-[46px]">
                    <div>
                        <p className="text-[#575455] text-[16px] lg:text-[20px] mb-2">NOMINEE UPDATATION KFINTECH</p>
                        <a
                            href="https://www.mfs.kfintech.com/investor/General/NomineeUpdation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E6AF1C] hover:text-orange-600 underline text-[16px] lg:text-[20px] break-all"
                        >
                            www.mfs.kfintech.com/investor/General/NomineeUpdation
                        </a>
                    </div>

                    <div>
                        <p className="text-[#575455] text-[16px] lg:text-[20px] mb-2">PAN-AADHAR LINK VERIFICATION</p>
                        <a
                            href="https://www.camstar.com/pan_aadharlink.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E6AF1C] hover:text-orange-600 underline text-[16px] lg:text-[20px] break-all"
                        >
                            www.camstar.com/pan_aadharlink.aspx
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NomineeServices;