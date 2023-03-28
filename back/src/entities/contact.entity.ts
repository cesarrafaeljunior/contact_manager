import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Client } from "./client.entity";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 25 })
  fullName: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar", length: 20 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.contacts, {
    onDelete: "CASCADE",
  })
  client: Client;
}
