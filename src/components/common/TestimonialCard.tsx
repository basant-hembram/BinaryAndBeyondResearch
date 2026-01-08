import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  text,
  image
}) => {
  return (
    <div className="flex flex-row gap-6 items-start lg:items-center px-2">
      <img 
        src={image}
        alt={name}
        className="w-[136px] h-[136px] lg:w-[180px] lg:h-[180px] xl:w-[239px] xl:h-[239px] rounded-[15px] object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[#090914] font-light mb-[10px] xl:mb-[20px] leading-relaxed text-[14px] lg:text-[16px] xl:text-[18px]">
          "{text}"
        </p>
        <div className="flex flex-col xl:flex-row gap-2">
          <h4 className="font-semibold text-[#E6AF1C] text-[14px] lg:text-[16px] xl:text-[18px]">{name}</h4>
          <p className="text-[#575455] text-[14px] lg:text-[16px] xl:text-[18px]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;