'use client';

import { useEffect, useRef } from 'react';
import { data } from '../../data';

const { home: homeData } = data;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  brightness: number;
}

const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CONNECTION_DISTANCE = 120;
    const NODE_COUNT = 300;
    let animFrameId: number;
    let nodes: Node[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.0,
        vy: (Math.random() - 0.5) * 1.0,
        radius: Math.random() < 0.15 ? 3 + Math.random() * 2 : 1.5 + Math.random() * 1.5,
        brightness: 0.5 + Math.random() * 0.5,
      }));
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Background
      ctx.fillStyle = '#020B18';
      ctx.fillRect(0, 0, W, H);

      // Central glow
      const gx = W * 0.5;
      const gy = H * 0.42;
      const glowOuter = Math.max(W, H) * 0.55;
      const radGlow = ctx.createRadialGradient(gx, gy, 0, gx, gy, glowOuter);
      radGlow.addColorStop(0, 'rgba(0, 140, 255, 0.30)');
      radGlow.addColorStop(0.18, 'rgba(0, 80, 200, 0.15)');
      radGlow.addColorStop(0.45, 'rgba(0, 30, 100, 0.07)');
      radGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGlow;
      ctx.fillRect(0, 0, W, H);

      // Inner bright core
      const coreGrad = ctx.createRadialGradient(gx, gy, 0, gx, gy, W * 0.08);
      coreGrad.addColorStop(0, 'rgba(100, 200, 255, 0.55)');
      coreGrad.addColorStop(0.5, 'rgba(0, 140, 255, 0.18)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.fillRect(0, 0, W, H);

      // Update & draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.55;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(50, 150, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const isLarge = n.radius > 3;
        if (isLarge) {
          // Outer glow halo
          const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 5);
          halo.addColorStop(0, `rgba(80, 180, 255, ${n.brightness * 0.5})`);
          halo.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = isLarge
          ? `rgba(120, 210, 255, ${n.brightness})`
          : `rgba(60, 150, 240, ${n.brightness * 0.9})`;
        ctx.fill();
      }

      animFrameId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => {
      resize();
      nodes = [];
      initNodes();
    });
    ro.observe(canvas);

    resize();
    initNodes();
    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

const OurExpertise = () => {
  const { ourExpertise } = homeData;

  return (
    <section className="relative overflow-hidden">
      <div className="container max-md:px-4 mx-auto relative z-10">
        <div className='relative overflow-hidden max-md:p-5 p-10 rounded-3xl shadow-lg' style={{ backgroundColor: '#020B18' }}>
          <NetworkCanvas />
          {/* Header */}
          <div className="relative mb-10 md:mb-14">
            <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-white mb-4">
              {ourExpertise.title}
            </h2>
            <p className="text-[#fff] text-[15px] md:text-[17px] max-w-lg leading-relaxed">
              {ourExpertise.description}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:items-end">
            {ourExpertise.cards.map((card: { title: string; image: string }, index: number) => {
              const isMiddle = index === 1;
              return (
                <div
                  key={index}
                  className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full object-cover h-72 md:h-[300px]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  {/* Card label */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-bold text-[18px] md:text-[20px] leading-snug">
                      {card.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
