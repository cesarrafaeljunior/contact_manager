import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../errors/apperror.errors";
import {
  IClientRequest,
  IClientWithoutPassword,
} from "../interfaces/client.interface";
import { returnClientSchemaWithoutPassword } from "../schemas/client.schemas";
import { Repository } from "typeorm";
export const createClientService = async (
  clientData: IClientRequest
): Promise<IClientWithoutPassword> => {
  const clientRepository: Repository<IClientRequest> =
    AppDataSource.getRepository(Client);

  const verifyUser = await clientRepository.findOneBy({
    email: clientData.email,
  });

  if (verifyUser) {
    throw new AppError("Client already exists", 409);
  }

  const createClient = clientRepository.create(clientData);

  await clientRepository.save(createClient);

  const clientResponse = returnClientSchemaWithoutPassword.parse(createClient);

  return clientResponse;
};
