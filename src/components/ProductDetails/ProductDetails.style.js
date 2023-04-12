import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "80vh",
  },
  flex: {
    display: "flex",
    gap: theme.spacing.xl,

    "@media screen and (max-width: 760px)": {
      flexDirection: "column",
    },
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
  },
  backButton: {
    marginLeft: "auto",
  },
}));
