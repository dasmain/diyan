"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState, type ReactNode } from "react";

type NavItem = {
  name: string;
  link: string;
  icon?: ReactNode;
};

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
  children?: ReactNode;
}

export function FloatingNav({ navItems, className, children }: FloatingNavProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current !== "number") return;
    const direction = current - lastY;
    if (current < 80) {
      setVisible(true);
    } else {
      setVisible(direction < 0);
    }
    setLastY(current);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-4 z-50 mx-auto flex max-w-[95vw] items-center justify-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#030014]/70 px-2 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] backdrop-blur-md scrollbar-none sm:px-3",
          className,
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.link}
            href={item.link}
            className="relative flex shrink-0 items-center space-x-1 px-2 py-1 text-xs font-medium text-soft-white/70 transition hover:text-cyan-accent lg:text-sm"
          >
            {item.icon && <span className="block sm:hidden">{item.icon}</span>}
            <span className="hidden sm:block">{item.name}</span>
          </a>
        ))}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
