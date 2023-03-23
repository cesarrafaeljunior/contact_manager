import { Request, Response } from "express";
import { IClientRequest } from "../interfaces/client.interface";
import { verifyUuidSchema } from "../schemas/client.schemas";
import { createClientService } from "../services/client/createClient.service";
import { deleteClientService } from "../services/client/deleteClient.service";

export const createClientController = async (req: Request, res: Response) => {
  const client: IClientRequest = req.body;
  const clientResponse = await createClientService(client);

  return res.status(201).json(clientResponse);
};

export const deleteClientController = async (req: Request, res: Response) => {
  const clientId: string = req.params.id;
  const clientLoggedId: string = req.client.id;

  await deleteClientService(clientId, clientLoggedId);

  return res.status(204).json();
};

export const updateClientController = async (req: Request, res: Response) => {
  return res.status(200).json({});
};
