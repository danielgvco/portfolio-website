"use client";

import UnderConstructionText from "./UnderConstructionText";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-6 text-6xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl">
        DANIEL VARGAS
      </h1>
      <p className="max-w-[600px] text-lg text-gray-400 sm:text-xl">
        Digital Marketing &amp; Data Specialist
      </p>
      <UnderConstructionText />
    </section>
  );
}
