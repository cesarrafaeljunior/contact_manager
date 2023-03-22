import { Request, Response } from "express";
import { createClientService } from "../services/client.services";

export const createClientController = async (req: Request, res: Response) => {
  const client = req.body;
  const clientResponse = await createClientService(client);

  return res.status(201).json(clientResponse);
};
