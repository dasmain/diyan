"use client";

import { EXPLORING } from "@/data/exploring";
import { useAnimeScope } from "@/hooks/useAnimeScope";
import { animate, stagger } from "animejs";
import { Brain, FileCode } from "lucide-react";

const ICONS = {
  Brain,
  FileCode,
} as const;

export function CurrentlyExploring() {
  const rootRef = useAnimeScope(() => {
    animate(".orbit-ring", {
      scale: [1, 1.15, 1],
      opacity: [0.35, 0.85, 0.35],
      duration: 2200,
      delay: stagger(350),
      ease: "inOutSine",
      loop: true,
    });
  }, []);

  return (
    <section id="now" className="relative z-10 px-6 py-24" ref={rootRef}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
          Currently Exploring
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-soft-white/55">
          Active technical curiosity, not a resume filler.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {EXPLORING.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <article
                key={item.title}
                className="glass-panel relative overflow-hidden rounded-2xl p-6"
              >
                <span className="orbit-ring absolute -right-6 -top-6 h-24 w-24 rounded-full border border-cyan-accent/40" />
                <div className="relative flex items-start gap-4">
                  <span className="rounded-full border border-white/10 bg-white/5 p-2.5 text-cyan-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-soft-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-soft-white/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
