import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  updateClientController,
} from "../controllers/client.controllers";
import { verifySchemaMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { verifyUuidMiddleware } from "../middlewares/verifyIsValidUuid.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.middleware";
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
clientRoutes.patch(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  updateClientController
);
clientRoutes.delete(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  verifyTokenMiddleware,
  deleteClientController
);
