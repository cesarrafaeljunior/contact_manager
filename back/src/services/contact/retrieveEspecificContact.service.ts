import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/apperror.errors";

export const retrieveEspecificContactService = async (
  clientId: string,
  contactId: string
) => {
  const contactRepositry = AppDataSource.getRepository(Contact);

  const contact: any = await contactRepositry.findOne({
    where: {
      id: contactId,
    },
    relations: {
      client: true,
    },
  });

  if (contact?.client.id != clientId) {
    throw new AppError("Permission denied", 404);
  }

  delete contact.client.password;
  delete contact.client.username;
  delete contact.client.createdAt;

  return contact;
};
