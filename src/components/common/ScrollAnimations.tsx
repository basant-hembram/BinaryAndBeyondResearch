'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Mount once per page and applies scroll-driven GSAP animations
 * to elements decorated with data-gsap="..." attributes.
 *
 * Supported values:
 *   data-gsap="fade-up"        — fade in + slide up
 *   data-gsap="fade-left"      — fade in + slide from left
 *   data-gsap="fade-right"     — fade in + slide from right
 *   data-gsap="scale-up"       — scale from 0.85 → 1
 *   data-gsap="stagger-up"     — children stagger fade-up
 *   data-gsap="gradient-shine" — gradient sweeps in from right → left
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- fade-up ---
      gsap.utils.toArray<HTMLElement>('[data-gsap="fade-up"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // --- fade-left ---
      gsap.utils.toArray<HTMLElement>('[data-gsap="fade-left"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // --- fade-right ---
      gsap.utils.toArray<HTMLElement>('[data-gsap="fade-right"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // --- scale-up ---
      gsap.utils.toArray<HTMLElement>('[data-gsap="scale-up"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // --- stagger-up (animates direct children) ---
      gsap.utils.toArray<HTMLElement>('[data-gsap="stagger-up"]').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: container,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // --- gradient-shine (sweep-in on scroll, then continuous shimmer loop) ---
      gsap.utils.toArray<HTMLElement>('[data-gsap="gradient-shine"]').forEach((el) => {
        // Override the background to include a bright shimmer highlight pass
        el.style.backgroundColor=
          '#0A1A3A';
        el.style.backgroundSize = '300% 100%';
        el.style.backgroundPosition = '200% center';

        // Sweep in from right → left on first scroll-trigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });

        tl.fromTo(
          el,
          { backgroundPosition: '200% center', opacity: 0 },
          {
            backgroundPosition: '0% center',
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
          }
        ).to(el, {
          // Continuous shimmer: slide the highlight across repeatedly
          backgroundPosition: '-200% center',
          duration: 3,
          ease: 'none',
          repeat: -1,
          repeatDelay: 1.5,
          delay: 0.3,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
