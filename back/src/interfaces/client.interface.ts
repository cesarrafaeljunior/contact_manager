export interface iClient {
  fullName: string;
  username: string;
  email: string;
  password: string;
  telephone: string;
}

export interface iClientReturn {
  fullName: string;
  username: string;
  email: string;
  password: string;
  telephone: string;
  id: string;
  createdAt: Date;
}
