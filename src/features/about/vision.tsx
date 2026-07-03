import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function Vision() {
  return (
    <Section className="bg-background text-body">
      <Container>
        <div className="grid items-center gap-5 py-5 lg:grid-cols-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-border rounded-2xl bg-white shadow-sm">
            
            <div className="lg:col-span-2 ml-6 rounded-xl">
              <p className="mt-2 mb-2 font-heading font-bold text-4xl lg:text-6xl text-heading">
                Our Vision and Mission
              </p>
            </div>

            <div className="lg:col-span-2 ml-6 mb-2 mr-4 text-justify text-lg text-body leading-7">
              At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being. Continuous learning and innovation drive us to provide comprehensive solutions, from preventive care to complex dental procedures, all designed to promote long-lasting oral health.
              <br /><br />
              <span>
                Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. At Sakthi Dental Clinic, we believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives and outreach programs. With a focus on holistic care and a passion for brightening lives, we are dedicated to ensuring that every smile we treat reflects confidence, health, and happiness.
              </span>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}