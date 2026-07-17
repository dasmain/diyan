import { FloatingNav } from "@/components/ui/floating-navbar";
import { NAV_ITEMS } from "@/data/nav";
import { LINKS } from "@/data/links";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <FloatingNav
      navItems={[...NAV_ITEMS]}
      className="hidden gap-1 md:flex"
    >
      <a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-accent transition hover:bg-white/5"
        aria-label="GitHub profile"
      >
        <Github className="h-4 w-4" />
      </a>
    </FloatingNav>
  );
}

export function MobileNav() {
  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 flex w-[min(94vw,420px)] -translate-x-1/2 items-center justify-between gap-1 rounded-full border border-white/10 bg-[#030014]/80 px-3 py-2 backdrop-blur-md md:hidden"
      aria-label="Mobile section navigation"
    >
      {NAV_ITEMS.filter((item) =>
        ["#hero", "#now", "#projects", "#contact"].includes(item.link),
      ).map((item) => (
        <a
          key={item.link}
          href={item.link}
          className="rounded-full px-2 py-1 text-[11px] text-soft-white/80 transition hover:text-cyan-accent"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
