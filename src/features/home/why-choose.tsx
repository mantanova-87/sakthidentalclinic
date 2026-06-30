import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { id } from "zod/locales";
import Image from "next/image";
export function WhyChoose() {
    const item = [
        {
            icon: "/assets/allinone.jpg",
            title: "All-in-One Care",
            description: "● From general dentistry to specialized treatments, everything under one roof."
        },
        {   icon:"/assets/experienceddoc.webp",
            title: "Experienced Doctors",
            description: "● Our dentists are professionally trained and committed to personalized patient care",
        },
        {   icon:"/assets/patientcentric.jpg",
            title: "Patient-Centric Approach ",
            description: "● We prioritize comfort, safety, and transparency in every treatment we offer",
        },
        {   icon:"/assets/techdriven.webp",
            title: "Technology-Driven Services ",
            description: "● Modern tools and equipment ensure precision and safety. ",
        },
    ];
    return (
        <Section>
            <Container>
                <div className="text-center">
                    <h2 className="text-3xl font-bold">
                        Why Choose Sakthi Dental Clinic
                    </h2>

                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
                    {item.map((item) => (
                        <div key={item.title} >

                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full ">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}