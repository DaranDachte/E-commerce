import { useForm } from "@mantine/form";
import { useStyles } from "./Contact.style";
import { Text, TextInput, Textarea, Button, Group, Image } from "@mantine/core";

import contactFormImage from "../../assets/img/contactFormImage.svg";
const Contact = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => (value.length < 2 ? "" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : ""),
      message: (value) => (value.length < 10 ? "" : null),
    },
  });

  /* 
  1. Remove Subject field
  2. Make all fields required
  3. Get rid of grid
  4. Add "description" prop with text which is in the picture to Text Inputs
  5. Pass a callback function to onChange event which will trigger form.setFieldValue("", value);
  6. Make Submit button disabled when form is not valid
  */
  return (
    <div className={classes.contact}>
      <div className={classes.wrapper}>
        <Image maw={300} src={contactFormImage} />

        <form
          action="https://formsubmit.co/darandachte@gmail.com"
          method="POST"
          className={classes.form}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <TextInput
              label="Your name"
              placeholder="Your name"
              required
              description="Name must have two or more characters"
              onChange={(e) => form.setFieldValue("name", e.target.value)}
              name="name"
            />
            <TextInput
              label="Your email"
              placeholder="hello@mantine.dev"
              required
              mt="md"
              onChange={(e) => form.setFieldValue("email", e.target.value)}
              name="email"
            />
            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
              required
              description="Message must have ten or more characters"
              onChange={(e) => form.setFieldValue("message", e.target.value)}
              name="message"
            />

            <Group position="right" mt="md">
              <Button
                disabled={!form.isValid()}
                type="submit"
                className={classes.control}
              >
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
