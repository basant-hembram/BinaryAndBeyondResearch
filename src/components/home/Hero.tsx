'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { data } from '../../data';

const MatrixRain = dynamic(() => import('./MatrixRain'), { ssr: false });

const Hero = () => {
  const heroData = data.hero;
  const router = useRouter();

  return (
    <section id="home" className="bg-[#0e0b1a] relative min-h-screen flex items-center justify-center">

      {/* Matrix background */}
      <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_60%_40%,rgba(96,47,123,0.25)_0%,rgba(53,53,114,0.15)_50%,transparent_80%)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,rgba(14,11,26,0.35)_0%,rgba(14,11,26,0.72)_100%)] before:z-[4] before:pointer-events-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[30%] after:bg-[linear-gradient(to_top,#0e0b1a,transparent)] after:z-[4] after:pointer-events-none">
        <MatrixRain />
      </div>

      {/* Content */}
      <div className="relative z-[5] px-6 max-w-[960px] w-full text-center flex flex-col items-center justify-center max-[900px]:p-6">

        <div className="inline-flex items-center gap-2 border border-[rgba(163,39,135,0.28)] bg-[rgba(181,111,255,0.08)] text-[#d05fcb] pl-[10px] pr-4 py-1.5 rounded-full text-[0.78rem] font-normal tracking-[0.06em] uppercase mb-8 animate-fade-up">
          <span className="w-[7px] h-[7px] rounded-full bg-[#A32787] shadow-[0_0_8px_#A32787] animate-badge-pulse" />
          Thinking Beyond the Algorithm
        </div>

        <h1 className="font-poppins font-extrabold text-[clamp(2.8rem,4.5vw,4.2rem)] leading-[1.08] text-white tracking-[-0.02em] mb-7 animate-fade-up-1">
          {heroData.title.line1}<br />
          <span className="bg-[linear-gradient(120deg,#A32787,#602F7B,#353572)] bg-clip-text text-transparent">
            {heroData.title.line2}
          </span><br />
          {heroData.title.line3}.
        </h1>

        <p className="text-white/50 text-[1.05rem] font-light leading-7 max-w-[500px] mb-[30px] animate-fade-up-2 text-center">
          {heroData.subtitle}
        </p>

        <div className="flex gap-4 items-center animate-fade-up-3">
          <button
            onClick={() => router.push('/contact')}
            className="relative overflow-hidden bg-[linear-gradient(135deg,#A32787,#6B2E7E,#602F7B,#353572)] [background-size:200%_200%] animate-grad-shift text-white border-none py-4 px-9 rounded-full font-poppins text-[0.95rem] font-bold tracking-[0.03em] cursor-pointer shadow-[0_0_30px_rgba(163,39,135,0.45)] transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(163,39,135,0.65)] before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transition-[background] before:duration-[250ms] hover:before:bg-white/[0.06]"
          >
            {heroData.ctaButton.text} &rarr;
          </button>
        </div>

        <div className="flex gap-8 mt-[30px] pt-8 border-t border-white/[0.08] animate-fade-up-4 justify-between">
          {heroData.stats.map((stat, index) => (
            <div key={index}>
              <div className="font-poppins text-[1.8rem] max-[900px]:text-[1.2rem] font-bold text-white">
                {stat.value}<span className="text-[#c040a0] ml-2">+</span>
              </div>
              <div className="max-[900px]:text-[0.7rem] text-[0.78rem] text-white/35 uppercase tracking-[0.1em] mt-1">{stat.label}</div>
            </div>
          ))}
          <div>
            <div className="font-poppins text-[1.8rem] max-[900px]:text-[1.2rem] font-bold text-white">&infin;</div>
            <div className="max-[900px]:text-[0.7rem] text-[0.78rem] text-white/35 uppercase tracking-[0.1em] mt-1">Collaboration</div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
