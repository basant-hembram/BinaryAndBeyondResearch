import React from 'react';
import Banner from '../components/common/Banner';
import { Card, CardContent } from '../components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { data } from '../data';

const Team: React.FC = () => {
    const teamData = data.team;

    return (
        <div className="bg-white">
            <Banner
                title={teamData.title}
                breadcrumbs={teamData.breadcrumbs}
                backgroundImage={teamData.backgroundImage}
            />
            <section className="py-16 md:py-24 bg-[#E9E9EB]">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-4">
                            <span className="text-gray-700">{teamData.sectionTitle} </span>
                            <span className="text-[#E6AF1C] font-semibold">{teamData.sectionTitleHighlight}</span>
                        </h2>
                        <p className="text-[#575455] text-[16px] lg:text-[18px] max-w-3xl mx-auto">
                            {teamData.sectionDescription}
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-6">
                        {teamData.founders.map((founder) => (
                            <Card
                                key={founder.id}
                                className="overflow-hidden group"
                            >
                                <div className="aspect-[1/1] lg:aspect-[1/1] xl:aspect-[1/1] overflow-hidden">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover rounded-[20px]"
                                    />
                                </div>
                                <CardContent className="">
                                    <h4 className="font-semibold text-[20px] text-[#0A1A3A] mb-1">
                                        {founder.name}
                                    </h4>
                                    <p className="text-[#E6AF1C] text-[18px] mb-3">{founder.role}</p>

                                    <div className="flex justify-start gap-3">
                                        <a
                                            href={founder.social.twitter}
                                            className="text-[#98A2B3] text-[24px] transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a
                                            href={founder.social.linkedin}
                                            className="text-[#98A2B3] text-[24px] transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                        <a
                                            href={founder.social.dribbble}
                                            className="text-[#98A2B3] text-[24px] transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faDribbble} />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;