import { ACHIEVEMENTS } from "@/data/achievements";
import { EDUCATION } from "@/data/education";
import { Award, GraduationCap, Star } from "lucide-react";

const ICONS = {
  Award,
  GraduationCap,
  Star,
} as const;

export function Education() {
  return (
    <section id="education" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
          Education
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-soft-white/55">
          Academic foundation with merit recognition.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {EDUCATION.map((edu) => (
            <article
              key={edu.institution}
              className="glass-panel rounded-2xl p-6"
            >
              <h3 className="font-display text-lg text-soft-white">
                {edu.institution}
              </h3>
              <p className="mt-1 text-sm text-soft-white/75">{edu.credential}</p>
              <p className="mt-2 text-xs text-cyan-accent/80">{edu.period}</p>
              {edu.detail ? (
                <p className="mt-3 text-sm text-soft-white/55">{edu.detail}</p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3" aria-label="Achievements">
          {ACHIEVEMENTS.map((badge) => {
            const Icon = ICONS[badge.icon];
            return (
              <div
                key={badge.label}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
              >
                <Icon className="h-4 w-4 text-cyan-accent" />
                <div>
                  <p className="text-xs font-medium text-soft-white">
                    {badge.label}
                  </p>
                  <p className="text-[11px] text-soft-white/50">{badge.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
