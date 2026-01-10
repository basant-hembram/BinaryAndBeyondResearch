import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const BlogCard = ({ image, date, title, description, link }: BlogCardProps) => {
  return (
    <div className="bg-white flex flex-col xl:flex-row gap-[24px] rounded-lg border border-[#E9EFFF] rounded-[10px] p-[15px] overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-[15px]" />
      <div className="">
        <p className="text-[#E6AF1C] text-[14px] font-semibold mb-2">{date}</p>
        <h3 className="text-[18px] font-semibold text-[#0A1A3A] mb-3">{title}</h3>
        <p className="text-[#575455] text-[14px] mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <a 
            href={link}
            className="inline-flex text-[14px] items-center gap-2 bg-[#01A382] hover:bg-[#018f72] text-white px-4 py-2 rounded-[5px] transition-colors"
          >
            Learn More
          </a>
          <div className="w-10 h-10 rounded-full bg-[#E6AF1C] flex items-center justify-center">
            <FontAwesomeIcon icon={faDownload} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
