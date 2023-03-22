import "express-async-errors";
import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { errorHandler } from "./errors/errorhandler.errors";

const app = express();
app.use(express.json());

app.use(errorHandler);

export default app;
