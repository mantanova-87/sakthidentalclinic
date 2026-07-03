"use client";

import { motion } from "framer-motion";
import { ReactNode, Children } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function Reveal({
  children,
  className,
  stagger = 0.5,
}: RevealProps) {
  const items = Children.toArray(children);

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {items.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}