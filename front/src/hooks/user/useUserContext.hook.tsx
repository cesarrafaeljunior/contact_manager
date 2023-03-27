import { userContext } from "../../contexts/user/user.contexts";
import { useContext } from "react";

export const useUserContext = () => {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error("Not in COntext ");
  }

  return context;
};
