import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppHeader />
        <AppRouter />
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
