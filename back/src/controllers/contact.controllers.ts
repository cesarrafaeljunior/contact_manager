import { NextFunction, Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";
import { deleteContactService } from "../services/contact/deleteContact.service";
import { retrieveContactService } from "../services/contact/retrieveContact.service";
import { retrieveEspecificContactService } from "../services/contact/retrieveEspecificContact.service";
import { updateContactService } from "../services/contact/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const contact = req.body;
  const clientLoggedId = req.client.id;

  const contactResponse = await createContactService(contact, clientLoggedId);

  return res.status(201).json(contactResponse);
};

export const retrieveContactController = async (
  req: Request,
  res: Response
) => {
  const clientId = req.client.id;

  const contactsResponse = await retrieveContactService(clientId);

  return res.status(200).json(contactsResponse);
};

export const retrieveEspecificContactController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientId = req.client.id;
  const contactId = req.params.id;

  const contactResponse = await retrieveEspecificContactService(
    clientId,
    contactId
  );

  return res.status(200).json(contactResponse);
};

export const updateContactController = async (req: Request, res: Response) => {
  const clientId = req.client.id;
  const contactId = req.params.id;
  const contactData = req.body;

  const contactUpdated = await updateContactService(
    clientId,
    contactId,
    contactData
  );

  return res.status(200).json(contactUpdated);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id;

  await deleteContactService(contactId);

  return res.status(204).json();
};
