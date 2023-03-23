import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Contact } from "./contact.entity";
import { hashSync } from "bcryptjs";

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

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  encryptPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}
