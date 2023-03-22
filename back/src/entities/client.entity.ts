import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  fullName: string;

  @Column({ type: "varchar", length: 50 })
  username: string;

  @Column({ type: "varchar", length: 50 })
  email: string;

  @Column({ type: "varchar", length: 50 })
  password: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}
