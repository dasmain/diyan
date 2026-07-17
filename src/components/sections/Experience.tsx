import { TracingBeam } from "@/components/ui/tracing-beam";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-soft-white/55">
          Timeline of roles, from internship to AI product engineering.
        </p>

        <div className="mt-12 pl-4 md:pl-8">
          <TracingBeam>
            <div className="space-y-10 pb-8 pl-6 md:pl-10">
              {EXPERIENCE.map((job) => (
                <article
                  key={`${job.company}-${job.period}`}
                  className="glass-panel rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-medium text-soft-white">
                      {job.role}
                    </h3>
                    <span className="text-xs text-cyan-accent/80">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-soft-white/70">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-soft-white/60 before:mr-2 before:text-cyan-accent before:content-['▹']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </section>
  );
}
