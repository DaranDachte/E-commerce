import { forwardRef } from "react";
import { Text, Group, Image } from "@mantine/core";

const SearchItem = forwardRef(({ title, images, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Image src={images[0]} height={50} width={50} fit="contain" />

      <div>
        <Text>{title}</Text>
      </div>
    </Group>
  </div>
));

export default SearchItem;
