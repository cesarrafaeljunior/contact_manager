import { Router } from "express";
import { createContactController } from "../controllers/contact.controllers";
import { verifySchemaMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { contactSchema } from "../schemas/contact.schemas";

export const contactRoutes = Router();

contactRoutes.post(
  "",
  verifySchemaMiddleware(contactSchema),
  createContactController
);
// contactRoutes.get();
// contactRoutes.patch();
// contactRoutes.delete();
