import { Group, ActionIcon } from "@mantine/core";
import { NavLink } from "react-router-dom";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

import { useStyles } from "./AppFooter.style";

//import ReactLogo from "./logo.svg";
const links = [
  { link: "/", label: "Catalog" },
  { link: "/about", label: "About" },
  { link: "/privacy", label: "Privacy" },
  { link: "/contact", label: "Contact" },
];

const AppFooter = () => {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <NavLink key={link.label} to={link.link}>
      {link.label}
    </NavLink>
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/daran-dachte-031820249/"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://github.com/DaranDachte"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandGithub size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="mailto:darandachte@gmail.com"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconMail size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
};
export default AppFooter;
