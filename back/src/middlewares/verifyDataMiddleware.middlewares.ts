import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/apperror.errors";

export const verifyMiddleware =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    const validatedData = await schema.safeParse(req.body);

    if (!validatedData.success) {
      const formattedErrors = validatedData.error.format();
      throw new AppError(formattedErrors, 400);
    }

    req.body = validatedData;
    return next();
  };
