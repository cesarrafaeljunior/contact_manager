import { createContext } from "react";
import { IChildren } from "../../interfaces/react/children.type";
import { IUserRegister } from "../../interfaces/user/user.interface";
import { request } from "../../services/axios.service";

export const userContext = createContext<any>([] as any);

export const UserProvider = ({ children }: IChildren) => {
  const signUpUser = async (data: IUserRegister) => {
    request
      .post("client", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <userContext.Provider value={{ signUpUser }}>
      {children}
    </userContext.Provider>
  );
};
