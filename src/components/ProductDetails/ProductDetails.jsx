import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { IconShoppingCartPlus, IconArrowNarrowLeft } from "@tabler/icons-react";
import { Text, Button } from "@mantine/core";

import { Image } from "@mantine/core";

import ErrorBanner from "../ErrorBanner";
import Loader from "../Loader";
import { useStyles } from "./ProductDetails.style";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  const { classes } = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setProduct(data);
        setError("");
        setIsLoading(false);
      } catch (error) {
        setError("Something is wrong");
        setProduct(null);
        setIsLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);
  /*
1. if error happens return ErrorBanner with error prop
2. if isLoading is true return <Loader />
3. else return product title
*/
  const backButtonClick = () => {
    navigate(-1);
  };

  if (error) {
    return <ErrorBanner error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  if (product) {
    return (
      <div className={classes.wrapper}>
        <Title order={2}>{product.title}</Title>
        <div className={classes.flex}>
          <div className={classes.leftSection}>
            <Carousel loop mt="1rem" withIndicators>
              {product.images.map((imageSrc) => {
                return (
                  <Carousel.Slide>
                    <Image
                      fit="contain"
                      height={500}
                      radius="md"
                      src={imageSrc}
                    />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          </div>
          <div className={classes.rightSection}>
            <Text fz="xl" fw={700}>
              {product.price} €
            </Text>
            <Text mt="xs" fw={600}>
              {product.description}
            </Text>
            <Text mt="xs" fw={500}>
              Rating: {product.rating}⭐
            </Text>
            <Button mt="xs" radius="xl" leftIcon={<IconShoppingCartPlus />}>
              Add to Cart
            </Button>
          </div>
        </div>
        {/* 
  1. component <Button/> with icon left arrow and text "Back"
  2. make onClick this button to navigate to -1
  */}
        <div className={classes.backButton}>
          <Button onClick={backButtonClick} leftIcon={<IconArrowNarrowLeft />}>
            Back
          </Button>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
