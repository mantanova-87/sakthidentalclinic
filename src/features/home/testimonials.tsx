import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            What Our Patients Say
          </h2>

          <p className="mt-4 text-muted-foreground">
            Testimonials section placeholder.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border p-6"
            >
              <p className="text-muted-foreground">
                Patient review placeholder.
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">
                  Patient Name
                </h3>

                <p className="text-sm text-muted-foreground">
                  Location
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}