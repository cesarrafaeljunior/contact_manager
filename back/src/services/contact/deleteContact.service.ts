import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/apperror.errors";

export const deleteContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError("Contact not found", 409);
  }

  //   await contactRepository.delete({ id: contactId });
  await contactRepository.remove(contact);

  return {};
};
