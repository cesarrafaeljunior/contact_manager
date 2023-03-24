import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/apperror.errors";
import {
  IContactRturn,
  IUpdateContact,
  IUpdateContactReturn,
} from "../../interfaces/contact.interface";

export const updateContactService = async (
  clientId: string,
  contactId: string,
  contactData: IUpdateContact
): Promise<IContactRturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      client: true,
    },
  });

  if (!contact) {
    throw new AppError("Contacts not found", 404);
  }

  if (contact.client.id != clientId) {
    throw new AppError("Permission denied", 409);
  }

  const newContato: IUpdateContactReturn = {
    ...contact,
    ...contactData,
  };

  await contactRepository.save(newContato);

  delete newContato.client.password;

  return newContato;
};
