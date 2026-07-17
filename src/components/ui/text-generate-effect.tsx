"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-display font-bold", className)}>
      <motion.div className="leading-snug tracking-wide">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className="inline-block text-soft-white opacity-0"
            initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
            animate={{ opacity: 1, filter: filter ? "blur(0px)" : "none" }}
            transition={{
              duration,
              delay: idx * 0.12,
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
