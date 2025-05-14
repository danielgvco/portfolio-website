"use client";

import { memo } from "react";
import { Particles } from "@/components/magicui/particles";

function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <Particles
        className="absolute inset-0"
        quantity={150}
        size={1}
        staticity={45}
        ease={60}
        color="#ffffff"
        refresh
      />
    </div>
  );
}

export default memo(ParticlesBackground);
