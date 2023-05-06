import { Box, Text, Group, ActionIcon, Transition, Paper } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";
import Loader from "../Loader";
import { useStyles } from "./CategoriesList.style";
import { useDisclosure } from "@mantine/hooks";
const CategoriesList = ({ categories, activeCategory, onCategoryClick }) => {
  const { classes, cx } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);

  const onCategoryClickHandler = (category) => {
    onCategoryClick(category);
    if (opened) {
      close();
    }
  };

  const items = !!categories.length ? (
    categories.map((category) => {
      return (
        <Box
          onClick={(event) => onCategoryClickHandler(category)}
          key={category}
          className={cx(classes.category, {
            [classes.categoryActive]: activeCategory === category,
          })}
        >
          {category}
        </Box>
      );
    })
  ) : (
    <Loader />
  );

  return (
    <div>
      <div className={classes.desktopWrapper}>
        <Group mb="md">
          <IconListSearch size="1.1rem" stroke={1.5} />
          <Text>Categories</Text>
        </Group>
        {items}
      </div>
      <div className={classes.mobileWrapper}>
        <ActionIcon onClick={toggle}>
          <IconListSearch size="1.1rem" stroke={1.5} />
        </ActionIcon>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default CategoriesList;
