import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
}

const Banner = ({ title, breadcrumbs, backgroundImage }: BannerProps) => {
  return (
    <section 
      className="relative h-[126px] lg:h-[320px] xl:h-[450px] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#0A1A3A]/70"></div>
      <div className="container max-md:px-4 mx-auto relative z-10">
        <h1 
          className="text-white text-[16px] lg:text-[32px] xl:text-[40px] font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="flex items-center gap-2 text-white text-[14px] lg:text-[16px]">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index < breadcrumbs.length - 1 ? (
                <>
                  <Link to={item.path} className="hover:text-[#E6AF1C] transition-colors uppercase">
                    {item.label}
                  </Link>
                  <span>/</span>
                </>
              ) : (
                <span className="text-[#E6AF1C] uppercase">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
