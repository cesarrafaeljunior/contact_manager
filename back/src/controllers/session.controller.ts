import { Request, Response } from "express";
import { IClientLogin } from "../interfaces/session.interface";
import { sessionService } from "../services/session/session.service";

export const sessionController = async (req: Request, res: Response) => {
  const client: IClientLogin = req.body;

  const token = await sessionService(client);

  return res.status(200).json({ token: token });
};
