'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { data } from '../../data';

const { home: homeData } = data;
const Clients = () => {
  const { clients } = homeData;
  const logos = clients.logos;
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    const groupWidth = group.scrollWidth;

    // Clone the group enough times to fill the viewport seamlessly
    const clones: HTMLElement[] = [];
    const needed = Math.ceil((window.innerWidth * 3) / groupWidth) + 1;
    for (let i = 0; i < needed; i++) {
      const clone = group.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
      clones.push(clone);
    }

    // GSAP infinite marquee: animate x from 0 to -groupWidth, repeat forever
    const tween = gsap.to(track, {
      x: `-=${groupWidth}`,
      duration: groupWidth / 50, // speed: pixels per second
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % groupWidth),
      },
    });

    return () => {
      tween.kill();
      clones.forEach((c) => track.removeChild(c));
    };
  }, []);

  return (
    <section className="py-14 bg-none">
      {/* Heading */}
      <p className="text-center text-[#808080] text-[14px] mb-10 tracking-wide" data-gsap="fade-up">
        {clients.heading}
      </p>

      {/* Marquee Track */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div ref={trackRef} className="flex whitespace-nowrap items-center will-change-transform">
          <div ref={groupRef} className="flex items-center flex-shrink-0">
            {logos.map((logo, index) => (
              <span key={index} className="inline-flex items-center mx-10 flex-shrink-0">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-8 w-auto object-contain transition-all duration-300"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
