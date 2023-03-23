import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../errors/apperror.errors";

export const verifyOwnerAccountMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientId = req.params.id;
  const clientLoggedId = req.client.id;

  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("Client not found");
  }

  if (clientId != clientLoggedId) {
    throw new AppError("Permission denied", 401);
  }

  return next();
};
