import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: theme.spacing.xl,
  },
}));
