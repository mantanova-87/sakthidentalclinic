import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .regex(/^[A-Za-z\s]+$/,"Name can only contain letters and spaces."  ),

  email: z
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10-digit phone number."
    ),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message cannot exceed 500 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;