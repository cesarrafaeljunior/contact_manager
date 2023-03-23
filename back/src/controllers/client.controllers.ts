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
  await deleteClientService(clientId);

  return res.status(204).json();
};
