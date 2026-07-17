"use client";

import { useAnimeScope } from "@/hooks/useAnimeScope";
import { SKILLS } from "@/data/skills";
import { animate, stagger } from "animejs";

export function Skills() {
  const rootRef = useAnimeScope(() => {
    animate(".skill-pill", {
      opacity: [0, 1],
      translateY: [16, 0],
      delay: stagger(40),
      duration: 500,
      ease: "outCubic",
    });
  }, []);

  return (
    <section id="skills" className="relative z-10 px-6 py-24" ref={rootRef}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
          Skills
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-soft-white/55">
          Orbiting tooling across the full stack and AI layer.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 font-orbit text-xs tracking-widest text-cyan-accent/80 uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-soft-white/80 opacity-0"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
