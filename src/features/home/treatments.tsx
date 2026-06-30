import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

export function Treatments() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Core Treatments
          </h2>

          <p className="mt-4 text-muted-foreground">
            Explore Our Services
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border"
            >
              <div className="aspect-video bg-muted" />

              <div className="p-5">
                <h3 className="font-semibold">
                  Treatment Name
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Short treatment description placeholder.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg">
            View All Treatments
          </Button>
        </div>
      </Container>
    </Section>
  );
}