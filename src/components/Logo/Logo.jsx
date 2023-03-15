import { ReactComponent as AppLogo } from "../../assets/img/logo.svg";
import { useStyles } from "./Logo.style";

const Logo = () => {
  const { classes } = useStyles();
  return <AppLogo className={classes.logo} />;
};

export default Logo;
