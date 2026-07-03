import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function Testimonials() {
  const item = [
    {
      id: 1,
      rating: "⭐⭐⭐⭐⭐",
      description:
        "The doctors are extremely kind and attentive. My braces treatment is progressing really well. - Manisha M",
    },
    {
      id: 2,
      rating: "⭐⭐⭐⭐",
      description:
        "I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I’ve recommended Sakthi Dental Clinic to my entire family. - Mr. Arun Kumar",
    },
    {
      id: 3,
      rating: "⭐⭐⭐⭐⭐",
      description:
        "Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow-ups has been so smooth. Really grateful for their care. - Mrs. Revathi S",
    },
  ];

  return (
    <Section className="bg-background text-body">
      <Container>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold font-heading text-heading">
            What Our Patients Say
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-1 lg:grid-cols-1">
          {item.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-border bg-white p-4 shadow-sm transition-all duration-300 ease-in-out hover:border-primary hover:shadow-md"
            >
              <div className="mb-2 text-secondary font-semibold">
                {item.rating}
              </div>

              <h3 className="font-medium text-body leading-7">
                {item.description}
              </h3>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}