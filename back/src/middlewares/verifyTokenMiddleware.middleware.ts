import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/apperror.errors";
import jwt, { decode } from "jsonwebtoken";
import "dotenv/config";

export const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError("Invalid token", 400);
  }

  const token = authToken.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded: any) => {
    if (error) {
      throw new AppError(`${error}`, 401);
    }

    req.client = {
      id: decoded.sub,
      username: decoded.username,
    };

    return next();
  });
};
