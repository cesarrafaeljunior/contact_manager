export interface IContactsResponse {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
  telephone: string;
}

export interface IContactRegister
  extends Omit<IContactsResponse, "createdAt" | "id"> {}
export interface IContactUpdate {
  fullName?: string;
  email?: string;
  telephone?: string;
}
