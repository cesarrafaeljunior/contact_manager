import { Router } from "express";
import { createContactController } from "../controllers/contact.controllers";
import { verifySchemaMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.middleware";
import { contactSchema } from "../schemas/contact.schemas";

export const contactRoutes = Router();

contactRoutes.post(
  "",
  verifySchemaMiddleware(contactSchema),
  verifyTokenMiddleware,
  createContactController
);
// contactRoutes.get();
// contactRoutes.patch();
// contactRoutes.delete();
