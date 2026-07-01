import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
export function Treatments() {
  const items = [
    {
      icon: "/assets/teethextraction.png",
      title: "● Tooth Extraction ",
      description: "Safe and painless removal of impacted or decayed teeth."
    },
    {
      icon: "/assets/artcompden.png",
      title: "● Artificial Complete Denture ",
      description: "Full mouth replacement to restore confidence and function. ",
    },
    {
      icon: "/assets/ToothFilling.jpg",
      title: "● Tooth Filling ",
      description: "Composite fillings for cavity treatment and tooth restoration. ",
    },
    {
      icon: "/assets/TeethCleaning.png",
      title: "● Teeth Cleaning or Scaling ",
      description: "Preventive care to remove plaque and protect gums. "
    },
    {
      icon: "/assets/Bleaching.png",
      title: "● Bleaching  ",
      description: "Cosmetic whitening treatments for a brighter smile. "
    },
    {
      icon: "/assets/OrthodonicTreatment.png",
      title: "● Orthodontic Treatment ",
      description: "Braces and aligners to straighten and align teeth. "
    },]
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
          {items.map((item) => (
            <div key={item.icon} className="overflow-hidden rounded-xl border">
              <div className="aspect-video bg-muted">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))
          }
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