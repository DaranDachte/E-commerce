import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  },
  card: {
    display: "flex",
  },
  imageWrapper: {
    flex: 4,
  },
  werbung: {
    flex: 1,
  },
}));
