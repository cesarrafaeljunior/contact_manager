import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const verifySchemaMiddleware =
  (schema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validatedData = await schema.parse(req.body);
    req.body = validatedData;

    return next();
  };
