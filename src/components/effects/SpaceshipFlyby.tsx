"use client";

import { useAnimeScope } from "@/hooks/useAnimeScope";
import { animate } from "animejs";
import { cn } from "@/lib/utils";

type SpaceshipFlybyProps = {
  className?: string;
};

export function SpaceshipFlyby({ className }: SpaceshipFlybyProps) {
  const rootRef = useAnimeScope(() => {
    const run = () => {
      animate(".spaceship", {
        translateX: ["-20vw", "120vw"],
        translateY: [0, -40, 20, -10],
        rotate: [-8, 6, -4],
        opacity: [0, 1, 1, 0],
        duration: 5200,
        ease: "inOutQuad",
        onComplete: () => {
          const delay = 12000 + Math.random() * 6000;
          window.setTimeout(run, delay);
        },
      });
    };

    const initial = window.setTimeout(run, 2500);
    return () => clearTimeout(initial);
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-[2] overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="spaceship absolute left-0 top-[28%] opacity-0">
        <svg width="72" height="28" viewBox="0 0 72 28" fill="none">
          <path
            d="M4 14 L58 6 C64 5 68 8 70 14 C68 20 64 23 58 22 L4 14 Z"
            fill="#E2E8F0"
            fillOpacity="0.9"
          />
          <path
            d="M52 10 L58 14 L52 18"
            stroke="#22D3EE"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse cx="8" cy="14" rx="8" ry="3" fill="#7C3AED" opacity="0.8">
            <animate
              attributeName="opacity"
              values="0.4;0.9;0.4"
              dur="0.4s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
      </div>
    </div>
  );
}
