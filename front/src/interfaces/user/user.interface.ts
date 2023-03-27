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
