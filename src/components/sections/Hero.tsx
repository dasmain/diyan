import { SolarSystem } from "@/components/effects/SolarSystem";
import { SpaceshipFlyby } from "@/components/effects/SpaceshipFlyby";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { LINKS } from "@/data/links";
import { PROFILE } from "@/data/profile";
import { ArrowDown, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-28"
    >
      <SpaceshipFlyby />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-orbit text-xs tracking-[0.25em] text-cyan-accent/80 uppercase">
            Portfolio
          </p>
          <TextGenerateEffect
            words={PROFILE.name}
            className="text-4xl sm:text-5xl lg:text-6xl"
          />
          <h2 className="mt-3 font-display text-xl text-soft-white/85 sm:text-2xl">
            {PROFILE.title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-soft-white/65 sm:text-base">
            {PROFILE.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-accent px-5 py-2.5 text-sm font-medium text-void transition hover:bg-teal-accent"
            >
              View Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-soft-white/90 transition hover:border-cyan-accent/40 hover:text-cyan-accent"
            >
              LinkedIn
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-6 text-xs text-soft-white/45">{PROFILE.location}</p>
        </div>

        <div className="relative flex justify-center">
          <SolarSystem />
        </div>
      </div>
    </section>
  );
}
