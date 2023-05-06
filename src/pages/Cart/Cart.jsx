import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Text, Box } from "@mantine/core";
import CartItem from "../../components/CartItem";
import ErrorBanner from "../../components/ErrorBanner";
import Loader from "../../components/Loader";
import { useStyles } from "./Cart.style";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { classes } = useStyles();

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartIds = JSON.parse(cart); // [1, 2, 3, 4] => [axios.get(/products/1), axios.get(/products/2)];
      const fetchProducts = async () => {
        try {
          const promises = cartIds.map((id) =>
            axios.get(`https://dummyjson.com/products/${id}`)
          );
          const responses = await Promise.all(promises); // [{data: {id: 1, title:}}, {data: {}}]
          const productsFromAPI = responses.map((response) => response.data);
          setProducts(productsFromAPI);
          setLoading(false);
        } catch (e) {
          setError("Something went wrong!");
          setLoading(false);
        }
      };
      fetchProducts();
    }
  }, []);
  /*
  1. On component mounting: get cartItems from localStorage
  2. If they are not undefined make a request to API and get the products by id
  const products = Promise.all([
    axios.get(/products/1)
    axios.get(/products/2)
    axios.get(/products/3)
    axios.get(/products/4)
  ])
   */
  const onRemoveCartItem = (index) => {
    /*
    1. get item from localStorage by key "cart"
    2. check if it's not empty
    3. parse string to array wiht JSON.parse()
    */
    const cart = localStorage.getItem("cart");
    if (cart) {
      const newCart = JSON.parse(cart).filter((id, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(newCart));
      navigate(0);
    }
  };

  if (error) {
    return <ErrorBanner error={error} />;
  }

  if (loading) {
    <Loader />;
  }

  if (products.length) {
    return (
      <Box maw={980} mx="auto" className={classes.wrapper}>
        {products.map((product, index) => (
          <CartItem
            key={product.id}
            product={product}
            onRemoveCartItem={(e) => onRemoveCartItem(index)}
          />
        ))}
      </Box>
    );
  }

  return <Text>You have empty Cart</Text>;
};

export default Cart;
