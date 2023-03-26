import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: theme.spacing.xl,
  },
}));
