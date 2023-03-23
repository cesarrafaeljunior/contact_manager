import { Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const contact = req.body;
  const clientLoggedId = req.client.id;

  const contactResponse = await createContactService(contact, clientLoggedId);

  return res.status(201).json(contactResponse);
};
