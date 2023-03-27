import { createContext } from "react";
import { IChildren } from "../../interfaces/react/children.type";

export const userContext = createContext<any>([] as any);

export const UserProvider = ({ children }: IChildren) => {
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};
