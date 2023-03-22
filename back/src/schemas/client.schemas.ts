import { z } from "zod";

export const clientSchema = z.object({
  fullName: z.string({ required_error: "fullName is required" }).max(50),
  username: z.string({ required_error: "username is required" }).max(50),
  email: z.string({ required_error: "email is required" }).email().max(50),
  password: z.string({ required_error: "password is required" }).min(8).max(10),
  telephone: z.string().max(10).optional(),
});

export const clientWhitoutPassword = z.object({
  id: z.string().uuid().optional(),
  fullName: z.string().optional(),
  username: z.string().optional(),
  email: z.string().email().optional(),
  telephone: z.string().nullable(),
  createdAt: z.date().optional(),
});
