import { DeepPartial } from "typeorm";
import { z } from "zod";
import { contactSchema, returnContactSchema } from "../schemas/contact.schemas";

export type IContactRequest = z.infer<typeof contactSchema>;
export type IContactRturn = z.infer<typeof returnContactSchema>;
export type IUpdateContact = DeepPartial<IContactRequest>;
export type IUpdateContactReturn = IContactRequest;
