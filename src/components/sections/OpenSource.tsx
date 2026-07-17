"use client";

import { useAnimeScope } from "@/hooks/useAnimeScope";
import { LINKS } from "@/data/links";
import { OPEN_SOURCE } from "@/data/openSource";
import { animate, stagger } from "animejs";
import { ExternalLink, Github } from "lucide-react";

export function OpenSource() {
  const rootRef = useAnimeScope(() => {
    animate(".oss-card", {
      opacity: [0, 1],
      translateY: [20, 0],
      delay: stagger(100),
      duration: 600,
      ease: "outCubic",
    });
  }, []);

  return (
    <section id="opensource" className="relative z-10 px-6 py-24" ref={rootRef}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
          Open Source
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-soft-white/55">
          Independent builds, lighter visual weight than client work.
        </p>

        <div className="mt-10 space-y-4">
          {OPEN_SOURCE.map((item) => {
            const href = LINKS[item.linkKey];
            return (
              <article
                key={item.name}
                className="oss-card flex flex-col gap-4 rounded-xl border border-dashed border-white/15 bg-transparent px-5 py-4 opacity-0 transition hover:border-cyan-accent/30 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-lg text-soft-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-soft-white/60">
                    {item.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] text-soft-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-cyan-accent transition hover:bg-white/5"
                  >
                    <Github className="h-3.5 w-3.5" />
                    View repo
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="shrink-0 text-xs text-soft-white/40">
                    Link coming soon. Edit LINKS.
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
