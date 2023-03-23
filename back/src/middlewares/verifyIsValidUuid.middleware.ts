import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const verifyUuidMiddleware =
  (schema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validateUuid = await schema.parse(req.params);
    req.params.id = validateUuid.id;

    return next();
  };
