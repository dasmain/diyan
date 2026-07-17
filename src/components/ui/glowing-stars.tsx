"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function GlowingStarsBackgroundCard({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn(
        "h-full max-h-120 w-full rounded-xl border border-white/10 bg-deep-navy/60 p-4",
        className,
      )}
    >
      <div className="flex items-center justify-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-4 pt-4">{children}</div>
    </div>
  );
}

export function GlowingStarsTitle({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <h3 className={cn("font-display text-xl font-bold text-soft-white", className)}>
      {children}
    </h3>
  );
}

export function GlowingStarsDescription({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <p className={cn("mt-2 max-w-sm text-sm text-soft-white/70", className)}>
      {children}
    </p>
  );
}

function Illustration({ mouseEnter }: { mouseEnter: boolean }) {
  const stars = 108;
  const columns = 18;
  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars),
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-40 w-full p-1"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1px",
      }}
    >
      {Array.from({ length: stars }).map((_, idx) => {
        const isGlowing = glowingStars.includes(idx);
        const delay = (idx % 10) * 0.1;
        const isStatic = mouseEnter;

        return (
          <div
            key={`star-${idx}`}
            className="relative flex items-center justify-center"
          >
            <Star isGlowing={isStatic || isGlowing} delay={delay} />
            <AnimatePresence mode="wait">
              {(isGlowing || isStatic) && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function Star({ isGlowing, delay }: { isGlowing: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay,
      }}
      className={cn("relative z-20 h-[1px] w-[1px] rounded-full bg-[#666]")}
    />
  );
}

function Glow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay }}
      exit={{ opacity: 0 }}
      className="absolute left-1/2 z-10 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-cyan-accent shadow-2xl shadow-cyan-accent/40 blur-[1px]"
    />
  );
}
