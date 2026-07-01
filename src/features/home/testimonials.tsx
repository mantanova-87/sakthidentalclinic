import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function Testimonials() {
  const item =
    [{
      rating: "⭐⭐⭐⭐⭐",
      description: "“The doctors are extremely kind and attentive. My braces treatment is progressing really well.” - Manisha M "
    },
    {
      rating: "⭐⭐⭐⭐",
      description: "“I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional.I’ve recommended Sakthi Dental Clinic to my entire family.” - Mr.Arun Kumar",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      description: "“Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth.Really grateful  for their care.” - Mrs.Revathi S.",
    }]
return (
  <Section>
    <Container>
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          What Our Patients Say
        </h2>
      </div>

      <div className="mt-12 grid gap-3 md:grid-cols-1 lg:grid-cols-1">
        {item.map((item) => (
          <div
            key={item.rating}
            className="rounded-xl border p-3"
          >

            <div className="mt-3">
              <h3 className="font-semibold">
                {item.description}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {item.rating}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
}