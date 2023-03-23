import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/apperror.errors";
import { returnClientSchemaWithoutPassword } from "../../schemas/client.schemas";

export const updateClientService = async (clientData: {}, clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: clientId,
  });

  const newClient = {
    ...client,
    ...clientData,
  };

  await clientRepository.save(newClient);

  const clientResponse = returnClientSchemaWithoutPassword.parse(newClient);

  return clientResponse;
};
