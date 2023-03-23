import { z } from "zod";

const createClientSchema = z.object({
  fullName: z.string({ required_error: "fullName is required" }).max(50),
  username: z.string({ required_error: "username is required" }).max(50),
  email: z.string({ required_error: "email is required" }).email().max(50),
  password: z.string({ required_error: "password is required" }).min(8).max(10),
  telephone: z.string().max(10).nullable().optional(),
});

const returnClientSchema = createClientSchema.extend({
  id: z.string(),
  createdAt: z.date(),
});

const returnClientSchemaWithoutPassword = returnClientSchema.omit({
  password: true,
});

export {
  createClientSchema,
  returnClientSchema,
  returnClientSchemaWithoutPassword,
};
