import { data } from '@/data';

export default function CareerContent() {
    const careerData = (data as any).career;
    const hero = careerData?.hero;
    const application = careerData?.application;
    const form = careerData?.form;

    return (
        <section className="relative overflow-hidden py-8 md:py-10 lg:py-12">
            <div
                className="pointer-events-none absolute right-0 top-8 h-[280px] w-[280px] rounded-full blur-3xl md:h-[380px] md:w-[380px]"
                style={{ background: 'radial-gradient(circle, rgba(163,39,135,0.28) 0%, rgba(163,39,135,0) 72%)' }}
            />

            <div className="container max-md:px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-[#151D26] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.3] tracking-[-0.02em]" data-gsap="fade-up">
                        {hero?.title}
                    </h1>
                    <p className="mt-6 text-[#2A2A2A] text-[15px] md:text-[18px] leading-[1.8]" data-gsap="fade-up">
                        {hero?.description}
                    </p>
                </div>

                <div className="mt-10 md:mt-14 w-full" data-gsap="scale-up">
                    <img
                        src="/images/careers-banner.png"
                        alt="Our team"
                        className="w-full object-contain"
                    />
                </div>

                <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                    <div>
                        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px] font-semibold" data-gsap="fade-right">
                            {application?.title} <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold" data-gsap="gradient-shine">{application?.titleHighlight}</span>
                        </h2>

                        <p className="mt-4 text-[#151D26] text-[14px] lg:text-[18px] leading-relaxed" data-gsap="fade-right">
                            {application?.descriptionLine1}
                        </p>
                        <p className="mt-4 text-[#151D26] text-[14px] lg:text-[18px] leading-relaxed" data-gsap="fade-right">
                            {application?.descriptionLine2}
                        </p>

                        <div className="mt-8 overflow-hidden rounded-2xl" data-gsap="scale-up">
                            <img
                                src={application?.image}
                                alt={application?.title}
                                className="h-[240px] md:h-[290px] w-full object-cover"
                            />
                        </div>
                    </div>

                    <div data-gsap="fade-left">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.fullName?.label}</label>
                                <input
                                    type="text"
                                    placeholder={form?.fields?.fullName?.placeholder}
                                    className="w-full h-[48px] rounded-md border border-[#C9BEB0] bg-transparent px-4 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.email?.label}</label>
                                <input
                                    type="email"
                                    placeholder={form?.fields?.email?.placeholder}
                                    className="w-full h-[48px] rounded-md border border-[#C9BEB0] bg-transparent px-4 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.phone?.label}</label>
                                <div className="w-full h-[48px] rounded-md border border-[#C9BEB0] px-3 flex items-center gap-2 text-[14px]">
                                    <span className="text-[#4A4A4A] shrink-0 pr-2 border-r border-[#C9BEB0]">{form?.fields?.phone?.code} ▾</span>
                                    <input
                                        type="tel"
                                        placeholder={form?.fields?.phone?.placeholder}
                                        className="flex-1 h-full bg-transparent text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.resume?.label}</label>
                                <div className="h-[108px] rounded-md border border-dashed border-[#C9BEB0] flex flex-col items-center justify-center text-center px-4">
                                    <button type="button" className="text-[#151D26] text-[14px] font-medium">
                                        {form?.fields?.resume?.buttonText}
                                    </button>
                                    <p className="text-[11px] text-[#7E7E7E] mt-1">{form?.fields?.resume?.note}</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.message?.label}</label>
                                <textarea
                                    placeholder={form?.fields?.message?.placeholder}
                                    className="w-full h-[120px] rounded-md border border-[#C9BEB0] bg-transparent px-4 py-3 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none resize-none"
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full h-[48px] rounded-md bg-[#4D3D84] text-white text-[16px] font-medium"
                            >
                                {form?.submitText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
