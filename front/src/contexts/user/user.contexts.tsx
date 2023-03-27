import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IContactRegister,
  IContactsResponse,
} from "../../interfaces/contacts/contacts.interface";
import { IChildren } from "../../interfaces/react/children.type";
import {
  IUserLogin,
  IUserRegister,
  IUserResponse,
} from "../../interfaces/user/user.interface";
import { request } from "../../services/axios.service";

export const userContext = createContext<any>([] as any);

export const UserProvider = ({ children }: IChildren) => {
  const [token, setToken] = useState<object>({});
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [contacts, setContacts] = useState<IContactsResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [reloading, setReloading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loading = () => {
      const token = localStorage.getItem("contactsM: token");

      if (token) {
        request.defaults.headers.authorization = `Bearer ${token}`;

        request
          .get("client")
          .then(({ data }) => {
            setUser(data);
            setLoading(false);
          })
          .catch((error) => console.log(error));
        navigate(`/dashboard`, { replace: true });
        request
          .get("contact")
          .then(({ data }) => setContacts(data.contacts))
          .catch((error) => console.log(error));
      }
    };

    loading();
  }, [reloading]);

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
        request
          .get("contact")
          .then(({ data }) => setContacts(data.contacts))
          .catch((error) => console.log(error));
        request
          .get("client")
          .then(({ data }) => {
            setUser(data);
            setLoading(false);
          })
          .catch((error) => console.log(error));
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const registerContact = (data: IContactRegister) => {
    request
      .post("contact", data)
      .then(() => setReloading(!reloading))
      .catch((error) => console.log(error));
  };
  const updateContact = (data: IContactRegister, id: string) => {
    request
      .patch(`contact/${id}`, data)
      .then((response) => {
        console.log(response);
        setReloading(!reloading);
      })
      .catch((error) => console.log(error));
  };

  const deleteContact = (id: string) => {
    request
      .delete(`contact/${id}`)
      .then(() => setReloading(!reloading))
      .catch((error) => console.log(error));
  };

  return (
    <userContext.Provider
      value={{
        signUpUser,
        loginUser,
        token,
        setToken,
        user,
        contacts,
        registerContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
