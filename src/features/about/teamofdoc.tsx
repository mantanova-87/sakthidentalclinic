import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function Team() {
  const items = [
    { id: 1, title: "1. Dr. Anupriya (Founder)" },
    { id: 2, title: "2. Dr. Ananya Iyer (Prosthodontist)" },
    { id: 3, title: "3. Dr. Meera Subramanian (Endodontist)" },
    { id: 4, title: "4. Dr. Arvind Kumar (Dental Surgeon)" },
    { id: 5, title: "5. Dr. Sneha N (Orthodontist)" },
    { id: 6, title: "6. Dr. Srinivas Rohit Ramanujam (Implantologist)" },
    { id: 7, title: "7. Dr. Balu (Laser Surgeon)" },
    { id: 8, title: "8. Dr. Vikram Raj Kishore (Aligners Partner)" },
    { id: 9, title: "9. Dr. Ajay Jumar (Oral & Maxillofacial Surgeon)" },
  ];

  return (
    <Section className="bg-background text-body">
      <Container>
        <div className="border border-border rounded-2xl bg-white shadow-sm mx-4 lg:mx-16 mb-8 p-6">
          
          <div className="text-center mt-4 mb-6">
            <h2 className="text-3xl font-bold font-heading text-heading">
              Our Team of Doctors
            </h2>
          </div>

          <div className="mt-1 grid gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-border bg-surface p-3 flex items-center justify-center transition-all duration-300 ease-in-out hover:border-primary hover:bg-section hover:shadow-sm"
              >
                <h3 className="font-medium text-body hover:text-primary transition-colors duration-300 ease-in-out">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}