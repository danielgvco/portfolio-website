"use client";

import { Particles } from "@/components/magicui/particles";

export default function HeroParticles() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        size={1}
        staticity={45}
        ease={60}
        color="#ffffff"
        refresh
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl">
          DANIEL VARGAS
        </h1>
        <p className="max-w-[600px] text-lg text-gray-400 sm:text-xl">
          Software Developer & Data Analytics Professional
        </p>
      </div>
    </div>
  );
}
