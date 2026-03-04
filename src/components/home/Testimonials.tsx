'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const { home: homeData } = data;

const Testimonials = () => {
  const { testimonials } = homeData;
  const list = testimonials.testimonialsList;
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-8 md:py-12">
      <div className="container max-md:px-4 mx-auto">
        <div className="bg-[#EBEBEB] rounded-3xl p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div data-gsap="fade-left">
            <p className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold text-[13px] tracking-[0.2em] uppercase mb-4" data-gsap="gradient-shine">
              {testimonials.label}
            </p>
            <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-[#0A1A3A] mb-2">
              {testimonials.title} <br />{testimonials.titleHighlight}
            </h2>
            <p className="text-[#575455] text-[14px] lg:text-[16px] leading-relaxed mb-8">
              {testimonials.subtitle}
            </p>

            {/* Nav Arrows */}
            <div className="flex gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-11 h-11 rounded-full border border-[#403373] flex items-center justify-center text-[#403373] hover:bg-[#403373] hover:text-white transition-colors duration-200"
                aria-label="Previous"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-11 h-11 rounded-full border border-[#403373] flex items-center justify-center text-[#403373] hover:bg-[#403373] hover:text-white transition-colors duration-200"
                aria-label="Next"
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button>
            </div>
          </div>

          {/* Right — Vertical Swiper */}
          <div data-gsap="fade-right" className="relative flex flex-col lg:flex-row gap-3">
          <Swiper
            modules={[Navigation]}
            direction="vertical"
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={600}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full !h-[280px] md:!h-[260px]"
          >
            {list.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-7 shadow-md h-full flex flex-col justify-between">
                  {/* Quote Icon */}
                  <div>
                    <img src="/images/quote.png" alt="quote" className="h-8 w-8 mb-3" />
                    <p className="text-[#0A1A3A] text-[14px] lg:text-[15px] leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>

                  <div>
                    <hr className="border-gray-200 mb-4" />
                    {/* Avatar + Name + Stars */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-[#0A1A3A] text-[14px]">{testimonial.name}</p>
                          <p className="text-[#888] text-[12px]">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className={i < testimonial.rating ? 'text-[#E6AF1C] text-sm' : 'text-gray-300 text-sm'}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

            {/* Rectangular Dots */}
            <div className="flex lg:flex-col justify-center gap-2">
              {list.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  className={`max-lg:h-[6px] lg:w-[6px] rounded-sm transition-all duration-300 ${
                    activeIndex === index
                      ? 'max-lg:w-[32px] lg:h-[32px] bg-[#602F7B]'
                      : 'max-lg:w-[16px] lg:h-[16px] bg-[#C4C4C4]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
