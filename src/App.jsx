import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppRouter />
      <AppFooter />
    </BrowserRouter>
  );
};

export default App;
