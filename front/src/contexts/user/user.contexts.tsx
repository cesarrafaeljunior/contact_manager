import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildren } from "../../interfaces/react/children.type";
import {
  IUserLogin,
  IUserRegister,
} from "../../interfaces/user/user.interface";
import { request } from "../../services/axios.service";

export const userContext = createContext<any>([] as any);

export const UserProvider = ({ children }: IChildren) => {
  const [token, setToken] = useState<object>({});
  const navigate = useNavigate();

  const signUpUser = async (data: IUserRegister) => {
    request
      .post("client", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const loginUser = (data: IUserLogin) => {
    request
      .post("login", data)
      .then((response) => {
        const { token } = response.data;

        request.defaults.headers.authorization = `Bearer ${token}`;

        setToken(token);

        localStorage.clear();
        localStorage.setItem("contactsM: token", token);
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <userContext.Provider value={{ signUpUser, loginUser, token, setToken }}>
      {children}
    </userContext.Provider>
  );
};
