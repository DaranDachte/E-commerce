import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import Catalog from "../../pages/Catalog";
import ProductDetails from "../ProductDetails/ProductDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
