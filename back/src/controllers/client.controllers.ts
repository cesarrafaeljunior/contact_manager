import { Request, Response } from "express";
import { IClientRequest } from "../interfaces/client.interface";
import { createClientService } from "../services/client.services";

export const createClientController = async (req: Request, res: Response) => {
  const client: IClientRequest = req.body;
  const clientResponse = await createClientService(client);

  return res.status(201).json(clientResponse);
};
