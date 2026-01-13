import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface BlogDetailProps {
    title: string;
    subtitle: string;
    date: string;
    image: string;
    content: {
        section: string;
        text: string;
    }[];
}

const BlogDetail = ({ title, subtitle, date, image, content }: BlogDetailProps) => {
    return (
        <section className="container mx-auto py-16">
            {/* Title and Date */}
            <div className="mb-8">
                <h1 className="text-[26px] lg:text-[32px] text-[#0A1A3A] mb-4">
                    {title}
                </h1>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <p className="text-[#575455] text-[18px] lg:text-[20px]">{subtitle}</p>
                    <div className="flex items-center justify-end mt-[26px] lg:mt-0 gap-3">
                        <span className="text-[#575455] text-[20px]">{date}</span>
                        <button className="w-10 h-10 rounded-full bg-[#E6AF1C] flex items-center justify-center hover:bg-[#d49e15] transition-colors">
                            <FontAwesomeIcon icon={faDownload} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Content and Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
                {/* Left Column - Content */}
                <div className="lg:col-span-4">
                    <div className="lg:hidden h-fit py-[40px]">
                        <img
                            src={image}
                            alt={title}
                            className="w-full rounded-[20px]"
                        />
                    </div>
                    {content.slice(0, 3).map((item, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-3">
                                {item.section}
                            </h3>
                            <p className="text-[#575455] text-[16px] leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Column - Image */}
                <div className="lg:col-span-3 lg:sticky lg:top-24 h-fit hidden lg:block">
                    <img
                        src={image}
                        alt={title}
                        className="w-full rounded-[20px]"
                    />
                </div>
            </div>

            {/* Remaining Content */}
            <div className="">
                {content.slice(3).map((item, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-3">
                            {item.section}
                        </h3>
                        <p className="text-[#575455] text-[16px] leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogDetail;
