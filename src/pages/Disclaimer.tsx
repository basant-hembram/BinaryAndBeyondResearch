import Banner from '../components/common/Banner';
const Disclaimer = () => {
    return (
        <div className="bg-white">
            <Banner
                title="Disclaimer"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Disclaimer', path: '/disclaimer' }
                ]}
                backgroundImage="/images/terms-banner.jpg"
            />

            {/* Content Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="">
                    <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-8">
                        <span className="text-[#E6AF1C] font-semibold">Disclaimer</span>
                    </h2>

                    {/* Our Commitment */}
                    <div className="mb-8">
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            By accessing this website and/or App or any of its associate/group sites ("Website"), you have read, understood and agree to be legally bound by the terms of the following disclaimer and user agreement.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets Fintech Services Private Limited ("Finyzer Assets") is engaged in providing financial and related services in India. Finyzer Assets and its sub-distributors are mutual fund distributors registered with AMFI. In accordance with the applicable laws, Finyzer Assets and its sub-distributors are permitted to only render incidental advice with respect to mutual fund products only to its mutual fund distribution client. For every other purpose, including distribution of non-mutual fund products, all material displayed on the Website is for informational purposes only. Further, it is not intended as investment advice or an opinion concerning securities or a public offer proving a basis for an investment decision.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            No material /information contained on the Website constitutes or shall be interpreted as investment advice, offer, solicitation or advertisement with respect to the purchase or sale of or to deal with any security and no part of it shall form the basis of or be relied upon in connection with any contract or commitment whatsoever.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets has taken due care and caution in the compilation of the data and the contents for its Website and Online Desks. However, Finyzer Assets does not guarantee the suitability, accuracy, adequacy or completeness of any information and is not responsible for any errors or omissions or for the results obtained from the use of such information. Finyzer Assets specifically states that it cannot be held liable for any damages (monetary, legal or otherwise) caused by any error, omission, interruption, deletion, defect, failure, and that it has no financial liability whatsoever to any user on account of the use of the information provided on its Website. Finyzer Assets does not provide any warranties (whether expressed or implied), as to the quality, accuracy, efficacy, completeness, performance, fitness or any of the contents of the Website, including (but not limited) to any comments, feedback and advertisements contained within the Website.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets strongly recommends its users to verify the veracity /appropriateness of the information before making any decisions. The information on this Website is updated from time to time. Finyzer Assets is also not responsible for any errors, omissions or representations on any of its pages or on any links on any of its pages. Finyzer Assets does not endorse in any way any advertisers on its web pages. This Website contains articles contributed by individuals. The views are exclusively their own and do not necessarily represent the views of the Website owners or its management. The linked sites are not under Finyzer Assets’s control and Finyzer Assets is not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. Finyzer Assets is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Finyzer Assets or the Website.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets hereby expressly disclaims any implied warranties imputed by the laws of any jurisdiction. Finyzer Assets considers itself and intends to be governed by the exclusive jurisdiction of the courts of Kolkata City in India. If you don't agree with any of the disclaimers above, please do not read the material on any of the pages and exit the Website immediately. This Website is specifically for users in the territory of India. Although access to users outside India is not denied, Finyzer Assets shall have no legal liabilities whatsoever in any laws of any jurisdiction other than India. Finyzer Assets reserves the right to make changes to its Website, including but not limited to the Terms of Use, Disclaimers and Privacy Policy contained herein.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed">
                            Past Performance Is Not Indicative of Future Returns. Mutual Fund investments are subject to market risks. Read all Scheme related documents carefully before investing.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
