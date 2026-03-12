'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { data } from '../../data';

gsap.registerPlugin(ScrollTrigger);

const ourWorkData = (data as any).ourWork;

type Step = { id: number; title: string; image: string; description: string };

const HowWeGuideYou = () => {
  const { howWeGuideYou } = ourWorkData;
  const [steps, setSteps] = useState<Step[]>([]);

  // Fetch live steps from MongoDB only
  useEffect(() => {
    fetch('/api/our-work')
      .then((r) => r.json())
      .then((json) => {
        if (json.success) {
          setSteps(
            json.data.map((item: any, idx: number) => ({
              id: item.order || idx + 1,
              title: item.title,
              image: item.image,
              description: item.description ?? '',
            }))
          );
        }
      })
      .catch(() => {});
  }, []);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const solidDesktopRef = useRef<HTMLDivElement>(null);
  const solidMobileRef = useRef<HTMLDivElement>(null);
  const dottedDesktopRef = useRef<HTMLDivElement>(null);
  const dottedMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !stepsRef.current) return;
    const container = stepsRef.current;

    const positionLines = () => {
      const dDots = Array.from(container.querySelectorAll<HTMLElement>('.dot-desktop'));
      const mDots = Array.from(container.querySelectorAll<HTMLElement>('.dot-mobile'));

      const applyPosition = (
        solidEl: HTMLDivElement | null,
        dottedEl: HTMLDivElement | null,
        dots: HTMLElement[]
      ) => {
        if (!dots.length || (!solidEl && !dottedEl)) return;
        const cRect = container.getBoundingClientRect();
        const fRect = dots[0].getBoundingClientRect();
        const lRect = dots[dots.length - 1].getBoundingClientRect();
        const top = fRect.top + fRect.height / 2 - cRect.top;
        const bottom = cRect.height - (lRect.top + lRect.height / 2 - cRect.top);
        [solidEl, dottedEl].forEach((el) => {
          if (!el) return;
          el.style.top = `${top}px`;
          el.style.bottom = `${bottom}px`;
        });
      };

      applyPosition(solidDesktopRef.current, dottedDesktopRef.current, dDots);
      applyPosition(solidMobileRef.current, dottedMobileRef.current, mDots);
    };

    const raf = requestAnimationFrame(positionLines);
    window.addEventListener('resize', positionLines);

    const ctx = gsap.context(() => {
      const dDots = gsap.utils.toArray<HTMLElement>('.dot-desktop');
      const mDots = gsap.utils.toArray<HTMLElement>('.dot-mobile');

      const revealLine = (el: HTMLDivElement | null, first: HTMLElement, last: HTMLElement) => {
        if (!el) return;
        gsap.set(el, { clipPath: 'inset(0 0 100% 0)' });
        gsap.to(el, {
          clipPath: 'inset(0 0 0% 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: first,
            endTrigger: last,
            start: 'center 60%',
            end: 'center 60%',
            scrub: 1,
          },
        });
      };

      if (dDots.length) revealLine(solidDesktopRef.current, dDots[0], dDots[dDots.length - 1]);
      if (mDots.length) revealLine(solidMobileRef.current, mDots[0], mDots[mDots.length - 1]);

      [...dDots, ...mDots].forEach((dot) => {
        ScrollTrigger.create({
          trigger: dot,
          start: 'center 60%',
          onEnter: () => {
            dot.style.backgroundColor = '#6B2E7E';
            dot.style.borderColor = '#6B2E7E';
            dot.style.color = '#ffffff';
            dot.style.boxShadow = '0 0 0 5px rgba(107,46,126,0.25)';
          },
        });
      });

      const slideIn = (cls: string, xFrom: number) => {
        gsap.utils.toArray<HTMLElement>(cls).forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, x: xFrom },
            {
              opacity: 1, x: 0, duration: 0.75, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' }
            }
          );
        });
      };
      slideIn('.step-img-left', -70);
      slideIn('.step-txt-right', 70);
      slideIn('.step-txt-left', -70);
      slideIn('.step-img-right', 70);

      gsap.utils.toArray<HTMLElement>('.mob-step').forEach((block) => {
        const children = block.querySelectorAll<HTMLElement>('.mob-anim');
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: block, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      });

    }, sectionRef);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', positionLines);
      ctx.revert();
    };
  }, []);

  return (
    <section className="py-8 md:py-16 bg-none" ref={sectionRef}>
      <div className="container max-md:px-4 mx-auto">

        <div className="max-w-2xl">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px] font-semibold uppercase" data-gsap="fade-up">
            <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold tracking-[0.2em]" data-gsap="gradient-shine">
              {howWeGuideYou.label}
            </span>
          </h2>
          <p className="text-[#575455] text-[14px] lg:text-[16px] leading-relaxed">
            {howWeGuideYou.description}
          </p>
        </div>

        <div className="relative" ref={stepsRef}>

          <div ref={dottedDesktopRef} className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(to bottom,#C4A8D0 0px,#C4A8D0 8px,transparent 8px,transparent 18px)' }} />
          <div ref={dottedMobileRef} className="md:hidden absolute left-5 -translate-x-1/2 w-[2px] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(to bottom,#C4A8D0 0px,#C4A8D0 8px,transparent 8px,transparent 18px)' }} />
          <div ref={solidDesktopRef} className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[3px] pointer-events-none"
            style={{ background: 'linear-gradient(180deg,#353572 0%,#602F7B 50%,#A32787 75%,#6B2E7E 100%)' }} />
          <div ref={solidMobileRef} className="md:hidden absolute left-5 -translate-x-1/2 w-[3px] pointer-events-none"
            style={{ background: 'linear-gradient(180deg,#353572 0%,#602F7B 50%,#A32787 75%,#6B2E7E 100%)' }} />

          {steps.map((step: Step, index: number) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={step.id} className="relative py-10 md:py-14">

                <div className="hidden md:grid grid-cols-[1fr_60px_1fr] items-center gap-0">
                  <div className="pr-10 flex justify-end">
                    {isLeft ? (
                      <div className="step-img-left w-full rounded-2xl overflow-hidden shadow-lg h-[300px] group">
                        <img src={step.image} alt={step.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className="step-txt-left w-full">
                        <TextContent step={step} />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <div className="dot-desktop relative z-10 w-[42px] h-[42px] rounded-full border-4 flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ borderColor: '#D1D5DB', backgroundColor: '#F3F4F6', color: '#9CA3AF' }}>
                      {step.id}
                    </div>
                  </div>

                  <div className="pl-10 flex justify-start">
                    {isLeft ? (
                      <div className="step-txt-right w-full">
                        <TextContent step={step} />
                      </div>
                    ) : (
                      <div className="step-img-right w-full rounded-2xl overflow-hidden shadow-lg h-[300px] group">
                        <img src={step.image} alt={step.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:hidden flex gap-4 mob-step">
                  <div className="flex flex-col items-center flex-shrink-0 w-[34px] pt-1">
                    <div className="dot-mobile z-10 w-[34px] h-[34px] rounded-full border-4 flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                      style={{ borderColor: '#D1D5DB', backgroundColor: '#F3F4F6', color: '#9CA3AF' }}>
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="mob-anim rounded-2xl overflow-hidden shadow-md h-[200px] group">
                      <img src={step.image} alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="mob-anim text-[#151D26] font-bold text-[16px] leading-snug">
                      {step.title}
                    </h3>
                    <div className="mob-anim text-[#575455] text-[13px] leading-relaxed [&>strong]:text-[#151D26] [&>strong]:font-semibold [&>ul]:mt-2 [&>ul]:ml-4 [&>ul]:list-disc [&>ul]:space-y-1"
                      dangerouslySetInnerHTML={{ __html: step.description.replace(/\n\n/g, '<br/><br/>') }} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TextContent = ({ step }: { step: Step }) => (
  <div>
    <div className="inline-flex items-center gap-2 mb-3">
      <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
        style={{ background: 'rgba(107,46,126,0.08)', borderColor: '#6B2E7E', color: '#6B2E7E' }}>
        STEP {step.id}
      </span>
    </div>
    <h3 className="text-[#151D26] font-bold text-[20px] lg:text-[24px] leading-snug mb-3">
      {step.title}
    </h3>
    <div
      className="text-[#575455] text-[14px] lg:text-[15px] leading-relaxed [&>strong]:text-[#151D26] [&>strong]:font-semibold [&>ul]:mt-2 [&>ul]:ml-4 [&>ul]:list-disc [&>ul]:space-y-1"
      dangerouslySetInnerHTML={{ __html: step.description.replace(/\n\n/g, '<br/><br/>') }}
    />
  </div>
);

export default HowWeGuideYou;