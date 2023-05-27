import { TechProvider } from "./providers/TechContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle.js";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TechProvider>
        <UserProvider>
          <RoutesMain />
        </UserProvider>
      </TechProvider>
    </>
  );
};

export default App;
