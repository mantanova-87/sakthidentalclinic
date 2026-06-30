import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function Hero() {
    return (
        <Section>
            <Container>
                <div className="grid items-center gap-10 py-10 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                Sakthi Dental Clinic
                            </p>

                            <h1 className="mt-3 text-4xl font-bold leading-tight lg:text-6xl">
                                Specialized Dental Care for Women,Children and Families
                            </h1>

                            <p className="mt-5 text-lg text-muted-foreground">
                                Experience compassionate,expert-led dental service tailored to your needs,all in a modern and welcoming environment.
                            </p>
                        </div>

                        <div className="flex flex-wrap">
                            <Button size="lg">
                                Book Appointment
                            </Button>
                        </div>
                        <div className="flex flex-wrap">
                            <Button variant="outline" size="lg">
                                Emergency Dental Service
                            </Button>
                        </div>

                        <p className="max-w-lg text-muted-foreground">
                            You are always in safe hands.<br />We are ready to help, anytime.
                        </p>
                    </div>

                    {/* Right Images */}
                    <div className="space-y-4">
                        {/* Main Banner (3.18:1) */}
                        <div className="relative aspect-[3.18/1] overflow-hidden rounded-2xl border">
                            <Image
                                src="/assets/Banner_img_1.jpg"
                                alt="Clinic Image 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Supporting Images */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3.18/1] overflow-hidden rounded-2xl border">
                                <Image
                                    src="/assets/Banner_img_2.jpg"
                                    alt="Clinic Image 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[3.18/1] overflow-hidden rounded-2xl border">
                                <Image
                                    src="/assets/Banner_img_3.jpg"
                                    alt="Clinic Image 3"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}