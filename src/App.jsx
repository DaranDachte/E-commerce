import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import AppHeader from "./components/AppHeader";

const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
