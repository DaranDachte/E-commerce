import { Text, Image, Flex, List, Anchor, Title } from "@mantine/core";
import { useStyles } from "./About.style";
import logoColor from "../../assets/img/logoColor.jpg";

const About = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Title
        variant="gradient"
        gradient={{ from: "#C1C2C5", to: "#101113", deg: 45 }}
        ta="center"
        order={2}
        size="h1"
      >
        A few words about me, what i want to say now
      </Title>

      <Flex direction={{ base: "column", sm: "row" }} gap="sm" wrap="nowrap">
        <div>
          <Text fw={500} td="line-through" span>
            I thought for a long time about what to write here.
          </Text>{" "}
          <Text component="span" fz="xl" fw={500}>
            Hello, my name is Daran Dachte. I live in the west of Germany and
            I'm doing Web Dev research.
          </Text>
          <Image maw={500} src={logoColor} />
        </div>
        <List size="lg" pl="5rem" fw={500}>
          In my work I use:
          <List.Item>HTML</List.Item>
          <List.Item>CSS</List.Item>
          <List.Item>Java Script</List.Item>
          <List.Item>React</List.Item>
          <List.Item>TypeScript...</List.Item>
          <Text>
            In this project, I decided to study how the <b>Mantine UI</b>{" "}
            framework works and create an E-Commerce website using it. I liked
            the Mantine and I hope to do another project with it to consolidate
            the knowledge gained.{" "}
            <Anchor href="https://mantine.dev/" target="_blank">
              Mantine
            </Anchor>
          </Text>
          <Text>
            I also used the website{" "}
            <Anchor href="https://dummyjson.com/" target="_blank">
              DummyJSON
            </Anchor>{" "}
            to send requests and get the data necessary for work.
          </Text>
          <Text>
            I took the icons from the tabler-icons-react library at &nbsp;
            <Anchor href=" https://tabler-icons.io" target="_blank">
              tabler-icons.io
            </Anchor>
          </Text>
          <Text>
            I found the illustrations on the website{" "}
            <Anchor href="https://undraw.co/" target="_blank">
              unDraw
            </Anchor>{" "}
          </Text>
          <Text>
            I created my logo using the website{" "}
            <Anchor href="https://logo.com/" target="_blank">
              logo.com
            </Anchor>
          </Text>
          <Text>
            The favicon was created using{" "}
            <Anchor href="https://favicon.io/" target="_blank">
              favicon.io
            </Anchor>
          </Text>
          <Text>
            I sent the completed form to{" "}
            <Anchor href="https://formsubmit.co/" target="_blank">
              https://formsubmit.co/
            </Anchor>
          </Text>
          <Text>Photos were taken from several free resources.</Text>
        </List>
      </Flex>
    </div>
  );
};

export default About;
