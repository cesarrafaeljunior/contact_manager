import { z } from "zod";

const createClientSchema = z.object({
  fullName: z.string({ required_error: "fullName is required" }).max(50),
  username: z.string({ required_error: "username is required" }).max(50),
  email: z.string({ required_error: "email is required" }).email().max(50),
  password: z.string({ required_error: "password is required" }).min(8).max(10),
  telephone: z.string().max(10).nullable().optional(),
});

const returnClientSchemaWithoutPassword = createClientSchema
  .omit({
    password: true,
  })
  .extend({
    id: z.string().optional(),
    createdAt: z.date().optional(),
  });

const verifyUuidSchema = z.object({
  id: z.string().uuid(),
});

const updateClientSchema = z.object({
  fullName: z.string().max(50).optional(),
  username: z.string().max(50).optional(),
  email: z.string().max(50).optional(),
  telephone: z.string().max(50).optional(),
});

export {
  createClientSchema,
  returnClientSchemaWithoutPassword,
  verifyUuidSchema,
  updateClientSchema,
};
