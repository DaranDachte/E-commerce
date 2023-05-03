import { ActionIcon, Image, Text, Flex, Paper } from "@mantine/core";
import { IconTrashFilled } from "@tabler/icons-react";
import { useStyles } from "./CartItem.style";

const CartItem = ({ product, onRemoveCartItem }) => {
  const { classes } = useStyles();

  return (
    <Paper shadow="sm" radius="md" className={classes.wrapper} p="md" mt="md">
      <Flex justify="space-between" align="center">
        <Image fit="contain" height={100} width={100} src={product.images[0]} />
        <Text fz="xl" fw={500}>
          {product.title}
        </Text>
        <ActionIcon onClick={onRemoveCartItem}>
          <IconTrashFilled size="md" />
        </ActionIcon>
      </Flex>
    </Paper>
  );
};

export default CartItem;
