"use client";

import { useAnimeScope } from "@/hooks/useAnimeScope";
import { animate } from "animejs";
import { cn } from "@/lib/utils";

const PLANETS = [
  { size: 8, orbit: 56, color: "#94a3b8", duration: 8000 },
  { size: 11, orbit: 88, color: "#22d3ee", duration: 12000 },
  { size: 14, orbit: 124, color: "#7c3aed", duration: 16000 },
  { size: 10, orbit: 160, color: "#6366f1", duration: 20000 },
  { size: 18, orbit: 200, color: "#2eb9df", duration: 26000 },
] as const;

type SolarSystemProps = {
  className?: string;
};

export function SolarSystem({ className }: SolarSystemProps) {
  const rootRef = useAnimeScope(() => {
    animate(".solar-sun", {
      scale: [1, 1.08, 1],
      duration: 3200,
      ease: "inOutSine",
      loop: true,
    });

    PLANETS.forEach((_, i) => {
      animate(`.orbit-${i}`, {
        rotate: "360deg",
        duration: PLANETS[i].duration,
        ease: "linear",
        loop: true,
      });
    });
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        "pointer-events-none relative mx-auto aspect-square w-[min(90vw,420px)]",
        className,
      )}
      aria-hidden
    >
      <div className="solar-sun absolute left-1/2 top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-amber-200 via-orange-400 to-rose-500 shadow-[0_0_40px_rgba(251,146,60,0.55)]" />
      {PLANETS.map((planet, i) => (
        <div
          key={planet.orbit}
          className={cn(
            `orbit-${i}`,
            "absolute left-1/2 top-1/2 rounded-full border border-white/10",
          )}
          style={{
            width: planet.orbit * 2,
            height: planet.orbit * 2,
            marginLeft: -planet.orbit,
            marginTop: -planet.orbit,
          }}
        >
          <span
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_currentColor]"
            style={{
              width: planet.size,
              height: planet.size,
              backgroundColor: planet.color,
              color: planet.color,
            }}
          />
        </div>
      ))}
    </div>
  );
}
