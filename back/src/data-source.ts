// src/data-source.ts
import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Client } from "./entities/client.entity";
import { Contact } from "./entities/contact.entity";
import { InitialMigration1679674569352 as migration_1 } from "./database/migrations/1679674569352-InitialMigration";
import { CascadeDeleteAdded1679944471193 as migration_2 } from "./database/migrations/1679944471193-CascadeDeleteAdded";

const dataSourceConfig = (): DataSourceOptions => {
  const dbUrl: string | undefined = process.env.PGDATABASE;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [Client, Contact],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [Client, Contact],
    migrations: [migration_1, migration_2],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
