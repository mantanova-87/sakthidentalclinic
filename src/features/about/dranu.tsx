import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import Image from "next/image";

export function Doctor() {
  return (
    <Section className="bg-background text-body">
      <Container>
        <div className="grid items-center gap-5 py-5 lg:grid-cols-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-border rounded-2xl bg-white shadow-sm">
            
            <div className="lg:col-span-2 ml-6 rounded-xl">
              <p className="mt-2 mb-2 font-heading font-bold text-4xl lg:text-6xl text-heading">
                Get to know Dr. Anupriya
              </p>

              <p className="mt-2 mb-2 font-heading font-semibold text-2xl lg:text-3xl text-secondary">
                Your Trusted Partner in Dental Care
              </p>
            </div>

            <div className="mt-4 grid ml-6 mr-4 text-justify text-lg text-body leading-7">
              Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.
              <br /><br />
              In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.
            </div>

            <div className="mt-1 flex justify-center mb-4">
              <Image
                src="/assets/pfp.jpg"
                alt="Clinic Image"
                width={300}
                height={300}
                className="object-cover rounded-full border border-border shadow-md"
              />
            </div>

            <div className="lg:col-span-2 ml-6 mb-2 mr-4 text-justify text-lg text-body leading-7">
              At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free. From routine check-ups to specialized treatments, we prioritize personalized care tailored to your unique dental needs.
              <br /><br />
              Whether you're looking for preventive care, cosmetic enhancements, or restorative solutions, Dr. Anupriya and her team are committed to delivering excellence at every step. Because here, your smile isn’t just treated—it’s celebrated.
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}