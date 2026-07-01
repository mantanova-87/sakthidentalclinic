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
      className={cn("py-8 md:py-8", className)}
      {...props}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}