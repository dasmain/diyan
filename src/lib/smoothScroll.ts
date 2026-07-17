import Lenis from "lenis";

let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

export function initSmoothScroll() {
  if (typeof window === "undefined") return () => {};

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReduced) {
    const onClick = (event: MouseEvent) => {
      const anchor = getHashAnchor(event);
      if (!anchor) return;
      event.preventDefault();
      const target = document.querySelector(anchor.hash);
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        history.pushState(null, "", anchor.hash);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  let frame = 0;
  const raf = (time: number) => {
    lenis?.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  const onClick = (event: MouseEvent) => {
    const anchor = getHashAnchor(event);
    if (!anchor || !lenis) return;

    event.preventDefault();
    event.stopPropagation();

    const hash = decodeURIComponent(anchor.hash);
    lenis.scrollTo(hash, {
      offset: 0,
      duration: 1.25,
      onComplete: () => {
        history.pushState(null, "", hash);
      },
    });
  };

  document.addEventListener("click", onClick, true);

  return () => {
    cancelAnimationFrame(frame);
    document.removeEventListener("click", onClick, true);
    lenis?.destroy();
    lenis = null;
  };
}

function getHashAnchor(event: MouseEvent): HTMLAnchorElement | null {
  const target = event.target;
  if (!(target instanceof Element)) return null;

  const anchor = target.closest("a");
  if (!(anchor instanceof HTMLAnchorElement)) return null;
  if (!anchor.hash || anchor.target === "_blank") return null;

  try {
    const url = new URL(anchor.href);
    const current = new URL(window.location.href);
    if (url.origin !== current.origin || url.pathname !== current.pathname) {
      return null;
    }
  } catch {
    return null;
  }

  if (!document.querySelector(anchor.hash)) return null;
  return anchor;
}
