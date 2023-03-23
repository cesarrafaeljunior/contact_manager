import { Router } from "express";
import {
  createClientController,
  deleteClientController,
} from "../controllers/client.controllers";
import { verifySchemaMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { verifyUuidMiddleware } from "../middlewares/verifyIsValidUuid.middleware";
import {
  createClientSchema,
  verifyUuidSchema,
} from "../schemas/client.schemas";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  verifySchemaMiddleware(createClientSchema),
  createClientController
);
// clientRoutes.get();
// clientRoutes.patch();
clientRoutes.delete(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  deleteClientController
);
