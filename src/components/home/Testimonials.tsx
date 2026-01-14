import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from '../common/TestimonialCard';
import { data } from '../../data';

const { home: homeData } = data;

const Testimonials = () => {
  const { testimonials } = homeData;

  return (
    <section className="py-16 md:py-24 bg-[#E9E9EB] relative overflow-hidden">
       {/* Top Left Circle */}
      <img
        src={testimonials.decorativeImages.topLeft}
        alt=""
        className="absolute left-0 top-0 w-64 h-64 pointer-events-none"
      />

      {/* Bottom Right Circle */}
      <img
        src={testimonials.decorativeImages.bottomRight}
        alt=""
        className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none"
      />
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-4">
            <span className="text-[#E6AF1C]">{testimonials.title} </span>
            <span className="text-[#0A1A3A] font-semibold ">{testimonials.titleHighlight}</span>
          </h2>
          <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px]">
            {testimonials.subtitle}
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
          {testimonials.testimonialsList.map((testimonial, index) => (
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
