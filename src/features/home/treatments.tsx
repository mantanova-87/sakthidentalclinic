import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Treatments() {
  const items = [
    {
      icon: "/assets/teethextraction.png",
      title: "Tooth Extraction",
      description: "Safe and painless removal of impacted or decayed teeth.",
    },
    {
      icon: "/assets/artcompden.png",
      title: "Artificial Complete Denture",
      description: "Full mouth replacement to restore confidence and function.",
    },
    {
      icon: "/assets/ToothFilling.jpg",
      title: "Tooth Filling",
      description: "Composite fillings for cavity treatment and tooth restoration.",
    },
    {
      icon: "/assets/TeethCleaning.png",
      title: "Teeth Cleaning / Scaling",
      description: "Preventive care to remove plaque and protect gums.",
    },
    {
      icon: "/assets/Bleaching.png",
      title: "Bleaching",
      description: "Cosmetic whitening treatments for a brighter smile.",
    },
    {
      icon: "/assets/OrthodonicTreatment.png",
      title: "Orthodontic Treatment",
      description: "Braces and aligners to straighten and align teeth.",
    },
  ];

  return (
    <Section className="bg-background text-body">
      <Container>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold font-heading text-heading">
            Core Treatments
          </h2>

          <p className="mt-4 text-muted-foreground">
            Explore Our Services
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.icon}
              className="overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 ease-in-out hover:border-primary hover:shadow-md"
            >
              <div className="aspect-video bg-section">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold font-heading text-heading">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/treatments">
          <Button
            size="lg"
            className="bg-primary hover:bg-primaryHover px-8 md:px-16 lg:px-24 text-white transition-colors duration-300"
          >
            View All Treatments
          </Button>
          </Link>
        </div>

      </Container>
    </Section>
  );
}