import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import { AppError } from "../errors/apperror.errors";

export const verifyMiddleware =
  (schema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validatedData = await schema.parse(req.body);
    req.body = validatedData;

    return next();
  };
