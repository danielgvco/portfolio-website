"use client";

import { Meteors } from "./magicui/meteors";

export default function HeroMeteors() {
  return (
    <div className="relative h-screen w-full bg-black">
      <Meteors
        number={30}
        minDelay={0.2}
        maxDelay={1.2}
        minDuration={8}
        maxDuration={16}
        angle={215}
        className="absolute inset-0 z-0"
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
