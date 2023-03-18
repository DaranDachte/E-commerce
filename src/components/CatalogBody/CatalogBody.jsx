import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList";

const CatalogBody = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(data);
        setError("");
      } catch (err) {
        setError("Relax, take it easy!");
        setCategories([]);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default CatalogBody;
