import { Router } from "express";
import { createClientController } from "../controllers/client.controllers";
import { verifyMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { createClientSchema } from "../schemas/client.schemas";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  verifyMiddleware(createClientSchema),
  createClientController
);
// clientRoutes.get();
// clientRoutes.patch();
// clientRoutes.delete();
