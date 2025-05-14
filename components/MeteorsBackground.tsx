"use client";

import { memo } from "react";
import { Meteors } from "@/components/magicui/meteors";

function MeteorsBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <Meteors
        className="absolute inset-0"
        number={30}          // a bit denser than default
        minDelay={0.2}
        maxDelay={1}
        minDuration={6}      // long enough to cross the screen
        maxDuration={14}
        angle={215}
      />
    </div>
  );
}

export default memo(MeteorsBackground);
