import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(5).max(25),
  email: z.string().email(),
  telephone: z.string().min(12).max(20),
  client: z.any(),
});

export const returnContactSchema = contactSchema.extend({
  id: z.string().optional(),
  createdAt: z.date().optional(),
});

export const updateContactSchema = contactSchema.partial();
