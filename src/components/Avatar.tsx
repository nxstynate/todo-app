import { Badge, Box, Flex, Text } from "@chakra-ui/react";

const Avatar = () => {
  const src: string =
    "https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/90559903_10157720001942561_4035026366188486656_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mxZw5t0o5q4AX-50F9p&_nc_ht=scontent-hou1-1.xx&oh=00_AfAn9zK2l2DFXQM4MuV7EHLxA1LaVjjb3p2-yUscWkyITQ&oe=646ECE5D";

  return (
    <>
      <Flex>
        <Avatar src={src} />
        <Box ml="3">
          <Text fontWeight="bold">
            Segun Adebayo
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          </Text>
          <Text fontSize="sm">UI Engineer</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Avatar;
