import {
  createClientSchema,
  returnClientSchemaWithoutPassword,
} from "../schemas/client.schemas";
import { z } from "zod";

export type IClientRequest = z.infer<typeof createClientSchema>;
export type IClientWithoutPassword = z.infer<
  typeof returnClientSchemaWithoutPassword
>;
