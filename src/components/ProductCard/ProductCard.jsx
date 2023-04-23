import { Card, Image, Text, Group, Badge } from "@mantine/core";

import { useStyles } from "./ProductCard.style";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { classes, cx } = useStyles();
  const clickOnCard = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <Card onClick={clickOnCard} withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          height={150}
          fit="contain"
          src={product.images[0]}
          alt={product.title}
        />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{product.title}</Text>
        </div>
        <Badge variant="outline">{product.discountPercentage}% off</Badge>
      </Group>

      <Card.Section className={cx(classes.section, classes.stretch)} mt="md">
        <Text>{product.description}</Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
            {product.price} €
          </Text>
          <Text ml="auto" fw={500}>
            Rating: {product.rating}⭐
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default ProductCard;
