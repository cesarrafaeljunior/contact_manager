import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { IContactRequest } from "../../interfaces/contact.interface";

export const createContactService = async (
  contactData: IContactRequest,
  clientLoggedId: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository: Repository<any> =
    AppDataSource.getRepository(Contact);

  const clientInstance = await clientRepository.findOneBy({
    id: clientLoggedId,
  });

  const contactInstance = contactRepository.create({
    ...contactData,
    client: clientInstance,
  });

  await contactRepository.save(contactInstance);

  return contactInstance;
};
