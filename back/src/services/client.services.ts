import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../errors/apperror.errors";
import { iClient, iClientReturn } from "../interfaces/client.interface";
import { clientWhitoutPassword } from "../schemas/client.schemas";

export const createClientService = async (
  clientData: iClient
): Promise<any> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const verifyUser = await clientRepository.findOneBy({
    email: clientData.email,
  });

  if (verifyUser) {
    throw new AppError("Client already exists", 409);
  }

  const createClient = clientRepository.create(clientData);

  await clientRepository.save(createClient);

  const clientResponse = await clientWhitoutPassword.safeParseAsync(
    createClient
  );

  if (clientResponse.success) {
    return clientResponse.data;
  }
};
