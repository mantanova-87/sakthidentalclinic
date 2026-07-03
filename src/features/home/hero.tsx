"use client"
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function Hero() {
    const [images, setImages] = useState([
        {
            id: 1,
            src: "/assets/Banner_img_1.jpg",
            alt: "Clinic Image 1",
        },
        {
            id: 2,
            src: "/assets/Banner_img_2.jpg",
            alt: "Clinic Image 2",
        },
        {
            id: 3,
            src: "/assets/Banner_img_3.jpg",
            alt: "Clinic Image 3",
        },
    ]);
    useEffect(() => {
        const interval = setInterval(() => {
            setImages((prev) => [
                prev[1],
                prev[2],
                prev[0],
            ]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    const divs = []
    return (
  <Section className="bg-background text-body">
    <Container>
      <div className="grid items-center gap-10 py-10 lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="space-y-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Sakthi Dental Clinic
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight lg:text-6xl text-heading">
              Specialized Dental Care for Women, Children and Families
            </h1>

            <p className="mt-5 text-lg text-body">
              Experience compassionate, expert-led dental service tailored to your needs, all in a modern and welcoming environment.
            </p>

            {/* FULL WIDTH BUTTON COLUMN */}
            <div className="flex flex-col w-full gap-4 py-8">
              <Button size="lg" className="w-full bg-primary hover:bg-primaryHover text-white transition-colors duration-300">
                Book Appointment
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Emergency Dental Service
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right Images */}
        <div className="space-y-4">
          <Reveal>
            <motion.div
              layout
              transition={{
                duration: 2.8,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Supporting Images */}
            <div className="grid grid-cols-2 py-8 gap-4">
              {[1, 2].map((i) => (
                <motion.div
                  key={images[i].id}
                  layout
                  transition={{
                    duration: 2.8,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border"
                >
                  <Image
                    src={images[i].src}
                    alt={images[i].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-center text-2xl font-semibold text-heading">
          You are always in safe hands. We are here to help, anytime.
        </p>
      </div>
    </Container>
  </Section>
);}