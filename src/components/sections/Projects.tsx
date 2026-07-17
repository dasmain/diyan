import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
          Work Projects
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-soft-white/55">
          Employer and client delivery: product surfaces shipped in production.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) =>
            index % 2 === 0 ? (
              <CardContainer key={project.name} className="w-full">
                <CardBody className="glass-panel group/card relative h-auto w-full rounded-2xl p-6">
                  <CardItem
                    translateZ={40}
                    className="font-display text-xl font-semibold text-soft-white"
                  >
                    {project.name}
                  </CardItem>
                  {project.highlight ? (
                    <CardItem
                      translateZ={30}
                      className="mt-2 text-xs tracking-wide text-cyan-accent uppercase"
                    >
                      {project.highlight}
                    </CardItem>
                  ) : null}
                  <CardItem
                    as="p"
                    translateZ={50}
                    className="mt-3 text-sm leading-relaxed text-soft-white/65"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ={20} className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-soft-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ) : (
              <GlowingStarsBackgroundCard key={project.name}>
                <GlowingStarsTitle>{project.name}</GlowingStarsTitle>
                {project.highlight ? (
                  <p className="mt-1 text-xs tracking-wide text-cyan-accent uppercase">
                    {project.highlight}
                  </p>
                ) : null}
                <GlowingStarsDescription>
                  {project.description}
                </GlowingStarsDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-soft-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlowingStarsBackgroundCard>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
