'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const { home: homeData } = data;

const CaseStudies = () => {
  const { caseStudies } = homeData;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [slidesOffset, setSlidesOffset] = useState(16);

  useEffect(() => {
    const calculateOffset = () => {
      const maxWidth = 1440;
      const containerPadding = window.innerWidth < 768 ? 16 : 32;
      const offset = Math.max(containerPadding, (window.innerWidth - maxWidth) / 2 + containerPadding);
      setSlidesOffset(Math.round(offset));
    };
    calculateOffset();
    window.addEventListener('resize', calculateOffset);
    return () => window.removeEventListener('resize', calculateOffset);
  }, []);

  return (
    <section id="case-studies" className="py-8 md:py-12 bg-none overflow-x-hidden">
      {/* Header inside container */}
      <div className="container max-md:px-4 mx-auto">
        <div className="flex items-start justify-between mb-10" data-gsap="fade-up">
          <div>
            <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-[#0A1A3A] mb-2">
              {caseStudies.title}
            </h2>
            <p className="text-[#575455] text-[14px] lg:text-[16px] max-w-xl">
              {caseStudies.subtitle}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-1 flex-shrink-0">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-[#403373] flex items-center justify-center text-[#403373] hover:bg-[#403373] hover:text-white transition-colors duration-200"
              aria-label="Previous"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-[#403373] flex items-center justify-center text-[#403373] hover:bg-[#403373] hover:text-white transition-colors duration-200"
              aria-label="Next"
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          slidesOffsetBefore={slidesOffset}
          slidesOffsetAfter={24}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === 'object' && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            480: { slidesPerView: 1.8, spaceBetween: 24 },
            768: { slidesPerView: 2.5, spaceBetween: 24 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
          className="case-studies-swiper !overflow-visible"
        >
          {caseStudies.studies.map((study) => (
            <SwiperSlide key={study.id}>
              <div className="relative rounded-3xl overflow-hidden h-[320px] md:h-[360px] cursor-pointer group">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-[16px] lg:text-[18px] leading-snug">
                    {study.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default CaseStudies;
