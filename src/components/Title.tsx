import { Heading } from "@chakra-ui/react";

const Title = () => {
  return (
    <>
      <Heading paddingBottom={1} fontSize="3rem">
        - TODO LIST -
      </Heading>
      <Heading paddingBottom={8} fontSize="1.4rem">
        List your to do items below.
      </Heading>
    </>
  );
};

export default Title;
