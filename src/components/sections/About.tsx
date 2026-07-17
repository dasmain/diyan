import { PERSONAL } from "@/data/personal";
import { PROFILE } from "@/data/profile";
import { Gamepad2, Sparkles, Tv } from "lucide-react";

const ICONS = {
  Gamepad2,
  Sparkles,
  Tv,
} as const;

export function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
          About
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-soft-white/55">
          Secure systems, AI-aware products, and pragmatic delivery.
        </p>

        <div className="glass-panel mt-8 rounded-2xl p-6 sm:p-8">
          <p className="text-base leading-relaxed text-soft-white/80">
            {PROFILE.shortBio}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-soft-white/65">
            I care about security by default, clean architectures, and shipping
            features that survive production. Recent work spans medical imaging,
            telehealth, and RAG-driven trading tooling.
          </p>
          <p className="mt-6 text-sm italic text-soft-white/50">
            {PERSONAL.offDutyLine}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {PERSONAL.interests.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-soft-white/70"
                >
                  <Icon className="h-3.5 w-3.5 text-cyan-accent" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
