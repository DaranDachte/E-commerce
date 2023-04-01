import { Text, Title, TextInput, Button, Image } from "@mantine/core";

import { useStyles } from "./ErrorBanner.style";
import errorImage from "../../assets/img/Error.svg";

const ErrorBanner = ({ error }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          {error}
        </Text>
        <Text fz="sm" c="dimmed">
          Please, try to refresh the page.
        </Text>
      </div>
      <Image src={errorImage} className={classes.image} />
    </div>
  );
};
export default ErrorBanner;
