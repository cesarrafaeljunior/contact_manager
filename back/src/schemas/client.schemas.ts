import { z } from "zod";

export const clientSchema = z.object({
  fullName: z.string().max(50),
  username: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().min(8).max(10),
  telephone: z.string().max(10).nullable(),
});
