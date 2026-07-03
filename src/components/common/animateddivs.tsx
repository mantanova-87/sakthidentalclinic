"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedDiv({
  children,
  className,
  delay = 0,
}: AnimatedDivProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        rotate: -2,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      className={cn("transition-all duration-300 ease-in-out", className)}
    >
      {children}
    </motion.div>
  );
}