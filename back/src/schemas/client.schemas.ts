import { z } from "zod";

const createClientSchema = z.object({
  fullName: z.string().min(5).max(25),
  username: z.string().min(4).max(25),
  email: z.string().email(),
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

const updateClientSchema = createClientSchema
  .partial()
  .omit({ password: true });

export {
  createClientSchema,
  returnClientSchemaWithoutPassword,
  verifyUuidSchema,
  updateClientSchema,
};
