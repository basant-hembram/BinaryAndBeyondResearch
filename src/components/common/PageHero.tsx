interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="pt-12 pb-6 bg-white">
      <div className="container max-md:px-4 mx-auto">
        <h1
          className="text-[48px] lg:text-[56px] xl:text-[70px] font-normal text-[#151D26] mb-2 leading-tight"
          data-gsap="fade-left"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#151D26] text-[15px] lg:text-[18px]" data-gsap="fade-up">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
