import Banner from '../components/common/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white">
            <Banner
                title="Privacy Policy"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Privacy Policy', path: '/privacy-policy' }
                ]}
                backgroundImage="/images/terms-banner.jpg"
            />

            {/* Content Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="">
                    <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-8">
                        Privacy <span className="text-[#E6AF1C] font-semibold">Policy</span>
                    </h2>

                    {/* Our Commitment */}
                    <div className="mb-8">
                        <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-4">Our Commitment</h3>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets Fintech Services Private Limited (Finyzer Assets) is a mutual fund distributor (ARN 130604) registered with AMFI and is also engaged in providing other financial and related services. To enable this, Finyzer Assets would need to complete user’s Know Your Clients (KYC) in accordance with regulatory/government and legal agencies and authorities; your Personal Data may be provided/verified or updated in this process with respective regulatory agencies as per the regulations applicable at that time. This Privacy Policy outlines how Finyzer Assets collects, uses, disclose, and safeguard your data when you use services or interact with Finyzer Assets through the website or any other platforms.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets is governed by the provisions of applicable laws in India including the Information Technology Act, 2000, Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and and Digital Personal Data Protection Act, 2023 and such other rules/regulations (Collectively hereinafter referred to as “Applicable Law(s)”), as amended from time to time, to maintain the privacy of your Personal Data. Finyzer Assets collect and process your Personal Data only to the extent necessary for Finyzer Assets to process your requirement(s) in accordance with such Applicable Laws. In case you choose not to share your Personal Data as required with Finyzer Assets, Finyzer Assets may not be able to provide you the services.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed">
                            Finyzer Assets collects and generates various data points about you. Data by which you are identified is termed as “Personal Data”. Personal Data does not include the Data that is freely available or accessible in the public domain. Your privacy is of utmost importance to Finyzer Assets and the protection of your Personal Data is a key commitment for Finyzer Assets.
                        </p>
                    </div>



                    {/* Personal Data that Finyzer Assets may collect */}
                    <div className="mb-8">
                        <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-4">Information/Personal Data collected by Finyzer Assets</h3>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Personal Data that Finyzer Assets may collect from you includes, but are not limited to, the following
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Personal details (e.g. name, contact details including residential address, date of birth, documents such as identity card/passport details / Aadhaar details / PAN / Voter ID/driving license, and/or education details) provided by you to Finyzer Assets to avail various services from Finyzer Assets. Your details including transaction history, balances, and payment details, for effecting the transfer of money through various payment channels facilitated by Finyzer Assets. Financial details (e.g. income, expenses, net worth, and/or credit history) needed as part of the request for some of Finyzer Assets products/services. Images/videos of documents/photos required to avail any of Finyzer Assets products/services. Voice recordings of conversations with Finyzer Assets customer care agent by you to address your queries/grievances. Risk profile, investment selection, beneficiary and nominee data, etc. Employment details (e.g. occupation, employer name, positions held, employment history, salary, and/or benefits, if any) as part of Finyzer Assets record retention for credit/various product evaluations or as required under applicable law including Prevention of Money Laundering (Maintenance of Records) Rules, 2005. Specimen signature(s) or consent for the processing of your instructions received by Finyzer Assets through Finyzer Assets various payment and delivery channels. Timestamp including IP Address and Geolocation details of the system. Opinions provided by you to Finyzer Assets by way of feedback or responses to surveys.
                        </p>
                        <div className="grid grid-cols-1 gap-[15px]">
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">Personal details (e.g. name, contact details including residential address, date of birth, documents such as identity card/passport details / Aadhaar details /
                                    PAN / Voter ID/driving license, and/or education details) provided by you to Finyzer Assets to avail various services from Finyzer Assets.</p>
                            </div>

                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    Your details including transaction history, balances, and payment details, for effecting the transfer of money through various payment channels facilitated
                                    by Finyzer Assets.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    Financial details (e.g. income, expenses, net worth, and/or credit history) needed as part of the request for some of Finyzer Assets products/services.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    Images/videos of documents/photos required to avail any of Finyzer Assets products/services.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    Voice recordings of conversations with Finyzer Assets customer care agent by you to address your queries/grievances.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    Risk profile, investment selection, beneficiary and nominee data, etc.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    Employment details (e.g. occupation, employer name, positions held, employment history, salary, and/or benefits, if any) as part of Finyzer Assets record
                                    retention for credit/various product evaluations or as required under applicable law including Prevention of Money Laundering (Maintenance of Records)
                                    Rules, 2005.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    Specimen signature(s) or consent for the processing of your instructions received by Finyzer Assets through Finyzer Assets various payment and delivery
                                    channels.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    Timestamp including IP Address and Geolocation details of the system. Opinions provided by you to Finyzer Assets by way of feedback or responses t
                                    surveys.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Usage of Your Personal Data */}
                    <div className="mb-8">
                        <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-4">Usage of Your Personal Data</h3>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Subject to applicable laws, Finyzer Assets may use your Personal Data in a fair and reasonable manner in its business operations for providing its or its partners’ products services and to perform, among other actions, the following:
                        </p>

                        <div className="grid grid-cols-1 gap-[15px]">
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To facilitate the transactions or report on these transactions.</p>
                            </div>

                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To check and process your requests submitted to Finyzer Assets for products/services and/or instructions or requests received from you in respect of these
                                    products/services.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To share with you, updates on changes to the products/services and their terms and conditions.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To provide you with transaction and post-transaction-related services, providing, improving, and marketing our products and services, including site content
                                    and performance; To complete the registration process to access the services and to auto-populate relevant fields in the course of the interface of Finyzer
                                    Assets platform.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To take up or investigate any complaints/claims/disputes. To respond to your queries or feedback submitted by you.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To verify your identity to provide products/services to you.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To carry credit checks, screenings or due diligence checks as lawfully required by Finyzer Assets.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To monitor and review services from time to time. To undertake financial/regulatory/management reporting, and create and maintain various risk
                                    management models.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    For conducting audits and for record-keeping purposes.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    For selective offers and promotions.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    To fulfill the requirements of applicable laws/regulations and/or court orders/public orders/regulatory directives received by Finyzer Assets/protect and defend
                                    the rights or users of Finyzer Assets. For any other matter incidental and associated with the above.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sharing of Personal Data */}
                    <div className="mb-8">
                        <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-4">Sharing of Personal Data</h3>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets may share any Personal Data of users with the following parties, in connection with and as may be necessary for the conduct of Finyzer Assets business/operations:
                        </p>

                        <div className="grid grid-cols-1 gap-[15px] mb-4">
                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    With the Registrar & Transfer Agent/s (RTA) of various Mutual Funds and/or other issuers, clearing corporations, exchanges, depositories, group companies, and
                                    associate entities to facilitate the services, banks, financial institutions, NBFCs, and/or authorized external third parties/intermediaries, cloud services, or any
                                    other service provider who are involved in transaction processing, dispatches, printing/marketing, etc., while providing the service, unless any user specifically
                                    writes to Finyzer Assets to refrain from sharing Personal Data with such parties.</p>
                            </div>

                            <div className="flex items-start gap-2 md:gap-4">
                                <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[16px] mt-1" />
                                <p className="text-[#575455] text-[16px]">
                                    KYC Registration agencies, Central KYC Registry, or any other regulatory/administrative/legislative authority and/or with Finyzer Assets for compliance with any
                                    legal, statutory, or regulatory requirements and/or to verify the identity of users for complying with anti-money laundering/KYC requirements and/or under any
                                    applicable laws for the time being in force and/or for the purpose of data storage.
                                </p>
                            </div>
                        </div>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets shares such aforesaid Personal Data to the aforesaid service providers under strict confidentiality and only on a 'need to know basis' and for the purposes of lawful functioning of Finyzer Assets business/operations. Finyzer Assets sends the account statements or financial information pertaining to the users to be sent over the internet and only through a secure mode.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Finyzer Assets also ensures that the parties to whom such aforesaid Personal Data is shared have confidentiality provisions and high levels of security practices, controls and procedures to ensure its protection.
                        </p>
                        <p className="text-[#575455] text-[16px] leading-relaxed mb-4">
                            Notwithstanding anything contained, Finyzer Assets shall not be responsible/liable, either directly or indirectly, for the authenticity/accuracy of the Personal Data submitted by you and/or for its misuse, not attributable to the acts of Finyzer Assets, at any time and in any manner whatsoever.
                        </p>
                    </div>

                    {/* Other Websites */}
                    <div className="">
                        <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-4">Other Websites</h3>
                        <p className="text-[#575455] text-[16px] leading-relaxed">
                           The Website and its associate/group sites might contain links to other websites. Once you have left the website of Finyzer Assets, you should check the applicable privacy policy of the third party website to determine how they will handle the Personal Data they collect from you. Finyzer Assets is not responsible for the privacy practices followed by such third parties or the content of such third-party websites.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
