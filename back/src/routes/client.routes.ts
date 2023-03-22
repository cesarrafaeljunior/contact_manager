import { Router } from "express";
import { createClientController } from "../controllers/client.controllers";

export const clientRoutes = Router();

clientRoutes.post("", createClientController);
// clientRoutes.get();
// clientRoutes.patch();
// clientRoutes.delete();
