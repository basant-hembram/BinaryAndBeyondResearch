import { data } from '../../data';

const AboutSection = () => {
    const aboutData = data.about;

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container max-md:px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-6">
                            <span className="text-gray-700">About </span>
                            <span className="text-[#E6AF1C] font-semibold">Finyser Assets</span>
                        </h2>
                        {aboutData.description.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 text-[14px] lg:text-[16px] mb-4 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                        <div className="flex">
                            {aboutData.stats.map((stat, index) => (
                                <div key={index} className={`text-left ${index > 0 ? 'border-l border-[#D9D9D9] pl-16 ml-16 lg:pl-24 lg:ml-24' : ''}`}>
                                    <p className="text-[26px] lg:text-[32px] xl:text-[32px] text-[#E6AF1C] mb-2">{stat.value}</p>
                                    <p className="text-[16px] text-[#090914] font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            src={aboutData.image.src}
                            alt={aboutData.image.alt}
                            className="rounded-[50px] w-full h-[240px] lg:h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
