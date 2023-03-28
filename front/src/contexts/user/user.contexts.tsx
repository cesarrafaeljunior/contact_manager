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
import { toast } from "react-toastify";

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

  const signUpUser = (data: IUserRegister) => {
    request
      .post("client", data)
      .then((response) => {
        toast.success("Sign up success!", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const loginUser = (data: IUserLogin) => {
    request
      .post("login", data)
      .then((response) => {
        toast.success("Logged user", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
      .catch((error) => {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const registerContact = (data: IContactRegister) => {
    request
      .post("contact", data)
      .then(() => {
        toast.success("Contact registered!", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setReloading(!reloading);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  const updateContact = (data: IContactRegister, id: string) => {
    request
      .patch(`contact/${id}`, data)
      .then((response) => {
        toast.success("Contact Updated!", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setReloading(!reloading);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const deleteContact = (id: string) => {
    request
      .delete(`contact/${id}`)
      .then(() => {
        toast.success("Contact deleted!", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setReloading(!reloading);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const deleteUser = (id: string) => {
    console.log(id);
    request
      .delete(`client/${id}`)
      .then((res) => {
        toast.success("Account deleted", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.removeItem("contactsM: token");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const updateUser = (data: any, id: string) => {
    console.log(data);
    request
      .patch(`client/${id}`, data)
      .then((response) => {
        toast.success("User updated", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setReloading(!reloading);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
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
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
