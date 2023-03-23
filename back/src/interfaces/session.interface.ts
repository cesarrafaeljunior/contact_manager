import { z } from "zod";
import { sessionSchema } from "../schemas/session.schema";

export type IClientLogin = z.infer<typeof sessionSchema>;
