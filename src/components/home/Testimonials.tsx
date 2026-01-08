import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from '../common/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ankita Jain",
      role: "Co-Founder of Womenia",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      image: "/images/ankita-jain.png"
    },
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      image: "/images/rahul-sharma.png"
    },
    {
      name: "Ankita Jain",
      role: "Co-Founder of Womenia",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      image: "/images/ankita-jain.png"
    },
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      image: "/images/rahul-sharma.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#E9E9EB] relative overflow-hidden">
       {/* Top Left Circle */}
      <img
        src="/images/top-left-circle.png"
        alt=""
        className="absolute left-0 top-0 w-64 h-64 pointer-events-none"
      />

      {/* Bottom Right Circle */}
      <img
        src="/images/bottom-right-circle.png"
        alt=""
        className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-4">
            <span className="text-[#E6AF1C]">Don't Just </span>
            <span className="text-[#0A1A3A] font-semibold ">Take Our Words</span>
          </h2>
          <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px]">
            Everything you need to know about the Finyzer Assets.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet w-4 !h-2 !rounded-full',
            bulletActiveClass: 'swiper-pagination-bullet-active !w-8 !bg-[#CA8A00]'
          }}
          breakpoints={{
            768: {
              slidesPerView: 2
            }
          }}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
