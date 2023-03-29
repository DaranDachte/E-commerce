import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    gap: theme.spacing.md,
  },
  productsStretch: {
    flex: 1,
  },
}));
