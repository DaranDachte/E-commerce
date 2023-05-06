import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { Autocomplete } from "@mantine/core";
import _debounce from "lodash/debounce";
import axios from "axios";

import SearchItem from "../SearchItem";

const SearchBar = () => {
  const [products, setProducts] = useState([]);

  const handleChange = async (val) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${val}`
      );
      setProducts(
        data.products.map((product) => ({ ...product, value: product.title }))
      );
    } catch (error) {
      console.error(error);
      setProducts([]);
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
      placeholder="Search"
    />
  );
};

export default SearchBar;
