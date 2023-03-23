import "express-async-errors";
import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { errorHandler } from "./errors/errorhandler.errors";
import { clientRoutes } from "./routes/client.routes";
import { contactRoutes } from "./routes/contacts.routes";
import { sessionRoute } from "./routes/session.routes";

const app = express();
app.use(express.json());

app.use("/client", clientRoutes);
app.use("/contact", contactRoutes);
app.use("/login", sessionRoute);

app.use(errorHandler);

export default app;
