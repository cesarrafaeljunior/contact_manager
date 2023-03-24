import { z } from "zod";

const createClientSchema = z.object({
  fullName: z.string().min(5).max(25),
  username: z.string().min(4).max(25),
  email: z.string().email().max(25),
  password: z.string().min(8),
  telephone: z.string().min(12).max(20),
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
  telephone: z.string().max(50).optional().nullable(),
});

export {
  createClientSchema,
  returnClientSchemaWithoutPassword,
  verifyUuidSchema,
  updateClientSchema,
};
