import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import { verifySchemaMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { verifyUuidMiddleware } from "../middlewares/verifyIsValidUuid.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.middleware";
import {
  updateClientSchema,
  verifyUuidSchema,
} from "../schemas/client.schemas";
import { contactSchema } from "../schemas/contact.schemas";

export const contactRoutes = Router();

contactRoutes.post(
  "",
  verifySchemaMiddleware(contactSchema),
  verifyTokenMiddleware,
  createContactController
);
contactRoutes.get("", verifyTokenMiddleware, retrieveContactController);
contactRoutes.patch(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  verifySchemaMiddleware(updateClientSchema),
  verifyTokenMiddleware,
  updateContactController
);
contactRoutes.delete(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  verifyTokenMiddleware,
  deleteContactController
);
