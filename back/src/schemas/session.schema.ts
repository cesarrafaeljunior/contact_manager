import { z } from "zod";
export const sessionSchema = z.object({
  username: z.string(),
  password: z.string(),
});
