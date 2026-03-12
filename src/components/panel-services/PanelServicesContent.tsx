'use client';

import { useState, useEffect } from 'react';
import { data } from '@/data';

interface PanelCard {
  title: string;
  description: string;
  image: string;
}

export default function PanelServicesContent() {
  const panelServicesData = (data as any).panelServices;
  const overview = panelServicesData?.overview;
  const professionalSection = panelServicesData?.professionalSection;
  const fallbackCards = (professionalSection?.cards ?? []) as PanelCard[];
  const [cards, setCards] = useState<PanelCard[]>([]);

  useEffect(() => {
    fetch('/api/panel-services')
      .then((r) => r.json())
      .then((json) => {
        if (json.success) setCards(json.data);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden py-10 md:py-14 lg:py-16">
      <div
        className="pointer-events-none absolute right-0 top-8 h-[280px] w-[280px] rounded-full blur-3xl md:h-[380px] md:w-[380px]"
        style={{ background: 'radial-gradient(circle, rgba(163,39,135,0.28) 0%, rgba(163,39,135,0) 72%)' }}
      />

      <div className="container max-md:px-4 mx-auto relative z-10">
        <div className="overflow-hidden rounded-3xl" data-gsap="scale-up">
          <img
            src={overview?.image}
            alt={overview?.title}
            className="h-[230px] md:h-[420px] lg:h-[600px] w-full object-cover"
          />
        </div>

        <div className="mt-8 md:mt-10">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[16px] font-semibold uppercase" data-gsap="fade-up">
            <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold tracking-[0.2em]">
              {overview?.title}
            </span>
          </h2>

          <div className="space-y-2 text-[#575455] text-[14px] lg:text-[16px] leading-relaxed" data-gsap="stagger-up">
            {overview?.paragraphs?.map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <h3 className="text-[#151D26] text-[34px] md:text-[44px] font-semibold leading-[1.15] tracking-[-0.02em]" data-gsap="fade-up">
            {professionalSection?.title}
          </h3>
          <p className="mt-3 text-[#2A2A2A] text-[14px] md:text-[17px] leading-[1.75]" data-gsap="fade-up">
            {professionalSection?.description}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-gsap="stagger-up">
            {cards.map((card) => (
              <article key={card.title} className="bg-transparent">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-[190px] md:h-[210px] w-full object-cover"
                  />
                </div>
                <h4 className="text-[#151D26] text-[28px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.02em]">
                  {card.title}
                </h4>
                <p className="mt-2 text-[#575455] text-[14px] md:text-[16px] leading-[1.65]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
