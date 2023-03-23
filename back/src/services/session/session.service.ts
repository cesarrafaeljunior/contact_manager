import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/apperror.errors";
import { IClientLogin } from "../../interfaces/session.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const sessionService = async (clientData: IClientLogin) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    username: clientData.username,
  });

  if (!client) {
    throw new AppError("Wrong username/password.", 403);
  }

  const matchPassword = await compare(clientData.password, client.password);

  if (!matchPassword) {
    throw new AppError("Wrong username/password.", 403);
  }

  const token = jwt.sign({ username: clientData.username }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: client.id,
  });

  return token;
};
