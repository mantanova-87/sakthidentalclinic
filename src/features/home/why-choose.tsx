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
        {   icon:"/assets/techdriven.png",
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

                <div className="mt-8 grid gap-8  justify-items-center sm:grid-cols-2 lg:grid-cols-4 ">
                    {item.map((item) => (
                        <div key={item.title} className="justify-items-center border rounded-xl">

                            <div className="mb-4 mt-2  rounded-full ml-2">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="font-semibold ml-2 mr-2 mb-2">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground ml-3 mr-2 mb-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}