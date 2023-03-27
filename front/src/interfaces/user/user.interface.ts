export interface IUserRegister {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserResponse
  extends Omit<IUserRegister, "password" | "confirmPassword"> {
  id: string;
  cratedAt: Date;
}
