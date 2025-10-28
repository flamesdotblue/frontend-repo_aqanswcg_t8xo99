import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onShopNow }) => {
  return (
    <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden rounded-2xl bg-neutral-950 text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-neutral-950/50 to-neutral-950/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          New season just dropped
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Elevate your everyday
          <span className="block text-neutral-300">with modern essentials</span>
        </h1>
        <p className="mt-4 max-w-xl text-neutral-300">
          Discover curated products crafted for quality and comfort. Minimal design, premium feel, and built for your lifestyle.
        </p>
        <button
          onClick={onShopNow}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          Shop now
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
