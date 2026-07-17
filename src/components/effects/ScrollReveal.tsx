"use client";

import { useAnimeScope } from "@/hooks/useAnimeScope";
import { animate, stagger } from "animejs";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  selector?: string;
};

export function ScrollReveal({
  children,
  className,
  selector = "[data-reveal]",
}: ScrollRevealProps) {
  const rootRef = useAnimeScope((self) => {
    const targets = self.root.querySelectorAll(selector);
    if (!targets.length) return;

    animate(targets, {
      opacity: [0, 1],
      translateY: [28, 0],
      delay: stagger(80),
      duration: 700,
      ease: "outCubic",
      autoplay: true,
    });
  }, []);

  return (
    <div ref={rootRef} className={cn(className)}>
      {children}
    </div>
  );
}
