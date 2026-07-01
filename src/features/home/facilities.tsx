import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function Facilities() {
  const item = [
        {
            icon: "/assets/Icon-city-center.png",
            title: "● Convenient central location ",
           
        },
        {
            icon: "/assets/Icon-parking.png",
            title: "● Hassle-free parking",
                    },
        {
            icon: "/assets/Icon-doctors.png",
            title: "● Doctors available daily (9 AM - 9 PM) ",
            
        },
        {
            icon: "/assets/Icon-pickup.png",
            title: "● Pickup & drop-off support",
            
        },
        {
            icon: "/assets/Icon-wheel-chair.png",
            title: "● Wheelchair access",
            
        },
    ];
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Clinic Facilities
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5 lg:grid-cols-5">
          {item.map((item) => (
            <div key={item.icon} className="overflow-hidden rounded-xl border">
              <div className="aspect-square bg-muted">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 justify-items-center">
                <h3 className="font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}