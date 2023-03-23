import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/apperror.errors";

export const deleteClientService = async (clientId: string): Promise<{}> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("User not found", 404);
  }

  await clientRepository.delete({ id: clientId });

  return {};
};
