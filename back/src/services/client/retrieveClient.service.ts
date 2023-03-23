import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { returnClientSchemaWithoutPassword } from "../../schemas/client.schemas";

export const retrieveClientService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: clientId,
  });

  const clientResponse = returnClientSchemaWithoutPassword.parse(client);

  return clientResponse;
};
