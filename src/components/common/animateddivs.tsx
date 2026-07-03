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
        y: 40,
        rotate: -5,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}