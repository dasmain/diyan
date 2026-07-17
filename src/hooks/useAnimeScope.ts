import { createScope, type Scope } from "animejs";
import { useEffect, useRef, type RefObject } from "react";

type ScopeSetup = (scope: Scope) => void | ((scope?: Scope) => void);

export function useAnimeScope(
  setup: ScopeSetup,
  deps: unknown[] = [],
): RefObject<HTMLDivElement | null> {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    const scope = createScope({ root: rootRef.current }).add((self) => {
      return setup(self as Scope);
    });

    return () => {
      scope.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}
