import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function WhyChoose() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Why Choose Sakthi Dental Clinic
          </h2>

          <p className="mt-4 text-muted-foreground">
            Section description placeholder.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-xl border p-6"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-muted" />

              <h3 className="font-semibold">
                Feature Title
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Short description placeholder.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}