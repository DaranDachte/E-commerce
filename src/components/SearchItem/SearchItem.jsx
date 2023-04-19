import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Group, Image } from "@mantine/core";

const SearchItem = forwardRef(({ title, id, images, ...others }, ref) => {
  const navigate = useNavigate();
  const navigateToSearchItem = (e) => {
    navigate(`/products/${id}`);
  };

  return (
    <div onClick={navigateToSearchItem} ref={ref} {...others}>
      <Group noWrap>
        <Image src={images[0]} height={50} width={50} fit="contain" />
        <div>
          <Text>{title}</Text>
        </div>
      </Group>
    </div>
  );
});

export default SearchItem;
