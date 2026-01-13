const AboutSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-6">
                            <span className="text-gray-700">About </span>
                            <span className="text-[#E6AF1C] font-semibold">Finyser Assets</span>
                        </h2>
                        <p className="text-gray-600 text-[14px] lg:text-[16px] mb-4 leading-relaxed">
                            Started in 2018, Finyser Assets is the premier destination for wealth management, guiding our clients toward financial prosperity and security. Our goal is to surpass your expectations and maximize your returns with our personalized wealth management programs.
                        </p>
                        <p className="text-gray-600 text-[14px] lg:text-[16px] mb-6 leading-relaxed">
                            We are committed to empowering finance professionals by providing NISM training to those aspiring to become mutual fund distributors, ensuring they have the knowledge and skills required for success in this field.
                        </p>
                        <div className="flex">
                            <div className="text-left">
                                <p className="text-[26px] lg:text-[32px] xl:text-[32px] text-[#E6AF1C] mb-2">50k +</p>
                                <p className="text-[16px] text-[#090914] font-medium">Trusted Client</p>
                            </div>
                            <div className="text-left border-l border-[#D9D9D9] pl-16 ml-16 lg:pl-24 lg:ml-24">
                                <p className="text-[26px] lg:text-[32px] xl:text-[32px] text-[#E6AF1C] mb-2">2.2L +</p>
                                <p className="text-[16px] text-[#090914] font-medium">Investor Base</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/about-finyzer.avif"
                            alt="Team working"
                            className="rounded-[50px] w-full h-[240px] lg:h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
