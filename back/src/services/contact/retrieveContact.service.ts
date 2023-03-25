import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

export const retrieveContactService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientContacts = await clientRepository.find({
    select: {
      id: true,
      fullName: true,
      telephone: true,
    },
    where: {
      id: clientId,
    },
    relations: {
      contacts: true,
    },
  });

  return clientContacts;
};
