import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList";
import ProductsList from "../ProductsList";
import ErrorBanner from "../ErrorBanner";
import { useStyles } from "./CatalogBody.style";

const CatalogBody = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { classes } = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categoriesFromAPI } = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(categoriesFromAPI);
        setActiveCategory(categoriesFromAPI[0]);
        const { data: productsFromAPI } = await axios.get(
          `https://dummyjson.com/products/category/${categoriesFromAPI[0]}`
        );
        setProducts(productsFromAPI.products);
        setError("");
      } catch (err) {
        setError("Something is wrong!");
        setCategories([]);
        setProducts([]);
      }
    };

    fetchData();
  }, []);

  const onCategoryClick = async (category) => {
    setActiveCategory(category);
    try {
      const { data: productsFromAPI } = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setProducts(productsFromAPI.products);
    } catch (err) {
      setError("Something is wrong!");
      setCategories([]);
      setProducts([]);
    }
  };

  if (error) {
    return <ErrorBanner error={error} />;
  }

  return (
    <div className={classes.wrapper}>
      <CategoriesList
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={onCategoryClick}
      />
      <div className={classes.productsStretch}>
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default CatalogBody;
