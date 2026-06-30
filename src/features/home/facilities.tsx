import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function Facilities() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Clinic Facilities
          </h2>

          <p className="mt-4 text-muted-foreground">
            Facilities section placeholder.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border"
            >
              <div className="aspect-square bg-muted" />

              <div className="p-4">
                <h3 className="font-semibold">
                  Facility Title
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}