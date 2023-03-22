import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string({ required_error: "fullName is required" }).max(50),
  email: z.string({ required_error: "email is required" }).email().max(50),
  telephone: z.string().max(10).optional(),
});
