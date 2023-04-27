import { Heading } from "@chakra-ui/react";

const Title = () => {
  return (
    <>
      <Heading paddingBottom={1} fontSize="4rem">
        - TODO LIST -
      </Heading>
      <Heading paddingBottom={8} fontSize="2rem">
        List your to do items below.
      </Heading>
    </>
  );
};

export default Title;
