"use client";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/common/section";
import { Container } from "@/components/common/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/contact";

function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
    console.log(data);
  }

  return (
    <form className="space-y-6" noValidate onSubmit={form.handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-body">Name</Label>

        <Input
          id="name"
          placeholder="Enter your name"
          {...form.register("name")}
        />

        {form.formState.errors.name && (
          <p className="text-sm text-error">
            {form.formState.errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-body">Email</Label>

        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...form.register("email")}
        />

        {form.formState.errors.email && (
          <p className="text-sm text-error">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-body">Phone Number</Label>

        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          {...form.register("phone")}
        />

        {form.formState.errors.phone && (
          <p className="text-sm text-error">
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-body">Message</Label>

        <Textarea
          id="message"
          rows={5}
          placeholder="Enter your message"
          {...form.register("message")}
        />

        {form.formState.errors.message && (
          <p className="text-sm text-error">
            {form.formState.errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primaryHover text-white transition-colors duration-300">
        Submit
      </Button>
    </form>
  );
}

export function CONTACT() {
  return (
    <Section className="bg-background text-body">
      <Container>
        <div className="grid gap-8 rounded-xl border border-border bg-white p-4 lg:grid-cols-2 shadow-sm">

          <div className="rounded-xl border border-border bg-surface">
            <div className="px-4 py-4">
              <h1 className="mb-6 text-2xl font-bold font-heading text-heading">
                We would love to hear from you
              </h1>

              <ContactForm />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface px-4 py-4">
            <h3 className="mb-3 text-2xl font-bold font-heading text-heading">
              Reach Us
            </h3>

            <div className="space-y-4 text-lg text-body">
              <div>
                <p className="font-semibold text-secondary">📍 Address</p>
                <p className="indent-8">{siteConfig.contact.address}</p>
              </div>

              <div>
                <p className="font-semibold text-secondary">📞 Phone</p>

                {siteConfig.contact.phones.map((phone) => (
                  <p className="indent-8" key={phone}>
                    {phone}
                  </p>
                ))}
              </div>

              <div>
                <p className="font-semibold text-secondary">✉️ Email</p>
                <p className="indent-8">{siteConfig.contact.email}</p>
              </div>

              <div>
                <p className="font-semibold text-secondary">🕒 Timings</p>

                {siteConfig.businessHours.map((item) => (
                  <div key={item.days} className="mt-1">
                    <p className="indent-8">{item.days}</p>
                    <p className="font-semibold indent-8 text-heading">
                      {item.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}