import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  retrieveContactController,
  retrieveEspecificContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import { verifySchemaMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { verifyUuidMiddleware } from "../middlewares/verifyIsValidUuid.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.middleware";
import { verifyUuidSchema } from "../schemas/client.schemas";
import { contactSchema, updateContactSchema } from "../schemas/contact.schemas";

export const contactRoutes = Router();

contactRoutes.post(
  "",
  verifySchemaMiddleware(contactSchema),
  verifyTokenMiddleware,
  createContactController
);
contactRoutes.get("", verifyTokenMiddleware, retrieveContactController);
contactRoutes.get(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  verifyTokenMiddleware,
  retrieveEspecificContactController
);
contactRoutes.patch(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  verifySchemaMiddleware(updateContactSchema),
  verifyTokenMiddleware,
  updateContactController
);
contactRoutes.delete(
  "/:id",
  verifyUuidMiddleware(verifyUuidSchema),
  verifyTokenMiddleware,
  deleteContactController
);
