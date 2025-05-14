"use client";

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export default function UnderConstructionText() {
  return (
    <div className="flex w-full items-center justify-center py-20">
      <AnimatedGradientText
        speed={2}
        colorFrom="#f472b6" // pink-ish
        colorTo="#60a5fa"   // blue-ish
        className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
      >
        UNDER CONSTRUCTION
      </AnimatedGradientText>
    </div>
  );
}
