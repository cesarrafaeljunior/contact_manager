import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/user/user.contexts";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
};
