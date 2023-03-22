import { Request, Response } from "express";

export const createClientController = async (req: Request, res: Response) => {
  return res.status(200).json({ messsage: "Deu" });
};
