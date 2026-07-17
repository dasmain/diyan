import { LINKS } from "@/data/links";
import { PROFILE } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "GitHub",
    href: LINKS.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: LINKS.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: LINKS.email,
    icon: Mail,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
          Contact
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-soft-white/55">
          Open to full-stack and AI engineering conversations. Reach out via the
          channels below.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {CONTACT_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                item.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/3 px-5 py-2.5 text-sm text-soft-white transition hover:border-cyan-accent/40 hover:text-cyan-accent"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-1 text-sm text-soft-white/50">
          <p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 hover:text-cyan-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              {PROFILE.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
