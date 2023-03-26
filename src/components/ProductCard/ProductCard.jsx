import { Card, Image, Text, Group, Badge, Center, Button } from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { useStyles } from "./ProductCard.style";

const ProductCard = ({ product }) => {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={product.images[0]} alt={product.title} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{product.title}</Text>
        </div>
        <Badge variant="outline">{product.discountPercentage}% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text>{product.description}</Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              {product.price} €
            </Text>
          </div>

          <Button
            radius="xl"
            style={{ flex: 1 }}
            leftIcon={<IconShoppingCartPlus />}
          >
            Add to the cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default ProductCard;
