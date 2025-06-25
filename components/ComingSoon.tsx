"use client";

import { RainbowButton } from "./magicui/rainbow-button";
import Link from 'next/link';
import { AuroraText } from "./magicui/aurora-text";
import { Meteors } from "@/components/magicui/meteors";

export default function ComingSoon() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <Meteors
        className="absolute inset-0"
        number={30}
        minDelay={0.2}
        maxDelay={1}
        minDuration={6}
        maxDuration={14}
        angle={215}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tighter text-black sm:text-7xl lg:text-8xl">
        COMING SOON
        </h1>
        <AuroraText className="max-w-[600px] text-lg sm:text-xl mb-6">
          DIGITAL MARKETING &amp; DATA SPECIALIST
        </AuroraText>
      </div>
    </div>
  );
}
