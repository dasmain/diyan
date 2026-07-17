import { PERSONAL } from "@/data/personal";
import { PROFILE } from "@/data/profile";
import { Gamepad2, Sparkles, Tv } from "lucide-react";

const INTEREST_ICONS = {
  Gamepad2,
  Sparkles,
  Tv,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 px-6 pb-24 pt-12 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <p className="font-display text-sm text-soft-white">
            {PROFILE.name}
          </p>
          <p className="mt-1 max-w-xs text-xs text-soft-white/55">
            {PERSONAL.offDutyLine}
          </p>
          <div className="mt-3 flex gap-3">
            {PERSONAL.interests.map((interest) => {
              const Icon = INTEREST_ICONS[interest.icon];
              return (
                <span
                  key={interest.label}
                  className="inline-flex items-center gap-1 text-xs text-soft-white/60"
                  title={interest.label}
                >
                  <Icon className="h-3.5 w-3.5 text-cyan-accent" />
                  {interest.label}
                </span>
              );
            })}
          </div>
        </div>
        <p className="text-xs text-soft-white/45">
          © {year} {PROFILE.name}. Crafted in deep space.
        </p>
      </div>
    </footer>
  );
}
