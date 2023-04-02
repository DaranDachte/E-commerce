import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { Autocomplete } from "@mantine/core";
import _debounce from "lodash/debounce";
import axios from "axios";
import Loader from "../Loader";
import SearchItem from "../SearchItem";

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const handleChange = async (val) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${val}`
      );
      setProducts(
        data.products.map((product) => ({ ...product, value: product.title }))
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
      setProducts([]);
      setLoading(false);
      // Make a request to the API https://dummyjson.com/docs/products/search?q=phone
      // On success update products to retrieved data
      // On error update error with some message
    }
  };

  const debouncedHandleChange = _debounce(handleChange, 300);

  return (
    <Autocomplete
      data={products}
      onChange={debouncedHandleChange}
      icon={<IconSearch />}
      itemComponent={SearchItem}
      rightSection={loading ? <Loader size="1rem" /> : null}
      placeholder="Search"
    />
  );
};

export default SearchBar;
