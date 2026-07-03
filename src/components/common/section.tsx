import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Container } from "./container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
};

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-8 md:py-10 bg-background text-foreground transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      <Container className={cn("text-foreground", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}