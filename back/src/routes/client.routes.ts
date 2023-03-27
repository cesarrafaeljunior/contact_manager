import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  retrieveClientController,
  updateClientController,
} from "../controllers/client.controllers";
import { verifySchemaMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { verifyUuidMiddleware } from "../middlewares/verifyIsValidUuid.middleware";
import { verifyOwnerAccountMiddleware } from "../middlewares/verifyOwnerAccountMiddleware.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.middleware";
import {
  createClientSchema,
  updateClientSchema,
  verifyUuidSchema,
} from "../schemas/client.schemas";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  verifySchemaMiddleware(createClientSchema),
  createClientController
);
clientRoutes.get("", verifyTokenMiddleware, retrieveClientController);
clientRoutes.patch(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  verifySchemaMiddleware(updateClientSchema),
  verifyTokenMiddleware,
  verifyOwnerAccountMiddleware,
  updateClientController
);
clientRoutes.delete(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  verifyTokenMiddleware,
  verifyOwnerAccountMiddleware,
  deleteClientController
);
