import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/apperror.errors";

export const retrieveEspecificContactService = async (
  clientId: string,
  contactId: string
) => {
  const contactRepositry = AppDataSource.getRepository(Contact);

  const contact = await contactRepositry.findOne({
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

  return contact;
};
