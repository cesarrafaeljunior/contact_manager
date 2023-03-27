import { UserProvider } from "./contexts/user/user.contexts";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <UserProvider>
      <RoutesMain />;
    </UserProvider>
  );
};
