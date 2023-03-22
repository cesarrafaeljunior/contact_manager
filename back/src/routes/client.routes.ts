import { Router } from "express";
import { createClientController } from "../controllers/client.controllers";
import { verifyMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { clientSchema } from "../schemas/client.schemas";

export const clientRoutes = Router();

clientRoutes.post("", verifyMiddleware(clientSchema), createClientController);
// clientRoutes.get();
// clientRoutes.patch();
// clientRoutes.delete();
