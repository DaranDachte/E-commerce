import { useEffect, useState } from "react";
import { Box, Text, Group } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";
import { useStyles } from "./CategoriesList.style";

const CategoriesList = ({ categories }) => {
  const { classes, cx } = useStyles();
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    !!categories.length && setActiveCategory(categories[0]);
  }, [categories]);

  const onCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Group mb="md">
        <IconListSearch size="1.1rem" stroke={1.5} />
        <Text>Categories</Text>
      </Group>
      {!!categories.length ? (
        categories.map((category) => {
          return (
            <Box
              onClick={(event) => onCategoryClick(category)}
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
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default CategoriesList;
