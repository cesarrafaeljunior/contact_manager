import { Request, Response } from "express";
import { IClientRequest } from "../interfaces/client.interface";
import { verifyUuidSchema } from "../schemas/client.schemas";
import { createClientService } from "../services/client/createClient.service";
import { deleteClientService } from "../services/client/deleteClient.service";
import { retrieveClientService } from "../services/client/retrieveClient.service";
import { updateClientService } from "../services/client/updateClient.service";

export const createClientController = async (req: Request, res: Response) => {
  const client: IClientRequest = req.body;
  const clientResponse = await createClientService(client);

  return res.status(201).json(clientResponse);
};

export const retrieveClientController = async (req: Request, res: Response) => {
  const clientId = req.params.id;

  const clientResponse = await retrieveClientService(clientId);

  return res.status(200).json(clientResponse);
};

export const updateClientController = async (req: Request, res: Response) => {
  const clientId: string = req.params.id;
  const clientData = req.body;

  const clientUpdated = await updateClientService(clientData, clientId);

  return res.status(200).json(clientUpdated);
};

export const deleteClientController = async (req: Request, res: Response) => {
  const clientId: string = req.params.id;

  await deleteClientService(clientId);

  return res.status(204).json();
};
