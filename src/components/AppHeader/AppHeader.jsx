import { useState } from "react";
import SearchBar from "../SearchBar";
import { IconShoppingCart } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  ActionIcon,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HEADER_HEIGHT } from "./constants";
import { useStyles } from "./AppHeader.style";
import Logo from "../Logo";
const links = [
  {
    label: "Catalog",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const AppHeader = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  /*
  1. Add Action Icon which will allow to navigate to "/cart" page
  2. Wrap Action Icon with Indicator component from mantine
  */
  const cartQuantity = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : undefined;

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={20} className={classes.root}>
      <Container className={classes.header}>
        <Logo />
        <SearchBar />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <NavLink to="/cart">
          <Indicator label={cartQuantity} disabled={!cartQuantity}>
            <ActionIcon>
              <IconShoppingCart />
            </ActionIcon>
          </Indicator>
        </NavLink>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default AppHeader;
