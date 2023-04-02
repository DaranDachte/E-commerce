import { Loader as MantineLoader } from "@mantine/core";

const Loader = (props) => {
  return (
    <div>
      <MantineLoader {...props} />
    </div>
  );
};

export default Loader;
