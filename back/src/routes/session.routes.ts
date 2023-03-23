import { Router } from "express";
import { sessionController } from "../controllers/session.controller";
import { verifySchemaMiddleware } from "../middlewares/verifyDataMiddleware.middlewares";
import { sessionSchema } from "../schemas/session.schema";

export const sessionRoute = Router();

sessionRoute.post("", verifySchemaMiddleware(sessionSchema), sessionController);
