import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  desktopWrapper: {
    padding: theme.spacing.md,
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: theme.radius.md,

    "@media screen and (max-width: 760px)": {
      display: "none",
    },
  },
  category: {
    ...theme.fn.focusStyles(),
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.sm,
    padding: theme.spacing.xs,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    cursor: "pointer",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  categoryActive: {
    fontWeight: 500,
    borderLeftColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 6 : 7],
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 2 : 7],

    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
    },
  },
  mobileWrapper: {
    display: "none",
    "@media screen and (max-width: 760px)": {
      display: "block",
    },
  },
}));
