import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { AnimatedDiv } from "@/components/common/animateddivs";
import Image from "next/image";

export function WhyChoose() {
  const item = [
    {
      icon: "/assets/allinone.jpg",
      title: "All-in-One Care",
      description:
        "From general dentistry to specialized treatments, everything under one roof.",
    },
    {
      icon: "/assets/experienceddoc.webp",
      title: "Experienced Doctors",
      description:
        "Our dentists are professionally trained and committed to personalized patient care",
    },
    {
      icon: "/assets/patientcentric.jpg",
      title: "Patient-Centric Approach",
      description:
        "We prioritize comfort, safety, and transparency in every treatment we offer",
    },
    {
      icon: "/assets/techdriven.png",
      title: "Technology-Driven Services",
      description:
        "Modern tools and equipment ensure precision and safety.",
    },
  ];

  return (
    <Section className="bg-background text-body">
      <Container>

        <div className="text-center">
          <h2 className="text-3xl font-bold font-heading text-heading">
            Why Choose Sakthi Dental Clinic
          </h2>
        </div>

        <div className="mt-10 grid gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
          {item.map((item) => (
            <AnimatedDiv
              key={item.title}
              className="w-full rounded-xl border border-border bg-white p-5 text-center transition-all duration-300 ease-in-out hover:border-primary hover:shadow-md"
            >
              <div className="flex justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-bold font-heading text-heading">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-body">
                {item.description}
              </p>
            </AnimatedDiv>
          ))}
        </div>

      </Container>
    </Section>
  );
}