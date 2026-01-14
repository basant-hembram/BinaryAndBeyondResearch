import Banner from '../components/common/Banner';
import { data } from '../data';

const Disclaimer = () => {
    const disclaimerData = data.disclaimer;

    return (
        <div className="bg-white">
            <Banner
                title={disclaimerData.title}
                breadcrumbs={disclaimerData.breadcrumbs}
                backgroundImage={disclaimerData.backgroundImage}
            />

            {/* Content Section */}
            <section className="container mx-auto py-16">
                <div className="">
                    <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-8">
                        <span className="text-[#E6AF1C] font-semibold">{disclaimerData.titleHighlight}</span>
                    </h2>

                    {/* Sections */}
                    {disclaimerData.sections.map((section) => (
                        <div key={section.id} className="mb-8">
                            <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-4">{section.title}</h3>
                            {section.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-[#575455] text-[16px] leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
